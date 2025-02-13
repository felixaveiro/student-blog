import React from "react";
import { Newspaper, Clock } from "lucide-react";

export default function NewsPage() {
  return (
    <main className="relative bg-gradient-to-br from-green-800 via-emerald-900 to-green-900 min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 grid grid-cols-3 gap-4 p-8 opacity-40">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="bg-green-200/20 h-40 flex items-center justify-center rounded-xl shadow-lg 
            animate-float transition-all duration-300 hover:bg-green-200/30"
            style={{
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${12 + i * 2}s`,
              transform: `rotate(${i % 2 === 0 ? 3 : -3}deg)`
            }}
          >
            <span className="text-xl font-bold text-green-100/50">
              News {i + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 bg-green-600/80 backdrop-blur-xl text-white p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-green-300/20 hover:border-green-300/30 transition-all duration-300 max-w-3xl mx-4">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="mb-6 animate-bounce">
            <Newspaper className="w-16 h-16 text-green-200" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-green-100 to-emerald-100 bg-clip-text text-transparent">
            News Portal
          </h1>
          
          <div className="flex items-center gap-2 text-green-200 mb-6">
            <Clock className="w-5 h-5 animate-pulse" />
            <p className="text-lg md:text-xl font-medium">Launching Soon</p>
          </div>

          <p className="text-lg md:text-xl text-green-100/90 leading-relaxed max-w-2xl">
            We&apos;re preparing groundbreaking updates in healthcare innovation. 
            Stay tuned for expert insights, research breakthroughs, and transformative announcements.
          </p>

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_4px,rgba(255,255,255,0.05)_4px,rgba(255,255,255,0.05)_8px)]" />
          </div>
        </div>
      </div>

      {/* Subtle Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-300/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </main>
  );
}