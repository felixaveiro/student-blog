"use client"
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you can handle form submission logic (e.g., send data to the backend)
    setStatus("Your message has been sent! We'll get back to you soon.");
  };

  return (
    
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-green-700 text-white py-20">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
            <p className="mt-4 text-lg md:text-xl">
              We&apos;re here to help! Reach out to us for any inquiries or assistance.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-green-700 mb-6">Get in Touch</h2>
                <p className="text-gray-700 mb-6">
                  You can reach us via email, phone, or our physical address. We are here to assist you with any questions you may have.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-6 h-6 text-green-700 mr-4" />
                    <span>Email: info@nursesandmidwives.rw</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-6 h-6 text-green-700 mr-4" />
                    <span>Phone: +250 123 456 789</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-6 h-6 text-green-700 mr-4" />
                    <span>Address: 123 Health Street, Kigali, Rwanda</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-green-700 mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
                {status && (
                  <div className="mt-4 text-center text-green-700 font-semibold">{status}</div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-700 text-white py-16">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold">Want to Contribute?</h2>
            <p className="mt-4 text-lg">
              If you&apos;re passionate about nursing, midwifery, or healthcare,
              consider writing for our blog and sharing your expertise with our
              community.
            </p>
            <button className="mt-6 bg-white text-green-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
              Submit Your Article
            </button>
          </div>
        </section>
      </main>
  );
};

export default ContactPage;
