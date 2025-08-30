"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { SectionTitle } from "./section-title";
import Link from "next/link";
import { motion } from "framer-motion";

const benefits = [
  "Exclusive ISTE certification",
  "Core team opportunities",
  "Skill-building workshops",
  "National-level recognition"
];

const beforeItemVariants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function Membership() {
  return (
    <motion.section 
      id="membership" 
      className="container"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div className="space-y-6" variants={fadeIn}>
          <SectionTitle className="text-left">Become a Member</SectionTitle>
          <motion.p className="text-5xl font-bold font-headline text-primary" variants={fadeIn}>
            ₹295 <span className="text-lg font-normal text-muted-foreground">/ One-time lifetime membership</span>
          </motion.p>
          <ul className="space-y-4">
            {benefits.map((benefit, i) => (
              <motion.li 
                key={benefit} 
                variants={beforeItemVariants}
                className="flex items-start gap-3"
              >
                <Check className="h-6 w-6 text-green-500 rounded-full bg-green-500/20 p-1" />
                <span className="text-lg">{benefit}</span>
              </motion.li>
            ))}
          </ul>
          <motion.div 
            className="text-lg font-semibold text-center md:text-left p-4 rounded-lg"
            variants={fadeIn}
          >
             Join the Tech Elite – Be a Proud ISTE Member!
          </motion.div>
        </motion.div>

        <motion.div className="flex justify-center items-center" variants={fadeIn}>
          <Card className="p-6 bg-card/50 border-border/50 max-w-sm w-full text-center space-y-4 shadow-lg">
            <CardContent className="p-0 space-y-4">
              <h3 className="text-xl font-bold font-headline">Scan to Join</h3>
              <div className="p-4 bg-transparent rounded-lg">
                <Image
                  src="/QR.jpg"
                  alt="QR Code for Membership"
                  width={256}
                  height={256}
                  className="mx-auto"
                  data-ai-hint="qr code"
                />
              </div>
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#">Join Now</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
