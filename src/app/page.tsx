import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Heart, Users, Target, ArrowRight, Shield, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Nursing students"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-green-700/80" />
        </div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
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
              <span className="block text-green-300 mt-4">Healthcare Leaders</span>
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

        {/* Scrolling Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 rounded-3xl border-4 border-white flex items-start justify-center p-1">
            <div className="w-2 h-2 bg-white rounded-full animate-scroll-indicator" />
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative aspect-square overflow-hidden rounded-xl group">
                <Image
                  src={`/images/grid-${item}.jpg`}
                  alt={`Gallery ${item}`}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">View More</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-32 relative bg-green-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative space-y-8">
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
            <div className="relative grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className={`relative overflow-hidden rounded-2xl shadow-xl ${
                  item % 2 === 0 ? 'aspect-video' : 'aspect-square'
                } ${item === 2 || item === 4 ? 'mt-8' : ''}`}>
                  <Image
                    src={`/images/about-${item}.jpg`}
                    alt={`About ${item}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-32 bg-white relative overflow-hidden">
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
                label: "Students Empowered",
                icon: <Users className="w-8 h-8" />,
                color: "from-green-500 to-green-700",
              },
              {
                number: "50+",
                label: "Health Projects",
                icon: <Heart className="w-8 h-8" />,
                color: "from-blue-500 to-blue-700",
              },
              {
                number: "10+",
                label: "National Partnerships",
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

      {/* Programs Section */}
      <section className="py-32 bg-green-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600">
              Discover opportunities to grow, learn, and make an impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Community Health",
                description: "Impactful projects improving rural healthcare",
                icon: <Heart className="w-8 h-8" />,
                image: "/images/program-3.jpg",
              },
              {
                title: "Professional Development",
                description: "Career-building workshops and training",
                icon: <Target className="w-8 h-8" />,
                image: "/images/program-2.jpg",
              },
              {
                title: "Leadership",
                description: "Shaping healthcare future in Rwanda",
                icon: <Users className="w-8 h-8" />,
                image: "/images/program-1.jpg",
              },
            ].map((program, index) => (
              <Card key={index} className="group relative overflow-hidden h-[400px] hover:shadow-2xl transition-all duration-500">
                <Image
                  src={program.image}
                  alt={program.title}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <CardContent className="relative h-full flex flex-col justify-end p-8">
                  <div className="mb-4 text-white">{program.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-white/90 mb-6">{program.description}</p>
                  <Link
                    href="/programs"
                    className="flex items-center text-white font-bold group-hover:gap-2 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}