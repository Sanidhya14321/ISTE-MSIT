import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Medal } from "lucide-react";
import { SectionTitle } from "./section-title";

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

export function Contributions() {
  return (
    <section id="contributions" className="bg-muted/20">
      <div className="container">
        <div className="space-y-12">
          <SectionTitle>Contributions at MSIT</SectionTitle>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            MSIT joined ISTE in 2010 (Reg. No. 1862) and established its Student Chapter in 2015, quickly becoming a hub for technical excellence and leadership.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={cardClassName}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline">
                  <Medal className="h-8 w-8 text-primary" />
                  Our Accolades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {awards.map((award) => (
                    <li key={award} className="flex items-start gap-3">
                      <span className="text-accent mt-1">🏆</span>
                      <span className="flex-1 text-muted-foreground">{award}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className={cardClassName}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    Key Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 shrink-0" />
                        <span className="flex-1 text-muted-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
