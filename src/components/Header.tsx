import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-3xl font-bold flex items-center space-x-4">
  <Link
    href="/"
    className="flex items-center space-x-4 hover:scale-105 transition-transform"
  >
    {/* Logo */}
    <img
      src="/images/logo.jpeg"
      alt="NMSA Rwanda Logo"
      className="w-12 h-12 rounded-full shadow-md"
    />

    {/* Text Content */}
    <div>
      <span className="block font-bold text-yellow-700">NMSAR</span>
      <p className="text-sm text-white">
        Nurse and Midwife <br/>
        Students&apos; Association of Rwanda
      </p>
    </div>
  </Link>
</div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-green-300 hover:underline transition duration-300">
              Home
          </Link>
          <Link href="/about" className="hover:text-green-300 hover:underline transition duration-300">
              About Us
          </Link>
          <Link href="/programs" className="hover:text-green-300 hover:underline transition duration-300">
              Our Programs
          </Link>
          <Link href="/blog" className="hover:text-green-300 hover:underline transition duration-300">
              News
          </Link>
          <Link href="/contact" className="hover:text-green-300 hover:underline transition duration-300">
              Contact Us
          </Link>
         
        </nav>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <Link href="/join">
            
              <Button
                variant="default"
                className="bg-white text-green-600 hover:bg-green-500 hover:text-white font-medium shadow-md transition-all"
              >
                Membership
              </Button>
          </Link>
        </div>

        {/* Mobile Menu (Lucid Dropdown) */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="default" aria-label="Open Menu">
                ☰
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-green-700">
              <DropdownMenuItem asChild>
                <Link href="/" className="block hover:text-green-300">Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about" className="block hover:text-green-300">About Us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/programs" className="block hover:text-green-300">Our Programs
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog" className="block hover:text-green-300">Blog
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact" className="block hover:text-green-300">Contact Us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard" className="block hover:text-green-300">Dashboard
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
