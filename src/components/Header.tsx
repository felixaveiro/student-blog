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
    <header className="bg-gradient-to-r from-green-700 to-emerald-800 text-white shadow-xl sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Enhanced Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 group transform transition duration-300 hover:scale-105"
        >
          <div className="relative flex items-center">
            <div className="absolute inset-0 bg-white/10 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
            <img
              src="/images/logo.jpeg"
              alt="NMSA Rwanda Logo"
              className="w-14 h-14 rounded-full border-2 border-white/20 shadow-xl relative z-10"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-tight text-yellow-400">
              NMSAR
            </span>
            <span className="text-xs text-white/80 font-medium max-w-[120px] leading-tight">
              Nurse & Midwife Students&apos; Association of Rwanda
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Programs", href: "/programs" },
            { name: "News", href: "/blog" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 text-sm font-medium hover:text-yellow-400 transition-colors group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          <div className="ml-4">
            <Link href="/join">
              <Button
                variant="default"
                className="bg-yellow-400 text-green-900 hover:bg-yellow-300 font-bold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Join Us
                <span className="ml-2 text-lg">→</span>
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10 rounded-full h-10 w-10 p-2"
                aria-label="Open Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-emerald-800 border border-white/10 rounded-xl shadow-2xl py-2 min-w-[200px]">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Programs", href: "/programs" },
                { name: "News", href: "/blog" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <div className="border-t border-white/10 mt-2 pt-2">
                <DropdownMenuItem asChild>
                  <Link
                    href="/join"
                    className="px-4 py-3 text-sm font-bold text-green-900 bg-yellow-400 mx-2 rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
                  >
                    Membership
                    <span className="ml-2">↗</span>
                  </Link>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}