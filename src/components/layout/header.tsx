"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const navbarLinks = [
  { label: "About Us", link: "#about" },
  { label: "Contributions", link: "#contributions" },
  { label: "Why ISTE", link: "#why-iste" },
  { label: "Departments", link: "#departments" },
  { label: "Membership", link: "#membership" },
  { label: "Socials", link: "#socials" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        hasScrolled ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
      )}>
      <div className="container flex h-16 items-center">
        <Link href="#" className="mr-6 flex items-center space-x-2" onClick={(e) => handleLinkClick(e, '#')}>
          <Rocket className="h-6 w-6 text-primary" />
          <span className="font-bold inline-block">ISTE MSIT Hub</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navbarLinks.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className="transition-colors hover:text-primary"
              onClick={(e) => handleLinkClick(e, item.link)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#membership" onClick={(e) => handleLinkClick(e, '#membership')}>Join Now</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full py-6">
                <Link href="#" className="mb-8 flex items-center space-x-2" onClick={(e) => handleLinkClick(e, '#')}>
                  <Rocket className="h-6 w-6 text-primary" />
                  <span className="font-bold">ISTE MSIT Hub</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navbarLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.link}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={(e) => handleLinkClick(e, item.link)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="#membership" onClick={(e) => handleLinkClick(e, '#membership')}>Join Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
