import Link from "next/link";
import { Rocket, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="socials" className="bg-muted/20">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="#" className="flex items-center space-x-2 mb-4">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="font-bold">ISTE MSIT Hub</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} ISTE MSIT. All Rights Reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-headline">Contact Us</h4>
            <p className="text-muted-foreground">Hannah Morales, President</p>
            <p className="text-muted-foreground">ISTE Student Chapter, MSIT</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-headline">Stay Connected</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="https://instagram.com/ISTE.MSIT" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
