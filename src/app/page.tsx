import React from "react";
import Link from "next/link";
import { ChevronRight, Heart, Users, Target, Mail, ArrowRight, Star, Shield, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Dynamic Elements */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-900">
          {/* Animated Particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-pulse"
              style={{
                width: `${Math.random() * 12 + 4}rem`,
                height: `${Math.random() * 12 + 4}rem`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 5 + 3}s`,
              }}
            />
          ))}
        </div>
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block animate-bounce-slow mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-full p-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Empowering Future
              <span className="block text-green-300">Healthcare Leaders</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              NMSA Rwanda is your gateway to education, advocacy, and innovation
              in healthcare. Join us in building a brighter future for Rwanda.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/programs" className="group bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Explore Programs
                <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              <Link href="/contact" className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Contact Us
                <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* About Section with Floating Elements */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50" />
              <img
                src="/images/abt.jpg"
                alt="About Us"
                className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -bottom-12 right-12 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-110 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <div className="font-bold text-green-700">1,200+</div>
                    <div className="text-sm text-gray-600">Students Joined</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block">
                <div className="text-sm font-semibold text-green-700 bg-green-100 px-4 py-2 rounded-full">
                  About NMSA Rwanda
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Building a 
                <span className="text-green-700"> Healthier Future</span>
                {" "}Together
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We are a dedicated community of nurse and midwife students
                committed to improving healthcare through education, advocacy,
                and leadership. With our programs, we aim to build a healthier
                Rwanda for everyone.
              </p>
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-2 text-green-700 font-bold hover:gap-4 transition-all duration-300"
              >
                Learn More 
                <ChevronRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section with Animated Cards */}
      <section className="py-32 bg-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Making a difference in healthcare education and community well-being
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "1,200+",
                label: "Nurse & Midwife Students Empowered",
                icon: <Users className="w-8 h-8" />,
                color: "from-green-500 to-green-700",
              },
              {
                number: "50+",
                label: "Community Health Projects Completed",
                icon: <Heart className="w-8 h-8" />,
                color: "from-blue-500 to-blue-700",
              },
              {
                number: "10+",
                label: "National Healthcare Partnerships",
                icon: <Shield className="w-8 h-8" />,
                color: "from-purple-500 to-purple-700",
              },
            ].map((stat, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="relative p-8 text-center">
                  <div className="mb-4 text-green-700 group-hover:text-white transition-colors duration-500">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-500">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section with Interactive Cards */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Our Programs
            </h2>
            <p className="text-xl text-gray-600">
              Discover opportunities to grow, learn, and make an impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Community Health",
                description: "Engage in impactful projects that improve rural healthcare.",
                icon: <Heart className="w-8 h-8" />,
                link: "/programs#community-health",
              },
              {
                title: "Professional Development",
                description: "Workshops and training to build your career in healthcare.",
                icon: <Target className="w-8 h-8" />,
                link: "/programs#professional-development",
              },
              {
                title: "Advocacy & Leadership",
                description: "Lead initiatives that shape the future of healthcare in Rwanda.",
                icon: <Users className="w-8 h-8" />,
                link: "/programs#advocacy-leadership",
              },
            ].map((program, index) => (
              <Link key={index} href={program.link}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="mb-6 text-green-700 transform group-hover:scale-110 transition-transform duration-500">
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {program.description}
                    </p>
                    <div className="flex items-center text-green-700 font-bold group-hover:gap-2 transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section with Modern Design */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-900">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-full p-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Subscribe to our newsletter to receive updates and news about our programs and initiatives.
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