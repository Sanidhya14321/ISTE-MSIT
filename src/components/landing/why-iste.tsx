import { Check } from "lucide-react";
import { SectionTitle } from "./section-title";
import Image from "next/image";
import { Card } from "../ui/card";

const benefits = [
    "Nationally recognized Student Membership Certificate",
    "Access to expert talks, workshops & conferences",
    "NSS credits and certifications with value beyond campus",
    "Exclusive membership perks and journal discounts",
    "Skill-building, leadership & communication growth",
    "Chance to lead national competitions & projects",
    "Premium learning opportunities with AICTE-ISTE programs"
];

export function WhyIste() {
  return (
    <section id="why-iste" className="bg-muted/20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <SectionTitle className="lg:text-left">Why Join ISTE?</SectionTitle>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Check className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
                <Card className="relative group w-full max-w-md aspect-square overflow-hidden rounded-xl border-none shadow-2xl shadow-primary/20">
                    <Image
                        src="https://placehold.co/600x600.png"
                        alt="Students collaborating"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint="students collaboration"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
