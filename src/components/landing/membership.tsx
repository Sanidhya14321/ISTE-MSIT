import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { SectionTitle } from "./section-title";
import Link from "next/link";

const benefits = [
  "Exclusive ISTE certification",
  "Core team opportunities",
  "Skill-building workshops",
  "National-level recognition"
];

export function Membership() {
  return (
    <section id="membership" className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <SectionTitle className="text-left">Become a Member</SectionTitle>
          <p className="text-5xl font-bold font-headline text-primary">
            ₹295 <span className="text-lg font-normal text-muted-foreground">/ One-time lifetime membership</span>
          </p>
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <Check className="h-6 w-6 text-accent rounded-full bg-accent/20 p-1" />
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="text-lg font-semibold text-center md:text-left p-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-lg">
            🚀 Join the Tech Elite – Be a Proud ISTE Member!
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Card className="p-6 bg-card/50 border-border/50 max-w-sm w-full text-center space-y-4 shadow-lg">
            <CardContent className="p-0 space-y-4">
              <h3 className="text-xl font-bold font-headline">Scan to Join</h3>
              <div className="p-4 bg-white rounded-lg">
                <Image
                  src="https://placehold.co/256x256.png"
                  alt="QR Code for Membership"
                  width={256}
                  height={256}
                  className="mx-auto"
                  data-ai-hint="qr code"
                />
              </div>
              <p className="text-muted-foreground text-sm">
                Open your camera or QR scanner app and point it here to open the payment link.
              </p>
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#">Register Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
