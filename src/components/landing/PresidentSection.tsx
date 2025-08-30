"use client";
import { Card } from "@/components/ui/card";
import { Linkedin, Instagram, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "./section-title";

export function PresidentSection() {
  const president = {
    name: "Harshita Gupta",
    role: "President",
    img: "/HarshitaGupta.jpg",
    desc: "Leading our team with vision, innovation, and dedication. Always striving to build a stronger community and inspire the next generation of creators.",
    socials: {
      linkedin: "https://www.linkedin.com/in/harshita-gupta-0759132aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/hg_1728?igsh=YXhpMnJtZHFoeDM4",
      github: "https://github.com/Harshita1738",
    },
  };

  return (
    <section id="president" className="container py-24">
        <div className="mb-12 text-center">
            <SectionTitle>Meet Our President</SectionTitle>
        </div>
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Card className="bg-card/70 border border-border/40 rounded-3xl shadow-2xl overflow-hidden hover:shadow-[0_0_50px_rgba(155,48,255,0.4)] transition-all hover:scale-[1.01]">
          <div className="grid md:grid-cols-2 items-center">
            {/* President Image */}
            <div className="relative h-80 md:h-[500px] w-full">
              <Image
                src={president.img}
                alt={president.name}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* President Info */}
            <div className="p-10 text-center md:text-left space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">{president.name}</h2>
              <p className="text-lg text-primary font-semibold">{president.role}</p>
              <p className="text-muted-foreground leading-relaxed">{president.desc}</p>
              
              {/* Socials */}
              <div className="flex gap-6 justify-center md:justify-start mt-4">
                <a href={president.socials.linkedin} target="_blank">
                  <Linkedin className="w-6 h-6 hover:scale-125 text-white transition" />
                </a>
                <a href={president.socials.instagram} target="_blank">
                  <Instagram className="w-6 h-6 hover:scale-125 text-white transition" />
                </a>
                <a href={president.socials.github} target="_blank">
                  <Github className="w-6 h-6 hover:scale-125 text-white transition" />
                </a>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
