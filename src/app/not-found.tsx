import React from "react";
import Link from "next/link";
import { Ghost, Home, Wrench } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-green-100 text-green-900 overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500 opacity-25 font-mono text-xs animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Math.random() > 0.5 ? "404" : "1101"}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative text-center max-w-lg px-6">
        <Ghost className="w-24 h-24 text-green-500 animate-fade-in mb-6" />
        <h1 className="text-6xl font-extrabold text-green-800 animate-fade-in">404</h1>
        <p className="text-lg text-green-700 mt-4 animate-fade-in">
          Oops! Looks like you&apos;ve wandered off the path...
        </p>
        <p className="text-md text-green-600 animate-fade-in">
          But don’t worry—our technicians are already on it! 🛠️
        </p>

        {/* Home Button */}
        <div className="mt-8 animate-fade-in">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition-all shadow-lg shadow-green-300/50 hover:scale-105"
          >
            <Home className="w-5 h-5" /> Return Home
          </Link>
        </div>

        {/* Technician Message */}
        <div className="mt-6 text-sm text-green-500 flex items-center justify-center gap-2 animate-fade-in">
          <Wrench className="w-4 h-4 text-green-600" />
          <span>We&apos;re fixing this! Please check back soon.</span>
        </div>
      </div>
    </main>
  );
}
