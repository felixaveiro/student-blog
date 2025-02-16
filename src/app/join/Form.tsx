"use client"
import React, { useState } from "react";
import { Input } from "@/components/Input"; 
import { Button } from "@/components/Button";

const JoinFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    nationality: "",
    idNo: "",
    phoneNumber: "",
    email: "",
    regNo: "",
    gender: "",
    birthDate: "",
    civilStatus: "",
    photo: null,
    studentCard: null,
    paymentProof: null,
    universityName: "",
    profession: "",
    program: "",
    levelOfStudy: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <main className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <section className="text-center mb-12">
          <img src="images/logo.jpeg" alt="NAMSAR Logo" className="mx-auto mb-6 w-32 h-32" />
          <h1 className="text-3xl font-bold text-green-700">NURSES AND MIDWIVES STUDENTS ASSOCIATION OF RWANDA</h1>
          <p className="mt-4 text-lg text-gray-600">
            Membership is open to all nursing and midwives students in Rwanda and beyond.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <h2 className="text-xl font-bold mb-6">Identification Form</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700">NAME:</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="surname" className="block text-gray-700">SURNAME:</label>
              <Input
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder="Enter your surname"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nationality" className="block text-gray-700">NATIONALITY:</label>
              <Input
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Enter your nationality"
              />
            </div>
            <div>
              <label htmlFor="idNo" className="block text-gray-700">ID NO:</label>
              <Input
                id="idNo"
                name="idNo"
                value={formData.idNo}
                onChange={handleChange}
                placeholder="Enter your ID number"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-gray-700">EMAIL:</label>
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
              <label htmlFor="regNo" className="block text-gray-700">REG NO:</label>
              <Input
                id="regNo"
                name="regNo"
                value={formData.regNo}
                onChange={handleChange}
                placeholder="Enter your registration number"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="gender" className="block text-gray-700">Gender/Genre:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="birthDate" className="block text-gray-700">Birth date/Date de Naissance:</label>
              <Input
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                type="date"
                placeholder=""
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="civilStatus" className="block text-gray-700">Civil status/Etat Civil:</label>
              <select
                id="civilStatus"
                name="civilStatus"
                value={formData.civilStatus}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
              >
                <option value="">Select Civil Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="photo" className="block text-gray-700">Upload PHOTO:</label>
              <input
                id="photo"
                name="photo"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>
            <div>
              <label htmlFor="studentCard" className="block text-gray-700">Upload STUDENT CARD:</label>
              <input
                id="studentCard"
                name="studentCard"
                type="file"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>
            <div>
              <label htmlFor="paymentProof" className="block text-gray-700">Upload PAYMENT PROOF:</label>
              <input
                id="paymentProof"
                name="paymentProof"
                type="file"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>
          </div>

          <h2 className="text-xl font-bold mt-8 mb-6">Professional Information/Information Professionnelles:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="universityName" className="block text-gray-700">UNIVERSITY NAME:</label>
              <select
                id="universityName"
                name="universityName"
                value={formData.universityName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
              >
                <option value="">Select UNIVERSITY NAME</option>
                <option value="ur">University of Rwanda</option>
                <option value="ulk">University of Lay Adventists of Kigali</option>
                <option value="auca">Adventist University of Central Africa</option>
              </select>
            </div>
            <div>
              <label htmlFor="profession" className="block text-gray-700">PROFESSION:</label>
              <select
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
              >
                <option value="">Select PROFESSION</option>
                <option value="nursing">Nursing</option>
                <option value="midwifery">Midwifery</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="program" className="block text-gray-700">PROGRAM:</label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
              >
                <option value="">Select PROGRAM</option>
                <option value="advanced-diploma">Advanced Diploma</option>
                <option value="bachelors">Bachelor&apos;s Degree</option>
                <option value="masters">Master&apos;s Degree</option>
              </select>
            </div>
            <div>
              <label htmlFor="levelOfStudy" className="block text-gray-700">LEVEL OF STUDY:</label>
              <select
                id="levelOfStudy"
                name="levelOfStudy"
                value={formData.levelOfStudy}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
              >
                <option value="">Select LEVEL OF STUDY</option>
                <option value="year1">Year 1</option>
                <option value="year2">Year 2</option>
                <option value="year3">Year 3</option>
                <option value="year4">Year 4</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button type="submit" className="bg-green-700 text-white py-3 px-6 rounded-lg font-bold hover:bg-green-600 w-full md:w-auto">
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};
export default JoinFormPage;