"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Medal } from "lucide-react";
import { SectionTitle } from "./section-title";
import { motion } from "framer-motion";

const awards = [
  "Awarded Best Faculty Chapter in 2019 by the ISTE Delhi Section.",
  "Recognized as the Best Student Chapter for 2022–23 in the Delhi Section."
];

const activities = [
  "AICTE–ISTE FDPs on ICT & Entrepreneurship (2021–22)",
  "Annual Faculty Convention – Startup Challenges (2019)",
  "E-Summit (2023)",
  "Technical Paper Presentations",
  "Hands-On Workshops & Seminars",
  "Insightful Industrial Visits"
];

const cardClassName = "bg-card/50 border-border/50 h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(155,48,255,0.3)] hover:border-primary/60";

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

export function Contributions() {
  return (
    <motion.section
      id="contributions"
      className="bg-muted/20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="container">
        <div className="space-y-16">
          <SectionTitle>Our Chapter's Contributions at MSIT</SectionTitle>
          <motion.p
            className="text-center text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Since MSIT joined ISTE in 2010 (Reg. No. 1862) and established its Student Chapter in 2015, we have been at the forefront of fostering technical excellence, leadership, and a culture of continuous learning on campus.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn}>
              <Card className={cardClassName}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline text-3xl">
                    <Medal className="h-10 w-10 text-primary" />
                    Chapter Accolades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {awards.map((award, i) => (
                      <motion.li
                        key={award}
                        className="flex items-start gap-4 text-lg"
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={beforeItemVariants}
                      >
                        <span className="text-accent mt-1 text-2xl">🏆</span>
                        <span className="flex-1 text-muted-foreground">{award}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className={cardClassName}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline text-3xl">
                      <CheckCircle className="h-10 w-10 text-primary" />
                      Key Activities & Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {activities.map((activity, i) => (
                      <motion.li
                        key={activity}
                        className="flex items-start gap-4 text-lg"
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={beforeItemVariants}
                      >
                          <CheckCircle className="h-6 w-6 text-accent mt-1 shrink-0" />
                          <span className="flex-1 text-muted-foreground">{activity}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
