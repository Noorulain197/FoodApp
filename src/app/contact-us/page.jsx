"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaChevronDown, FaChevronUp, FaPlus, FaMinus } from 'react-icons/fa';
import Header from '../header/page';
import Footer from '../footer/page';

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleLocation = () => setShowLocation(!showLocation);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    { question: "What is your return policy?", answer: "Our return policy allows returns within 30 days of purchase." },
    { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to most countries." },
    { question: "How can I track my order?", answer: "You can track your order using the tracking number sent to your email." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and Apple Pay." },
    { question: "Do you offer gift cards?", answer: "Yes, we offer digital gift cards that can be purchased on our website." },
    { question: "How can I contact customer support?", answer: "You can contact customer support through our contact page or via email." },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src="/28.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[40px] sm:text-[60px] md:text-[90px] font-bold text-white">Contact Us</h1>
          <div className="text-white mt-2 flex items-center gap-2 bg-white/10 px-4 py-2 rounded text-sm sm:text-base">
            <span className="hover:underline cursor-pointer">Home</span>
            <FaArrowRight />
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-gray-700 mb-4">Get in Touch with Us</h2>
          <p className="text-base text-gray-600 mb-6">
            We’re here to answer any questions about our menu, catering, or events.
          </p>
          <div className="w-full">
            <Image
              src="/26.jpg"
              alt="Contact visual"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[45%] bg-gray-100 p-4 border border-black rounded text-center">
              <h3 className="font-semibold">Call Us</h3>
              <p className="text-sm text-gray-700">+12 286 3486</p>
            </div>
            <div className="flex-1 min-w-[45%] bg-gray-100 p-4 border border-black rounded text-center">
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm text-gray-700">36927 Towne View Lake Daishaton</p>
            </div>
            <div className="w-full bg-gray-100 p-4 border border-black rounded text-center">
              <h3 className="font-semibold">Email Us</h3>
              <p className="text-sm text-gray-700">mail@yoursite.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium">Name</label>
                <input type="text" required className="w-full p-3 border border-gray-300 rounded bg-gray-50" />
              </div>
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input type="email" required className="w-full p-3 border border-gray-300 rounded bg-gray-50" />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Subject</label>
              <input type="text" required className="w-full p-3 border border-gray-300 rounded bg-gray-50" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea rows="4" required className="w-full p-3 border border-gray-300 rounded bg-gray-50"></textarea>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" required />
              <label className="text-sm">I agree to the terms and conditions</label>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-green-800 hover:bg-green-900 text-white font-bold px-6 py-2 rounded transition disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
            {submitted && (
              <p className="text-green-700 font-medium mt-2">Submission completed successfully</p>
            )}
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#E5E3D5] px-4 md:px-10 py-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl text-gray-700 font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Common questions about our Italian restaurant, menu, and services.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {questions.map((item, index) => (
              <div key={index} className="border-b pb-3">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(index)}>
                  <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                  <span className="text-xl text-gray-600">
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/nine.jpg"
              alt="FAQ Image"
              width={500}
              height={400}
              className="rounded-lg shadow-lg w-full max-w-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-gray-100 py-10 px-4 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Our Location</h2>
            <button onClick={toggleLocation} className="text-xl text-gray-600">
              {showLocation ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {showLocation && (
            <div className="space-y-4">
              <div className="text-gray-600 text-base">
                <p><strong>Address:</strong> 36927 Towne View Lake Daishaton</p>
                <p><strong>Phone:</strong> +12 286 3486</p>
                <p><strong>Open Hours:</strong> Mon - Fri, 10:00 AM - 8:00 PM</p>
              </div>
              <div className="w-full h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18..."
                  className="w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
