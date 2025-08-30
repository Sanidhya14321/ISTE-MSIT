"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Linkedin, Instagram, ChevronLeft, ChevronRight, Github } from "lucide-react";
import { SectionTitle } from "./section-title";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Heads Data
const departmentHeads = [
  {
    name: "Udit Bhatia",
    dept: "AI/ML Head",
    img: "/UditBhatia.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/uditbhatia26/",
      instagram: "https://www.instagram.com/udithehee/",
      github: "https://github.com/uditbhatia26"
    },
    className: "object-center",
  },
  {
    name: "Sanidhya Vats",
    dept: "Development Head",
    img: "/SanidhyaVats.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/sanidhya-vats-9344522b7/",
      instagram: "https://www.instagram.com/_vats14321/",
      github: "https://github.com/Sanidhya14321"
    },
    className: "object-center",
  },
  {
    name: "Nikhil Kumar",
    dept: "Event Management Head",
    img: "/NikhilKumar.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/nikhil-kumar-b19571291/",
      github: "https://github.com/Nikhub7-dotcom",
      instagram: "https://www.instagram.com/nikhil.it.iz?igsh=b2NoYzBsbW8zdWJz"
    },
    className: "object-center",
  },
  {
    name: "Pranjal Sharma",
    dept: "Design and Social Media Head",
    img: "/PranjalSharma.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/pranjal-sharma-607252316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/itz_pranjal_28?igsh=MTJzMjV0c2M5OGVjNA==",
      github: "https://github.com/pranjal2876"
    },
    className: "object-top",
  },
  {
    name: "Shivam Verma",
    dept: "PR and Sponsorship Head",
    img: "/ShivamVerma.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/shivamm-verma/",
      instagram: "https://instagram.com/hey.shivammm",
      github: "https://github.com/shivamm-verma"
    },
    className: "object-center",
  },
  {
    name: "Ishika Gulia",
    dept: "Content Writing Head",
    img: "/IshikaGulia.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/ishika-gulia-2a5223295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/ishikagulia_14/",
      github: "https://github.com/ishikagulia1"
    },
    className: "object-top",
  }
];

export function DepartmentHeads() {
  const [index, setIndex] = useState(0);

  // Show 2 at once
  const visibleHeads = [
    departmentHeads[index % departmentHeads.length],
    departmentHeads[(index + 1) % departmentHeads.length],
  ];

  const prevSlide = () =>
    setIndex((prev) => (prev - 2 + departmentHeads.length) % departmentHeads.length);
  const nextSlide = () =>
    setIndex((prev) => (prev + 2) % departmentHeads.length);

  // Number of slides = total heads / 2
  const totalSlides = Math.ceil(departmentHeads.length / 2);
  const currentSlide = Math.floor(index / 2);

  return (
    <section id="heads" className="container py-20">
      <SectionTitle>Meet Our Department Heads</SectionTitle>

      <div className="relative mt-10 flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute -left-10 z-10 p-3 bg-primary/70 rounded-full shadow-md hover:bg-accent/20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Carousel */}
        <div className="w-full max-w-5xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-20">
            <AnimatePresence mode="wait">
              {visibleHeads.map((head, i) => (
                <motion.div
                  key={head.name}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                >
                  <Card className="bg-card/60 border border-border/50 rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(155,48,255,0.3)] hover:scale-[1.02]">
                    <div className="relative h-48 md:h-80 w-full">
                      <Image
                        src={head.img}
                        alt={head.name}
                        fill
                        className={`object-cover ${head.className}`}
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold">{head.name}</h3>
                      <p className="text-sm text-muted-foreground">{head.dept}</p>
                      <div className="flex justify-center gap-4 mt-4">
                        <a href={head.socials.linkedin}><Linkedin className="w-5 h-5 text-primary hover:scale-125 transition text-white" /></a>
                        <a href={head.socials.instagram}><Instagram className="w-5 h-5 text-primary hover:scale-125 transition text-white" /></a>
                        <a href={head.socials.github}><Github className="w-5 h-5 text-primary hover:scale-125 transition text-white" /></a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute -right-10 z-10 p-3 bg-primary/70 rounded-full shadow-md hover:bg-accent/20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i * 2)}
            className={`w-3 h-3 rounded-full transition ${
              i === currentSlide ? "bg-primary" : "bg-gray-400/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
