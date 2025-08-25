import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionTitle } from "./section-title";
import { BarChart, Calendar, Medal, Users } from "lucide-react";

const scaleReach = {
  lifeMembers: "1,35,500+",
  studentMembers: "5,00,000+",
  institutions: "3,052+",
  studentChapters: "1,649+",
  facultyChapters: "1,453+",
};

const stats = [
    { name: 'Life Members', value: scaleReach.lifeMembers, icon: <Users className="h-8 w-8 text-accent" /> },
    { name: 'Student Members', value: scaleReach.studentMembers, icon: <Users className="h-8 w-8 text-accent" /> },
    { name: 'Institutions', value: scaleReach.institutions, icon: <Medal className="h-8 w-8 text-accent" /> },
    { name: 'Student Chapters', value: scaleReach.studentChapters, icon: <BarChart className="h-8 w-8 text-accent" /> },
];

export function About() {
  return (
    <section id="about" className="container">
      <div className="space-y-12">
        <SectionTitle>About Us</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <h3 className="text-2xl font-bold mb-4 font-headline">Our Vision & Mission</h3>
                <p className="text-muted-foreground mb-4">
                    <strong>Vision:</strong> Advance technical education and build a thriving student-tech community.
                </p>
                <p className="text-muted-foreground">
                    <strong>Mission:</strong> Promote innovation, collaboration, and skill development through national-level activities.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-4 font-headline">Our History</h3>
                <p className="text-muted-foreground">
                Founded in 1941 as APTI, it became ISTE in 1968. Today, ISTE partners with AICTE, MHRD & industry leaders to deliver conferences, seminars, journals, and training programs.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <Card key={stat.name} className="bg-card/50 border-border/50">
              <CardHeader className="flex flex-col items-center justify-center gap-4">
                {stat.icon}
                <CardTitle className="text-4xl font-extrabold text-primary">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">{stat.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
