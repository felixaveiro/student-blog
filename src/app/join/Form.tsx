"use client"
import React, { useState } from "react";
import { Input } from "@/components/Input"; 
import { Button } from "@/components/Button";

const JoinFormPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    programOfStudy: "",
    yearOfStudy: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic, can include API call to backend to store data
    console.log("Form submitted", formData);
  };

  return (
      <main className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <section className="text-center mb-12">
            <h1 className="text-3xl font-bold text-green-700">Join the Nurse and Midwife Student Association</h1>
            <p className="mt-4 text-lg text-gray-600">
              Please fill out the form below to join the association and become part of the vibrant community of nursing and midwifery students in Rwanda.
            </p>
          </section>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  type="tel"
                />
              </div>
            </div>

            <div>
              <label htmlFor="programOfStudy" className="block text-gray-700">Program of Study</label>
              <Input
                id="programOfStudy"
                name="programOfStudy"
                value={formData.programOfStudy}
                onChange={handleChange}
                placeholder="Enter your program of study (e.g., Nursing, Midwifery)"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="yearOfStudy" className="block text-gray-700">Year of Study</label>
                <Input
                  id="yearOfStudy"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  placeholder="Enter your year of study"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700">Why do you want to join?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Let us know why you'd like to join the association"
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <Button type="submit" className="bg-green-700 text-white py-3 px-6 rounded-lg font-bold hover:bg-green-600">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </main>
  );
};

export default JoinFormPage;
