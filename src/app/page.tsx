"use client"

import { Header } from "@/components/layout/header";
import { About } from "@/components/landing/about";
import { Contributions } from "@/components/landing/contributions";
import { Departments } from "@/components/landing/departments";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Membership } from "@/components/landing/membership";
import { WhyIste } from "@/components/landing/why-iste";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Contributions />
        <WhyIste />
        <Departments />
        <Membership />
      </main>
      <Footer />
    </div>
  );
}
