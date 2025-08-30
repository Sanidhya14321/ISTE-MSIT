"use client";

import { generateWelcomeMessage } from "@/ai/flows/generate-welcome-message";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { WelcomeMessageOutput } from "@/ai/flows/generate-welcome-message";
import Prism from "../Background";
import Loader from "../ui/Loader";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export function Hero() {
  const [welcomeMessage, setWelcomeMessage] = useState<WelcomeMessageOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { margin: "-100px", once: false });

  useEffect(() => {
    async function getWelcomeMessage() {
      try {
        const messageData = await generateWelcomeMessage({
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

        setWelcomeMessage(messageData);
      } catch (error) {
        console.error("Failed to generate welcome message:", error);
        setWelcomeMessage({
          mainDescription:
            "Welcome to ISTE MSIT – the hub of innovation and technology. Explore your potential with us.",
          societyHighlights: ["Collaborate with peers", "Gain real-world skills"],
          additionalPerks: ["Exclusive networking", "Industry exposure"],
        });
      } finally {
        setIsLoading(false);
      }
    }
    getWelcomeMessage();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100vh] flex items-center justify-center text-center overflow-hidden px-4 sm:px-6 md:px-10"
    >
      {/* Background Animation */}
      {isInView && (
        <div className="absolute inset-0 w-full h-full">
          <Prism
            animationType="rotate"
            timeScale={0.8}
            height={2}
            baseWidth={3.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0.2}
            glow={0.7}
          />
        </div>
      )}

      {/* Foreground Content */}
      <motion.div
        className="relative z-10 max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight font-headline bg-clip-text text-transparent bg-gradient-to-br from-purple-400 via-violet-400 to-white"
          variants={textVariants}
        >
          ISTE MSIT
        </motion.h1>

        {/* AI Generated Sections */}
        <motion.div
          className="mt-6 sm:mt-8 max-w-5xl mx-auto grid gap-6 sm:gap-8"
          variants={textVariants}
        >
          {isLoading ? (
            <div className="flex justify-center">
              <Loader />
            </div>
          ) : (
            <>
              {/* Main Description */}
              <div className="p-4 sm:p-6 rounded-2xl">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground/90">
                  {welcomeMessage?.mainDescription}
                </p>
              </div>

              {/* Society Highlights & Additional Perks side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-left">
                {/* Society Highlights */}
                <div className="p-4 sm:p-6 rounded-2xl bg-background/25 backdrop-blur-sm">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-300 mb-3">
                    Society Highlights
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-foreground/90 text-sm sm:text-base">
                    {welcomeMessage?.societyHighlights?.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Additional Perks */}
                <div className="p-4 sm:p-6 rounded-2xl bg-background/25 backdrop-blur-sm">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-300 mb-3">
                    Additional Perks
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-foreground/90 text-sm sm:text-base">
                    {welcomeMessage?.additionalPerks?.map((perk, idx) => (
                      <li key={idx}>{perk}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4"
          variants={textVariants}
        >
          <Button
            size="lg"
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto"
          >
            <Link href="#membership">Become a Member</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full sm:w-auto"
          >
            <Link href="#about">Learn More</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
