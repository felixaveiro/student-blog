import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Heart,
  Users,
  Target,
  ArrowRight,
  Activity,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProgramsPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-900">
          {/* Animated Floating Circles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-pulse"
              style={{
                width: `${Math.random() * 8 + 4}rem`,
                height: `${Math.random() * 8 + 4}rem`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 5 + 3}s`,
              }}
            />
          ))}
        </div>
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block animate-bounce-slow mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-full p-4">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Our
              <span className="block text-green-300">Programs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Discover opportunities to grow, learn, and create impact in healthcare.
            </p>
          
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Programs Overview Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Our Offerings
            </h2>
            <p className="text-xl text-gray-600">
              Our programs are designed to empower you with the skills and knowledge to excel in the healthcare industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Community Health */}
            <Link href="/programs/community-health">
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="mb-6 text-green-700 transform group-hover:scale-110 transition-transform duration-500">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Community Health
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Engage in projects that drive sustainable improvements in healthcare.
                  </p>
                  <div className="flex items-center text-green-700 font-bold group-hover:gap-2 transition-all duration-300">
                    Learn More
                    <ChevronRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            {/* Professional Development */}
            <Link href="/programs/professional-development">
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="mb-6 text-green-700 transform group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Professional Development
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Workshops and training sessions to build your career in healthcare.
                  </p>
                  <div className="flex items-center text-green-700 font-bold group-hover:gap-2 transition-all duration-300">
                    Learn More
                    <ChevronRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            {/* Advocacy & Leadership */}
            <Link href="/programs/advocacy-leadership">
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="mb-6 text-green-700 transform group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Advocacy & Leadership
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Lead change in healthcare with our advocacy and leadership initiatives.
                  </p>
                  <div className="flex items-center text-green-700 font-bold group-hover:gap-2 transition-all duration-300">
                    Learn More
                    <ChevronRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Program Sections */}
      <section className="py-32 bg-green-50">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Community Health Detail */}
          <div className="flex flex-col lg:flex-row items-center mb-24">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="/images/community.jpg"
                alt="Community Health"
                className="rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Community Health
              </h3>
              <p className="text-xl text-gray-700 mb-6">
                Our Community Health program focuses on grassroots initiatives to improve access to healthcare and promote wellness in underserved communities.
              </p>
              <Link
                href="/programs/community-health"
                className="group inline-flex items-center gap-2 text-green-700 font-bold hover:gap-4 transition-all duration-300"
              >
                Discover More
                <ArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          {/* Professional Development Detail */}
          <div className="flex flex-col lg:flex-row items-center mb-24">
            <div className="lg:w-1/2 lg:order-2 mb-8 lg:mb-0">
              <img
                src="/images/developement.jpg"
                alt="Professional Development"
                className="rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="lg:w-1/2 lg:pr-16 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Development
              </h3>
              <p className="text-xl text-gray-700 mb-6">
                Enhance your career with our workshops, training sessions, and mentorship programs designed to boost your professional skills.
              </p>
              <Link
                href="/programs/professional-development"
                className="group inline-flex items-center gap-2 text-green-700 font-bold hover:gap-4 transition-all duration-300"
              >
                Discover More
                <ArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          {/* Advocacy & Leadership Detail */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="/images/leadership.jpg"
                alt="Advocacy & Leadership"
                className="rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advocacy & Leadership
              </h3>
              <p className="text-xl text-gray-700 mb-6">
                Step up as a leader and advocate for change with programs that empower you to drive impactful healthcare reforms.
              </p>
              <Link
                href="/programs/advocacy-leadership"
                className="group inline-flex items-center gap-2 text-green-700 font-bold hover:gap-4 transition-all duration-300"
              >
                Discover More
                <ArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-900">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-full p-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Subscribe to our newsletter for the latest updates on our programs and healthcare innovations.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
