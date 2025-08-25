"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Palette, CalendarDays, FileText, FlaskConical, Megaphone } from "lucide-react";
import { SectionTitle } from "./section-title";
import { motion } from "framer-motion";

const departments = [
  {
    name: "Technical",
    focus: "Hackathons, coding contests, robotics, AI/ML, Web Dev",
    icon: <Cpu className="h-10 w-10 text-primary" />
  },
  {
    name: "Design & Social Media",
    focus: "Posters, videos, branding, digital presence",
    icon: <Palette className="h-10 w-10 text-primary" />
  },
  {
    name: "Event Management",
    focus: "Seminars, workshops, hackathons, smooth execution",
    icon: <CalendarDays className="h-10 w-10 text-primary" />
  },
  {
    name: "Content",
    focus: "Newsletters, blogs, promotions, storytelling",
    icon: <FileText className="h-10 w-10 text-primary" />
  },
  {
    name: "Research (USP)",
    focus: "Knowledge hub, research methods, publications",
    icon: <FlaskConical className="h-10 w-10 text-primary" />
  },
  {
    name: "PR & Outreach",
    focus: "Event promotion, speaker invites, LinkedIn campaigns",
    icon: <Megaphone className="h-10 w-10 text-primary" />
  }
];

const cardClassName = "bg-card/50 border-border/50 text-center flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(155,48,255,0.3)] hover:border-primary/60";

const cardVariants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
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
      <div className="space-y-12">
        <SectionTitle>Our Departments</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <motion.div key={dept.name} custom={i} variants={cardVariants}>
              <Card className={cardClassName}>
                <CardHeader className="items-center gap-4">
                  {dept.icon}
                  <CardTitle className="font-headline">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{dept.focus}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
