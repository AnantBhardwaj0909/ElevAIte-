"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    return await db.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { clerkUserId: userId }
      });

      if (!user) throw new Error("User not found");

      let industryData = await tx.userIndustry.findUnique({
        where: { industry: data.industry }
      });

      if (!industryData) {
        const insights = await generateAIInsights(data.industry);
        industryData = await tx.userIndustry.create({
          data: {
            industry: data.industry,
            ...insights,
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
          }
        });
      }

      const updatedUser = await tx.user.update({
        where: { id: user.id },
        data: {
          industry: data.industry,
          experience: data.experience,
          bio: data.bio,
          skills: data.skills
        }
      });

      revalidatePath("/");
      return updatedUser;
    });
  } catch (error) {
    console.error("Transaction Error:", error);
    throw new Error("Failed to update profile");
  }
}
export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}

