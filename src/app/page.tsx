import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-green-700 text-white py-20">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              Empowering Future Healthcare Leaders
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              NMSA Rwanda is your gateway to education, advocacy, and innovation
              in healthcare. Join us in building a brighter future for Rwanda.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link href="/programs" className="bg-white text-green-700 px-6 py-3 rounded-md shadow-md font-bold hover:bg-green-100 transition">
                  Explore Programs
              </Link>
              <Link href="/contact" className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-green-700 transition">
                  Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-700">
                About NMSA Rwanda
              </h2>
              <p className="mt-4 text-gray-700">
                We are a dedicated community of nurse and midwife students
                committed to improving healthcare through education, advocacy,
                and leadership. With our programs, we aim to build a healthier
                Rwanda for everyone.
              </p>
              <div className="mt-6">
                <Link href="/about" className="inline-flex items-center text-green-700 font-bold hover:underline">
                    Learn More <ChevronRight className="ml-2" />
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/images/about_us.jpg"
                alt="About Us"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-green-100 py-16">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold text-green-700">
              Our Impact in Numbers
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-green-700">1,200+</h3>
                <p className="mt-2 text-gray-600">
                  Nurse & Midwife Students Empowered
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-green-700">50+</h3>
                <p className="mt-2 text-gray-600">
                  Community Health Projects Completed
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-4xl font-bold text-green-700">10+</h3>
                <p className="mt-2 text-gray-600">
                  National Healthcare Partnerships
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold text-center text-green-700">
              Explore Our Programs
            </h2>
            <p className="mt-4 text-center text-gray-700">
              Discover opportunities to grow, learn, and make an impact.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Community Health",
                  description:
                    "Engage in impactful projects that improve rural healthcare.",
                  link: "/programs#community-health",
                },
                {
                  title: "Professional Development",
                  description:
                    "Workshops and training to build your career in healthcare.",
                  link: "/programs#professional-development",
                },
                {
                  title: "Advocacy & Leadership",
                  description:
                    "Lead initiatives that shape the future of healthcare in Rwanda.",
                  link: "/programs#advocacy-leadership",
                },
              ].map((program, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-green-700">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{program.description}</p>
                  <div className="mt-4">
                    <Link href={program.link} className="text-green-700 font-bold hover:underline">
                        Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-green-100 py-16">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold text-green-700">Meet Our Team</h2>
            <p className="mt-4 text-gray-700">
              Dedicated leaders shaping the future of healthcare.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className="text-center">
                  <img
                    src={`/images/team_member_${member}.jpg`}
                    alt={`Team Member ${member}`}
                    className="w-32 h-32 mx-auto rounded-full shadow-md"
                  />
                  <h4 className="mt-4 font-bold text-green-700">
                    Member Name
                  </h4>
                  <p className="text-gray-600">Role/Position</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-green-700 text-white py-16">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="mt-4 text-lg">
              Subscribe to our newsletter to receive updates and news.
            </p>
            <div className="mt-8 flex justify-center">
              <form className="flex flex-col sm:flex-row w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full sm:w-80 px-4 py-3 rounded-md shadow-sm text-gray-900"
                />
                <button
                  type="submit"
                  className="mt-4 sm:mt-0 sm:ml-4 px-6 py-3 bg-white text-green-700 rounded-md font-bold hover:bg-green-100 transition"
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
