"use client";
import { Check } from "lucide-react";
import { SectionTitle } from "./section-title";
import Image from "next/image";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

const benefits = [
    "Receive a nationally recognized Student Membership Certificate to boost your profile.",
    "Gain unparalleled access to expert talks, hands-on workshops, and national conferences.",
    "Earn NSS credits and obtain certifications with significant value beyond the campus.",
    "Enjoy exclusive membership perks, including discounts on journals and publications.",
    "Sharpen your technical, leadership, and communication skills in a supportive environment.",
    "Get the chance to lead and participate in prestigious national competitions and projects.",
    "Unlock premium learning opportunities with exclusive AICTE-ISTE sponsored programs."
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const beforeItemVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

export function WhyIste() {
  return (
    <motion.section 
      id="why-iste" 
      className="bg-muted/20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div className="space-y-8" variants={fadeIn}>
              <SectionTitle className="lg:text-left">Why Join The ISTE Community?</SectionTitle>
              <motion.p className="text-xl text-muted-foreground lg:text-left" variants={fadeIn}>
                Becoming an ISTE member opens the door to a world of opportunities. We are committed to helping you build a strong foundation for a successful career in technology.
              </motion.p>
              <ul className="space-y-5">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-4"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={beforeItemVariants}
                  >
                    <Check className="h-7 w-7 text-primary mt-1 shrink-0 p-1 bg-primary/20 rounded-full" />
                    <span className="text-xl text-muted-foreground flex-1">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="flex items-center justify-center" variants={fadeIn}>
                <Card className="relative group w-full max-w-lg aspect-square overflow-hidden rounded-2xl border-none shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500">
                    <Image
                        src="/MEME.jpg"
                        alt="Students collaborating on a tech project"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint="students collaboration"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                        <motion.p variants={fadeIn} className="text-lg text-white/80 mt-2">Join a community that builds the future.</motion.p>
                    </div>
                </Card>
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
