"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Medal } from "lucide-react";
import { SectionTitle } from "./section-title";
import { motion } from "framer-motion";

const awards = [
  "Best Faculty Chapter – 2019 (Delhi Section)",
  "Best Student Chapter – 2022–23 (Delhi Section)"
];

const activities = [
  "AICTE–ISTE FDPs on ICT & Entrepreneurship (2021–22)",
  "Annual Faculty Convention – Startup Challenges (2019)",
  "E-Summit (2023)",
  "Tech Paper Presentations, Workshops, Industrial Visits"
];

const cardClassName = "bg-card/50 border-border/50 h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(155,48,255,0.3)] hover:border-primary/60";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
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
        <div className="space-y-12">
          <SectionTitle>Contributions at MSIT</SectionTitle>
          <motion.p
            className="text-center text-muted-foreground max-w-2xl mx-auto"
            variants={fadeIn}
          >
            MSIT joined ISTE in 2010 (Reg. No. 1862) and established its Student Chapter in 2015, quickly becoming a hub for technical excellence and leadership.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn}>
              <Card className={cardClassName}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline">
                    <Medal className="h-8 w-8 text-primary" />
                    Our Accolades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {awards.map((award, i) => (
                      <motion.li
                        key={award}
                        className="flex items-start gap-3"
                        custom={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 + i * 0.1 } }}
                      >
                        <span className="text-accent mt-1">🏆</span>
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
                  <CardTitle className="flex items-center gap-3 font-headline">
                      <CheckCircle className="h-8 w-8 text-primary" />
                      Key Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {activities.map((activity, i) => (
                      <motion.li
                        key={activity}
                        className="flex items-start gap-3"
                        custom={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 + i * 0.1 } }}
                      >
                          <CheckCircle className="h-5 w-5 text-accent mt-1 shrink-0" />
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
