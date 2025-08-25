import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Palette, CalendarDays, FileText, FlaskConical, Megaphone } from "lucide-react";
import { SectionTitle } from "./section-title";

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

export function Departments() {
  return (
    <section id="departments" className="container">
      <div className="space-y-12">
        <SectionTitle>Our Departments</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <Card key={dept.name} className={cardClassName}>
              <CardHeader className="items-center gap-4">
                {dept.icon}
                <CardTitle className="font-headline">{dept.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{dept.focus}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
