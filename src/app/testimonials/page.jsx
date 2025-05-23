'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlayCircle, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import Header from '../header/page';
import Footer from '../footer/page';

function Testimonials() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVideoClick = () => {
    window.open('https://www.youtube.com/watch?v=ekYbB3IkoV8', '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[70vh]">
        <Image
          src="/t1.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center space-y-4 pt-10 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl text-white font-bold leading-tight">
            Testimonials
          </h1>
          <div className="text-gray-600 bg-white rounded-full px-4 py-2 flex items-center space-x-2 text-sm md:text-lg font-semibold">
            <span className="hover:underline cursor-pointer">Home</span>
            <FaArrowRight />
            <span>Testimonials</span>
          </div>
        </div>
      </div>

      {/* Testimonials Title */}
      <div className="max-w-[1300px] mx-auto px-4 py-8">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          <h1 className="text-[40px] lg:text-[60px] font-serif text-gray-800 leading-tight">
            What Our <br className="hidden lg:block" />
            Guests Are
            <br className="hidden lg:block" />
            Saying
          </h1>
          <p className="text-[18px] lg:text-[25px] text-gray-700 lg:pt-[55px]">
            Their words reflect the passion and care we
            <br className="hidden lg:block" />
            put into every dish, and we are honored to
            <br className="hidden lg:block" />
            be a part of their dining memories.
          </p>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {/* Each Review */}
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex flex-col items-center text-center bg-[#E5E3D5] p-6 rounded-lg">
              <Image
                src={`/guest${index}.jpg`}
                alt="Guest"
                width={600}
                height={600}
                className="w-full object-cover rounded-lg"
              />
              <FaQuoteLeft className="text-4xl text-black mb-4" />
              <p className="text-[16px] text-gray-800 mb-4">
                I’ve visited many Italian restaurants, but this one stands out. The ambiance is cozy, and the staff is
                genuinely friendly. The Pepperoni Passion pizza was perfectly spicy and cheesy. A delightful experience
                from start to finish. I’ll definitely be returning with friends!
              </p>
              <h4 className="font-bold text-[#153D19]">Michael T.</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/one.jpg')" }}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75))] bg-opacity-50 flex justify-center items-center">
          <button
            onClick={handleVideoClick}
            className="text-white text-[100px] bg-[#0B170D] hover:scale-110 transition-transform"
            aria-label="Watch Testimonial Video"
          >
            <FaPlayCircle />
          </button>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="text-center my-10 px-4">
        <h2 className="text-3xl md:text-5xl font-sans mb-2 text-gray-900">We Value Your Feedback</h2>
        <p className="text-md md:text-lg text-gray-600">
          Your feedback is important to us. Share your experience to help us improve!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 pb-12 max-w-6xl mx-auto">
        {/* Left Side Image */}
        <div className="w-full p-[30px] bg-[#E5E3D5]">
          <Image
            src="/t2.jpg"
            alt="Side"
            width={500}
            height={800}
            className="rounded shadow-lg h-[500px] ml-[50px]"
          />
        </div>

        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-[#f9f9f9] p-6 rounded-lg shadow-md">
          <div>
            <label className="block text-sm font-medium mb-1">Name:</label>
            <input type="text" required placeholder="Name" className="w-full p-3 bg-white border border-gray-300 rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Job Desk:</label>
            <input
              type="text"
              required
              placeholder="Job Desk"
              className="w-full p-3 bg-white border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Review:</label>
            <textarea rows={4} required placeholder="Share your review" className="w-full p-3 bg-white border border-gray-300 rounded" />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#153D19] hover:bg-[#0B170D] text-white font-bold py-2 px-6 rounded disabled:opacity-50 transition-all"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>

          {submitted && (
            <p className="text-[#153D19] font-semibold text-lg mt-2">Submission completed successfully!</p>
          )}
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Testimonials;
