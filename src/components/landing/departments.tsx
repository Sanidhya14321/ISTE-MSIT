"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Palette, CalendarDays, FileText, FlaskConical, Megaphone } from "lucide-react";
import { SectionTitle } from "./section-title";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const departments = [
  {
    name: "Technical Department",
    description: "The driving force behind our technical events. From hackathons and coding contests to robotics and AI/ML workshops, we empower students with hands-on skills.",
    icon: <Cpu className="h-12 w-12 text-primary" />,
    className: "lg:col-span-2",
  },
  {
    name: "Research Wing (Our USP)",
    description: "Our unique selling proposition. This wing is a knowledge hub dedicated to fostering a research-oriented mindset, guiding students through methodologies and publications.",
    icon: <FlaskConical className="h-12 w-12 text-primary" />,
    className: "lg:col-span-1",
  },
  {
    name: "Design & Social Media",
    description: "The creative minds shaping our brand. They craft stunning visuals, manage our digital presence, and ensure our message resonates across all platforms.",
    icon: <Palette className="h-12 w-12 text-primary" />,
    className: "lg:col-span-1",
  },
  {
    name: "Event Management",
    description: "The architects of our successful events. They meticulously plan and execute every detail to ensure our seminars, workshops, and hackathons run flawlessly.",
    icon: <CalendarDays className="h-12 w-12 text-primary" />,
    className: "lg:col-span-2",
  },
  {
    name: "Content Creation",
    description: "The storytellers of ISTE-MSIT. They create compelling narratives for our newsletters, blogs, and promotional materials, capturing the essence of our community.",
    icon: <FileText className="h-12 w-12 text-primary" />,
    className: "lg:col-span-2",
  },
  {
    name: "PR & Outreach",
    description: "The ambassadors of our chapter. They build connections, promote events, invite distinguished speakers, and manage our professional network on platforms like LinkedIn.",
    icon: <Megaphone className="h-12 w-12 text-primary" />,
    className: "lg:col-span-1",
  }
];

const cardVariants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export function Departments() {
  return (
    <motion.section 
      id="departments" 
      className="container"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="space-y-16">
        <SectionTitle>Our Dynamic Departments</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <motion.div key={dept.name} custom={i} variants={cardVariants} className={cn(dept.className)}>
              <Card className="bg-card/50 border-border/50 h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(155,48,255,0.2)] hover:border-primary/60">
                <CardHeader className="items-start gap-4">
                  {dept.icon}
                  <CardTitle className="font-headline text-2xl text-left">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-left text-lg">{dept.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
