"use client";

import { generateWelcomeMessage } from "@/ai/flows/generate-welcome-message";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WelcomeMessageOutput } from "@/ai/flows/generate-welcome-message";
import Prism from "../Background";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function Hero() {
  const [welcomeMessage, setWelcomeMessage] = useState<WelcomeMessageOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
          message:
            "Welcome to the hub of innovation and technology. Explore your potential with us.",
        });
      } finally {
        setIsLoading(false);
      }
    }
    getWelcomeMessage();
  }, []);

  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Prism Animation */}
      <div className="absolute inset-0 w-full h-auto">
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

      {/* Foreground Content */}
      <motion.div
        className="relative z-10 container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400"
          variants={textVariants}
        >
          ISTE MSIT Hub
        </motion.h1>

        <motion.p
          className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl"
          variants={textVariants}
        >
          {isLoading
            ? "Generating a creative welcome..."
            : welcomeMessage?.message}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          variants={textVariants}
        >
          <Button
            size="lg"
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="#membership">Become a Member</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#about">Learn More</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
