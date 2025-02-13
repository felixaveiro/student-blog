"use client"
import React, { useState } from "react";
import { Users, Target, CheckCircle, Mail, Phone, Heart, Shield, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    id: 1,
    name: "John NGIRINSHUTI",
    role: "President",
    image: "/images/tm1.jpg",
    telephone: "+250786462454",
    email: "johnngirinshuti083@gmail.com",
  },
  {
    id: 2,
    name: "Aurore CYUZUZO IRADUKUNDA",
    role: "Vice President",
    image: "/images/tm2.jpg",
    telephone: "+250785954671",
    email: "cyuzuzoaurore03@gmail.com",
  },
  {
    id: 3,
    name: "Hoziana IMANIZABAYO",
    role: "Secretary",
    image: "/images/tm3.jpg",
    telephone: "+250791067839",
    email: "hosiana125@gmail.com",
  },
  {
    id: 4,
    name: "Oivier IBISHIMIRWE",
    role: "Treasurer",
    image: "/images/tm4.jpg",
    telephone: "+250780564051",
    email: "mfitishimweolivier@gmail.com",
  },
  {
    id: 5,
    name: "Kenneth RWAMUCYO",
    role: "Member",
    image: "/images/tm5.jpg",
    telephone: "+250787774583",
    email: "kennethrwamucyo@gmail.com",
  },
  {
    id: 6,
    name: "UWINEZA Olive",
    role: "Member",
    image: "/images/tm6.jpg",
    telephone: "+250786553519",
    email: "uwinezaolix@gmail.com",
  },
  {
    id: 7,
    name: "Kelly UWASE NIYOMUGABO",
    role: "Member",
    image: "/images/tm7.jpg",
    telephone: "+250790964865",
    email: "uwakelly8@gmail.com",
  },
  {
    id: 8,
    name: "Emmanuel MUSHIMIYIMANA",
    role: "Member",
    image: "/images/tm8.jpg",
    telephone: "+250782030970",
    email: "emushimiyimana912@gmail.com",
  },
];

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Dynamic Elements */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900">
          {/* Animated Background Patterns */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/5 animate-pulse"
                style={{
                  width: `${Math.random() * 10 + 5}rem`,
                  height: `${Math.random() * 10 + 5}rem`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 4 + 2}s`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-5xl">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 animate-spin-slow">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        transform: `rotate(${i * 45}deg) translateY(-4rem)`,
                      }}
                    />
                  ))}
                </div>
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <Heart className="w-12 h-12 text-green-700" />
                </div>
              </div>
            </div>
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 tracking-tight">
              About Us
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Shaping the future of healthcare in Rwanda through education,
              innovation, and compassion
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Interactive Introduction Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50" />
              <img
                src="/images/who.jpg"
                alt="Who We Are"
                className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-green-200/50"
              />
              <div className="absolute -bottom-12 -right-12 bg-white rounded-2xl shadow-xl p-6 transform hover:scale-110 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <div className="font-bold text-green-700">1,200+</div>
                    <div className="text-sm text-gray-600">Active Members</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block">
                <div className="text-sm font-semibold text-green-700 bg-green-100 px-4 py-2 rounded-full">
                  Our Story
                </div>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Nurturing Tomorrow&apos;s
                <span className="text-green-700"> Healthcare Leaders</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Founded in Rwanda, the Nurse and Midwife Student Association
                (NMSA) is more than just an organization—it&apos;s a movement.
                We&apos;re dedicated to empowering the next generation of healthcare
                leaders through education, advocacy, and innovative programs.
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-700" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Trust</div>
                    <div className="text-gray-600">In Healthcare</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-700" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Community</div>
                    <div className="text-gray-600">Focused Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Mission, Vision, Values Cards */}
      <section className="py-32 bg-green-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Mission, Vision, & Values
            </h2>
            <p className="text-xl text-gray-600">
              Guided by purpose, driven by compassion, united in service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-16 h-16" />,
                title: "Mission",
                description:
                  "To nurture nurse and midwife students into leaders who improve healthcare and champion community health projects.",
                color: "from-green-500 to-green-700",
              },
              {
                icon: <CheckCircle className="w-16 h-16" />,
                title: "Vision",
                description:
                  "To build a healthier Rwanda where every individual has access to quality healthcare.",
                color: "from-blue-500 to-blue-700",
              },
              {
                icon: <Users className="w-16 h-16" />,
                title: "Values",
                description:
                  "We are driven by integrity, empathy, collaboration, and a commitment to excellence in healthcare.",
                color: "from-purple-500 to-purple-700",
              },
            ].map((item, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-none"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="relative p-8 text-center h-full">
                  <div className="mb-6 text-green-700 group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-20">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2015",
                event: "NMSA was founded by a group of passionate students.",
                icon: <Star className="w-6 h-6" />,
              },
              {
                year: "2018",
                event: "Launched our first community health outreach program.",
                icon: <Heart className="w-6 h-6" />,
              },
              {
                year: "2020",
                event: "Partnered with national healthcare organizations to expand our impact.",
                icon: <Users className="w-6 h-6" />,
              },
              {
                year: "2023",
                event: "Achieved 1,200+ active members across Rwanda.",
                icon: <Target className="w-6 h-6" />,
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative pl-20 pb-20 last:pb-0 hover:pl-24 transition-all duration-300"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className={`absolute left-0 top-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  activeIndex === index ? 'bg-green-700 text-white scale-110' : 'bg-green-100 text-green-700'
                }`}>
                  {item.icon}
                </div>
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-green-200 last:hidden" />
                <div className="pt-2">
                  <h4 className="text-3xl font-bold text-green-700 mb-4">{item.year}</h4>
                  <p className="text-xl text-gray-600">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid with Advanced Hover Effects */}
      <section className="py-32 bg-green-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Dedicated professionals working together to shape the future of healthcare
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card 
                key={member.id} 
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-900 opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-green-600 animate-pulse group-hover:animate-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-xl text-gray-900 group-hover:text-white mb-2 transition-colors duration-500">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 group-hover:text-white/90 font-medium mb-4 transition-colors duration-500">
                      {member.role}
                    </p>
                    <div className="space-y-3 text-sm text-gray-500 group-hover:text-white/80 transition-colors duration-500">
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{member.telephone}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{member.email}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;