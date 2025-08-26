"use client";

import Link from "next/link";
import { Rocket, Instagram, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <>
      {/* Contact Us Button */}
      <div className="flex justify-center py-8 bg-muted/10">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary text-white px-6 py-2 rounded-xl shadow-md hover:opacity-90 transition">
              Contact Us
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md rounded-2xl p-6">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-primary">
                Get in Touch
              </DialogTitle>
            </DialogHeader>
            <form
              action="https://formspree.io/f/your-form-id" // 🔗 replace with Formspree ID
              method="POST"
              className="flex flex-col space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-2 rounded-lg border border-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-2 rounded-lg border border-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={3}
                required
                className="p-2 rounded-lg border border-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" className="bg-primary text-white rounded-lg">
                Send Message
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Footer */}
      <footer id="socials" className="bg-muted/20">
        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Left Section */}
            <div className="flex flex-col items-center md:items-start">
              <Link href="#" className="flex items-center space-x-2 mb-4">
                <Rocket className="h-6 w-6 text-primary" />
                <span className="font-bold">ISTE MSIT Hub</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} ISTE MSIT. All Rights Reserved.
              </p>
            </div>

            {/* Middle Empty (now handled by dialog above) */}
            <div></div>

            {/* Stay Connected */}
            <div>
              <h4 className="font-semibold mb-4 font-headline">Stay Connected</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link
                  href="https://instagram.com/ISTE.MSIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
