"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Palette, CalendarDays, FileText, FlaskConical, Megaphone } from "lucide-react";
import { SectionTitle } from "./section-title";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DepartmentHeads } from "./departmentHeads";

const departments = [
  {
    name: "Research Wing (Our USP)",
    description: "A hub for innovation—nurturing a research mindset, guiding students in methodologies, publications, and real-world problem-solving.",
    icon: <Cpu className="h-12 w-12 text-accent" />,
    className: "lg:col-span-2",
  },
  {
    name: "Technical Department",
    description: "Powering our tech events—hackathons, coding contests, robotics, and AI/ML workshops that build real-world skills.",
    icon: <FlaskConical className="h-12 w-12 text-accent" />,
    className: "lg:col-span-1",
  },
  {
    name: "Design & Social Media",
    description: "The creative force behind our brand—designing visuals, curating content, and amplifying our voice across digital platforms.",
    icon: <Palette className="h-12 w-12 text-accent" />,
    className: "lg:col-span-1",
  },
  {
    name: "Event Management",
    description: "The backbone of our events—planning and executing seminars, workshops, and hackathons with precision and impact.",
    icon: <CalendarDays className="h-12 w-12 text-accent" />,
    className: "lg:col-span-2",
  },
  {
    name: "Content Creation",
    description: "The voice of ISTE-MSIT—crafting engaging content for blogs, newsletters, and campaigns that capture our community’s spirit.",
    icon: <FileText className="h-12 w-12 text-accent" />,
    className: "lg:col-span-2",
  },
  {
    name: "PR & Outreach",
    description: "The face of our chapter—driving collaborations, promoting events, hosting speakers, and expanding our network on platforms like LinkedIn.",
    icon: <Megaphone className="h-12 w-12 text-accent" />,
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

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
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
      <div className="space-y-16 ">
        <SectionTitle className="p-3">Our Dynamic Departments</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <motion.div key={dept.name} custom={i} variants={cardVariants} className={cn(dept.className)}>
              <Card className="bg-card/50 border-border/50 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_50px_rgba(155,48,255,0.2)] hover:border-primary/60">
                <CardHeader className="items-start gap-2">
                  {dept.icon}
                  <CardTitle className="font-headline text-2xl text-left">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <motion.p variants={fadeIn} className="text-muted-foreground text-left text-sm">{dept.description}</motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <DepartmentHeads />
      </div>
    </motion.section>
  );
}
