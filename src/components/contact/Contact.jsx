import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl text-center mb-6 font-bold">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="text-gray-600">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows="4"
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-md hover:from-orange-400 hover:to-red-400 focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
