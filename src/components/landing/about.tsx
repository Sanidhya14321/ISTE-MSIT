"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionTitle } from "./section-title";
import { BarChart, Medal, Users } from "lucide-react";
import { AnimatedCounter } from "../ui/animated-counter";
import { motion } from "framer-motion";

const stats = [
    { name: 'Life Members', value: 135500, icon: <Users className="h-10 w-10 text-accent" />, suffix: "+" },
    { name: 'Student Members', value: 500000, icon: <Users className="h-10 w-10 text-accent" />, suffix: "+" },
    { name: 'Institutions', value: 3052, icon: <Medal className="h-10 w-10 text-accent" />, suffix: "+" },
    { name: 'Student Chapters', value: 1649, icon: <BarChart className="h-10 w-10 text-accent" />, suffix: "+" },
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
      <div className="space-y-16">
        <SectionTitle>About The Indian Society for Technical Education</SectionTitle>
        <motion.div className="grid md:grid-cols-2 gap-12 items-center" variants={fadeIn}>
            <div className="space-y-4">
                <motion.h3 className="text-3xl font-bold font-headline" variants={fadeIn}>Our Vision & Mission</motion.h3>
                <motion.p className="text-lg text-muted-foreground" variants={fadeIn}>
                    <strong>Vision:</strong> To be a leading force in the advancement of technical education, fostering a vibrant community of educators and students dedicated to innovation, excellence, and lifelong learning.
                </motion.p>
                <motion.p className="text-lg text-muted-foreground" variants={fadeIn}>
                    <strong>Mission:</strong> To stimulate, promote, and foster innovation and collaboration in the technical education ecosystem through impactful national-level activities, workshops, and seminars that enhance skill development.
                </motion.p>
            </div>
            <div className="space-y-4">
                <motion.h3 className="text-3xl font-bold mb-4 font-headline" variants={fadeIn}>A Rich History of Excellence</motion.h3>
                <motion.p className="text-lg text-muted-foreground" variants={fadeIn}>
                Originally founded in 1941 as the Association of Principals of Technical Institutions (APTI), the organization was transformed into the Indian Society for Technical Education (ISTE) in 1968. Today, ISTE is a premier national society that partners with AICTE, MHRD, and industry leaders to deliver high-impact conferences, seminars, and training programs that shape the future of technical education.
                </motion.p>
            </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div key={stat.name} custom={i} variants={fadeIn}>
              <Card className="bg-card/50 border-border/50 h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(155,48,255,0.3)] hover:border-primary/60">
                <CardHeader className="flex flex-col items-center justify-center gap-4">
                  {stat.icon}
                  <CardTitle className="text-5xl font-extrabold text-primary">
                      <AnimatedCounter from={0} to={stat.value} />
                      {stat.suffix}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground font-medium">{stat.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
