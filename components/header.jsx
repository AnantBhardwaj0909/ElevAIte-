import React from 'react';
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import Image from 'next/image';
import { FileText, GraduationCap, LayoutDashboard, PenBox, Camera } from 'lucide-react';
import { Button } from './ui/button';
import {DropdownMenu,DropdownMenuTrigger,DropdownMenuItem,DropdownMenuContent} from './ui/dropdown-menu'
import { StarsIcon,ChevronDown} from 'lucide-react';
import { checkUser } from '@/lib/checkUser';

const Header =async() => {
  await checkUser();
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between ">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="ElevAIte Logo"
            width={100}
            height={80}
            className="h-16 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                <span className='hidden md:block'>Industry Insight</span>
              </Button>
            </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="flex items-center gap-2">
                <StarsIcon className="h-4 w-4" />
                <span className='hidden md:block'>Growth Tools</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={'/resume'} className='flex items-center gap-2'>
                <FileText className="h-4 w-4" />
                <span>Build Resume</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link href={'/Cover'} className='flex items-center gap-2'>
                <PenBox className="h-4 w-4" />
                <span>Cover Letter</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link href={'/Interview'} className='flex items-center gap-2'>
                <GraduationCap className="h-4 w-4" />
                <span>Interview Prep</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link href={'/mock'} className='flex items-center gap-2'>
                <Camera className="h-4 w-4" />
                <span>Mock Interviewer</span>
              </Link>
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>

        <UserButton 
          appearance={{
            elements:{
              avatarBox:'w-10 h-10',
              userButtonPopoverCard:"shadow-xl",
              userPreviewMainIdentifier:"font-semibold",
            },
          }}
          afterSignOutUrl='/'
        />

        </SignedIn>

        <SignedOut>
          <div className="flex gap-2">
            <SignInButton>
              <Button variant='Outline'>Sign In</Button>
            </SignInButton>
            <SignUpButton />
          </div>
        </SignedOut>

        </div>
      </nav>
    </header>
  );
};

export default Header;
