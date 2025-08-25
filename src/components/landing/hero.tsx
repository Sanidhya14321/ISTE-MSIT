import { generateWelcomeMessage } from "@/ai/flows/generate-welcome-message";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedBackground } from "../ui/animated-background";

export async function Hero() {
  const welcomeMessageData = await generateWelcomeMessage({
    departments: [
      "Technical",
      "Design & Social Media",
      "Event Management",
      "Content",
      "Research (USP)",
      "PR & Outreach",
    ],
    values: [
      "Nationally recognized Student Membership Certificate",
      "Access to expert talks, workshops & conferences",
      "NSS credits and certifications with value beyond campus",
      "Exclusive membership perks and journal discounts",
      "Skill-building, leadership & communication growth",
      "Chance to lead national competitions & projects",
      "Premium learning opportunities with AICTE-ISTE programs",
    ],
    tone: "energetic and professional",
  });

  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <AnimatedBackground />
      <div className="container z-10 animate-fade-in-up">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400">
          ISTE MSIT Hub
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl">
          {welcomeMessageData.message}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#membership">Become a Member</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
