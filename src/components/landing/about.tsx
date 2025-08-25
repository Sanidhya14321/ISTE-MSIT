"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionTitle } from "./section-title";
import { BarChart, Medal, Users } from "lucide-react";
import { AnimatedCounter } from "../ui/animated-counter";
import { motion } from "framer-motion";

const stats = [
    { name: 'Life Members', value: 135500, icon: <Users className="h-8 w-8 text-accent" />, suffix: "+" },
    { name: 'Student Members', value: 500000, icon: <Users className="h-8 w-8 text-accent" />, suffix: "+" },
    { name: 'Institutions', value: 3052, icon: <Medal className="h-8 w-8 text-accent" />, suffix: "+" },
    { name: 'Student Chapters', value: 1649, icon: <BarChart className="h-8 w-8 text-accent" />, suffix: "+" },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function About() {
  return (
    <motion.section 
      id="about" 
      className="container"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="space-y-12">
        <SectionTitle>About Us</SectionTitle>
        <motion.div className="grid md:grid-cols-2 gap-8 items-center" variants={fadeIn}>
            <div>
                <motion.h3 className="text-2xl font-bold mb-4 font-headline" variants={fadeIn}>Our Vision & Mission</motion.h3>
                <motion.p className="text-muted-foreground mb-4" variants={fadeIn}>
                    <strong>Vision:</strong> Advance technical education and build a thriving student-tech community.
                </motion.p>
                <motion.p className="text-muted-foreground" variants={fadeIn}>
                    <strong>Mission:</strong> Promote innovation, collaboration, and skill development through national-level activities.
                </motion.p>
            </div>
            <div>
                <motion.h3 className="text-2xl font-bold mb-4 font-headline" variants={fadeIn}>Our History</motion.h3>
                <motion.p className="text-muted-foreground" variants={fadeIn}>
                Founded in 1941 as APTI, it became ISTE in 1968. Today, ISTE partners with AICTE, MHRD & industry leaders to deliver conferences, seminars, journals, and training programs.
                </motion.p>
            </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <motion.div key={stat.name} custom={i} variants={fadeIn}>
              <Card className="bg-card/50 border-border/50">
                <CardHeader className="flex flex-col items-center justify-center gap-4">
                  {stat.icon}
                  <CardTitle className="text-4xl font-extrabold text-primary">
                      <AnimatedCounter from={0} to={stat.value} />
                      {stat.suffix}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium">{stat.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
