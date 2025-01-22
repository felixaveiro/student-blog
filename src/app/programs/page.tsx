import React from "react";
import { GraduationCap, Stethoscope, Heart } from "lucide-react";

const ProgramsPage = () => {
  return (
  
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-green-700 text-white py-20">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">Our Programs</h1>
            <p className="mt-4 text-lg md:text-xl">
              Empowering the next generation of healthcare professionals through
              innovative and impactful programs.
            </p>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-700">
                What We Offer
              </h2>
              <p className="mt-4 text-gray-700">
                Explore our programs tailored to enhance skills, knowledge, and
                leadership in healthcare.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Program Card 1 */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <GraduationCap className="w-16 h-16 text-green-700 mx-auto" />
                <h3 className="mt-4 text-xl font-bold text-green-700">
                  Professional Training
                </h3>
                <p className="mt-2 text-gray-600">
                  Enhance your skills with hands-on training programs led by
                  experienced healthcare professionals.
                </p>
              </div>
              {/* Program Card 2 */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Stethoscope className="w-16 h-16 text-green-700 mx-auto" />
                <h3 className="mt-4 text-xl font-bold text-green-700">
                  Community Health Outreach
                </h3>
                <p className="mt-2 text-gray-600">
                  Participate in impactful projects that promote community
                  health and wellness.
                </p>
              </div>
              {/* Program Card 3 */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Heart className="w-16 h-16 text-green-700 mx-auto" />
                <h3 className="mt-4 text-xl font-bold text-green-700">
                  Advocacy and Leadership
                </h3>
                <p className="mt-2 text-gray-600">
                  Develop leadership skills and advocate for improved healthcare
                  policies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-green-100 py-16">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold text-green-700">
              What Our Members Say
            </h2>
            <p className="mt-4 text-gray-700">
              Hear from students and professionals who have benefited from our
              programs.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((testimonial) => (
                <div
                  key={testimonial}
                  className="bg-white shadow-md rounded-lg p-6"
                >
                  <p className="text-gray-600 italic">
                    &quot;This program gave me the confidence and skills to make a
                    difference in my community.&quot;
                  </p>
                  <div className="mt-4 flex items-center">
                    <img
                      src={`/images/testimonial_${testimonial}.jpg`}
                      alt={`Testimonial ${testimonial}`}
                      className="w-12 h-12 rounded-full shadow-md"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-green-700">Member Name</h4>
                      <p className="text-gray-600 text-sm">Role/Position</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-700 text-white py-16">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold">Join Us Today!</h2>
            <p className="mt-4 text-lg">
              Be part of a community dedicated to transforming healthcare
              education and service.
            </p>
            <button className="mt-6 bg-white text-green-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
              Explore Membership
            </button>
          </div>
        </section>
      </main>
  );
};

export default ProgramsPage;
