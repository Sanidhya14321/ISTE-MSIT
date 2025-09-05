"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        hasScrolled
          ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="#"
            className="mr-6 flex items-center space-x-2"
            onClick={(e) => handleLinkClick(e, "#")}
          >
            <span className="font-bold text-xl inline-block">ISTE-MSIT</span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {navbarLinks.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={item.link}
                className="transition-colors hover:text-primary"
                onClick={(e) => handleLinkClick(e, item.link)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* CTA Button (Desktop only) */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link
                href="#membership"
                onClick={(e) => handleLinkClick(e, "#membership")}
              >
                Join Now
              </Link>
            </Button>
          </motion.div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-6">
              <div className="flex flex-col h-full">
                {/* Logo in Drawer */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href="#"
                    className="mb-8 flex items-center space-x-2"
                    onClick={(e) => handleLinkClick(e, "#")}
                  >
                    <Rocket className="h-6 w-6 text-primary" />
                    <span className="font-bold">ISTE-MSIT</span>
                  </Link>
                </motion.div>

                {/* Links */}
                <nav className="flex flex-col space-y-4">
                  <AnimatePresence>
                    {navbarLinks.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link
                          href={item.link}
                          className="text-lg font-medium transition-colors hover:text-primary"
                          onClick={(e) => handleLinkClick(e, item.link)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </nav>

                {/* CTA in Drawer */}
                <motion.div
                  className="mt-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link
                      href="#membership"
                      onClick={(e) => handleLinkClick(e, "#membership")}
                    >
                      Join Now
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
