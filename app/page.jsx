import Image from "next/image";
import {button} from "@/components/ui/button";
import HeroSection from '@/components/ui/Hero'
import { features } from "./data/features";
import { Card,CardContent } from "@/components/ui/card";
import { howItWorks } from "./data/howItWorks";
import { testimonial } from "./data/testimonial";
import { faqs } from "./data/faq";
import { Accordion,AccordionContent,AccordionItem,AccordionTrigger,} from "@/components/ui/accordion";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-extrabold tracking-tight text-center mb-16 text-gray-900 dark:text-white">
            User Reviews
          </h2>
      
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-transparent hover:border-primary shadow-sm hover:shadow-md transition-all duration-300 rounded-4xl backdrop-blur-md bg-opacity-90 ring-1 ring-green-400/20"
              >
                <CardContent className="flex flex-col items-center text-center space-y-4 py-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {feature.author}
                  </h3>
      
                  <h4 className="text-sm font-semibold text-muted-foreground">
                    {feature.role} · {feature.company}
                  </h4>
      
                  <p className="text-sm text-muted-foreground max-w-xs">
                    {feature.quote}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-extrabold text-primary">50+</h3>
              <p className="text-sm text-muted-foreground">Industries Covered</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-extrabold text-primary">1000+</h3>
              <p className="text-sm text-muted-foreground">Interview Questions</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-extrabold text-primary">95%</h3>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-extrabold text-primary">24/7</h3>
              <p className="text-sm text-muted-foreground">AI Support</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold mb-4">HOW IT WORKS</h2>
          <p className="text-muted-foreground">Four Simple Steps To Accelerate Your Career Growth</p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {howItWorks.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-xl">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-extrabold tracking-tight text-center mb-16 text-gray-900 dark:text-white">User Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonial.map((feature, index) => (
            <Card key={index} className="border-2 border-transparent hover:border-primary shadow-sm hover:shadow-md transition-all duration-300 rounded-4xl backdrop-blur-md bg-opacity-90 ring-1 ring-green-400/20">
              <CardContent className="flex flex-col items-center text-center space-y-4">
                <img src={feature.image} alt={feature.author} className="w-16 h-16 rounded-full object-cover border border-muted" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{feature.author}</h3>
                <h4 className="text-sm font-semibold text-muted-foreground">{feature.role} · {feature.company}</h4>
                <p className="text-sm text-muted-foreground max-w-xs">{feature.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

  <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-4xl font-extrabold tracking-tight text-center mb-4 text-gray-900 dark:text-white">FAQ's</h2>
    <p className="text-muted-foreground text-center mb-16">
      Find Answers To Most Commonly Asked Questions About Us
    </p>
  </div>
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible>
      {faqs.map((feature, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger>{feature.question}</AccordionTrigger>
          <AccordionContent>{feature.answer}</AccordionContent>
        </AccordionItem>
      ))}
      </Accordion>
     </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="relative mx-auto px-6 py-24 max-w-4xl text-center rounded-3xl bg-gradient-to-br from-green-100/50 to-green-300/30 dark:from-green-900/30 dark:to-green-700/20 backdrop-blur-md bg-opacity-90 ring-1 ring-green-400/20 shadow-lg">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Ready To Be Mentored?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Ready to grow? Team up with our expert AI mentor and join thousands of professionals who’ve already leveled up.
        </p>
        <Link href="/dashboard" passHref>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </section>


    </div>
  );
}
