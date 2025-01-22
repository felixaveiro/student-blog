import React from "react";
import { Users, Target, CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-green-700 text-white py-20">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
            <p className="mt-4 text-lg md:text-xl">
              Get to know the heart of our association and the people driving
              change in healthcare education and advocacy.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-700">
                Who We Are
              </h2>
              <p className="mt-4 text-gray-700">
                Founded in Rwanda, the Nurse and Midwife Student Association
                (NMSA) is a community-driven organization dedicated to
                empowering the next generation of healthcare leaders. Through
                education, advocacy, and innovative programs, we strive to
                create a healthier and more equitable society.
              </p>
            </div>
            <div>
              <img
                src="/images/about_who_we_are.jpg"
                alt="Who We Are"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="bg-green-100 py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-700">
                Our Mission, Vision, & Values
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Target className="w-16 h-16 text-green-700 mx-auto" />
                <h3 className="mt-4 text-xl font-bold text-green-700">
                  Mission
                </h3>
                <p className="mt-2 text-gray-600">
                  To nurture nurse and midwife students into leaders who improve
                  healthcare and champion community health projects.
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-700 mx-auto" />
                <h3 className="mt-4 text-xl font-bold text-green-700">
                  Vision
                </h3>
                <p className="mt-2 text-gray-600">
                  To build a healthier Rwanda where every individual has access
                  to quality healthcare.
                </p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-green-700 mx-auto" />
                <h3 className="mt-4 text-xl font-bold text-green-700">
                  Values
                </h3>
                <p className="mt-2 text-gray-600">
                  We are driven by integrity, empathy, collaboration, and a
                  commitment to excellence in healthcare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold text-green-700 text-center">
              Our History
            </h2>
            <p className="mt-4 text-gray-700 text-center">
              A journey of growth and impact.
            </p>
            <div className="mt-10">
              <ol className="border-l-2 border-green-700">
                {[
                  {
                    year: "2015",
                    event: "NMSA was founded by a group of passionate students.",
                  },
                  {
                    year: "2018",
                    event:
                      "Launched our first community health outreach program.",
                  },
                  {
                    year: "2020",
                    event:
                      "Partnered with national healthcare organizations to expand our impact.",
                  },
                  {
                    year: "2023",
                    event: "Achieved 1,200+ active members across Rwanda.",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="mb-10 ml-4 flex flex-col md:flex-row items-start md:items-center"
                  >
                    <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.year.slice(-1)}
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4">
                      <h4 className="text-xl font-bold text-green-700">
                        {item.year}
                      </h4>
                      <p className="mt-2 text-gray-600">{item.event}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-green-100 py-16">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold text-green-700">Meet Our Team</h2>
            <p className="mt-4 text-gray-700">
              Dedicated individuals leading our mission.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
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
      </main>
      
  );
};

export default AboutPage;
