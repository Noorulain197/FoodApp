'use client'
import React, { useState } from 'react'
import Header from '../header/page'
import Image from 'next/image'
import { LiaPizzaSliceSolid } from "react-icons/lia"
import { IoCheckmarkSharp } from "react-icons/io5"
import { FaArrowRight } from 'react-icons/fa'
import CountUp from 'react-countup'
import Footer from '../footer/page'

function Services() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500); // simulate loading
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[70vh]">
        <Image
          src="/nine.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center space-y-2 md:space-y-4 pt-10">
          <h1 className="text-[90px] md:text-[110px] font-sans text-white leading-tight text-center">
            Our Services
          </h1>
          <div className="text-gray-700 bg-white rounded-4xl px-4 py-2 flex items-center space-x-2 text-sm md:text-lg font-semibold">
            <span className="hover:underline cursor-pointer">Home</span>
            <FaArrowRight />
            <span>Services</span>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mt-[70px]">
        <h1 className="text-[40px] lg:text-[60px] font-serif text-gray-800 leading-tight">
          Bringing the Best <br className="hidden lg:block" />
          of Italy to Your<br className="hidden lg:block" />
          Table
        </h1>
        <p className="text-[18px] lg:text-[25px] text-gray-700 lg:pt-[55px]">
          We are committed to bringing the best of Italy<br className="hidden lg:block" />
          to your table by offering a true Italian dining<br className="hidden lg:block" />
          experience that combines traditional recipes<br className="hidden lg:block" />
          with fresh ingredients.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[
          { src: "/s1.jpg", title: "Dine-In Experience", desc: "Enjoy an authentic Italian dining experience in a warm and welcoming atmosphere. Our restaurant offers a cozy setting." },
          { src: "/s2.jpg", title: "Takeout & Delivery", desc: "Experience the taste of Italy in the comfort of your own home with our convenient takeout and delivery services." },
          { src: "/s3.jpg", title: "Catering Services", desc: "Make your next event unforgettable with our customized catering services. From intimate gatherings to large celebrations." },
          { src: "/s4.jpg", title: "Private Events", desc: "Host your private event in the charming ambiance of our restaurant. Whether it’s a birthday, anniversary, or corporate." },
          { src: "/s5.jpg", title: "Cooking Classes", desc: "Discover the secrets of Italian cuisine with our interactive cooking classes. Led by our experienced chefs." },
          { src: "/s6.jpg", title: "Wine Tastings", desc: "Explore the rich world of Italian wines with our guided wine tasting events. Whether you’re a wine connoisseur." },
        ].map((item, index) => (
          <div key={index} className="border rounded-md p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow">
            <Image
              src={item.src}
              alt={item.title}
              width={700}
              height={600}
              className="w-full rounded-md"
            />
            <h1 className="text-[30px] font-serif text-center mt-4">{item.title}</h1>
            <p className="text-center mt-2 text-gray-600">{item.desc}</p>
            <button className="mt-4 px-5 py-2 bg-[#153D19] text-white rounded hover:bg-[#0B170D]">
              Get Service
            </button>
          </div>
        ))}
      </div>

      {/* Budget-friendly Packages Section */}
      <div>
        <h1 className="text-4xl font-bold text-center mt-8">
          Delicious Italian Cuisine for Every Budget
        </h1>
        <p className="text-center text-gray-700 mt-4">
          We believe that everyone should be able to enjoy authentic Italian cuisine without worrying about the cost.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 p-6">
          {/* Package 1 */}
          <div className="p-4 rounded-lg">
            <h1 className="text-[50px] font-semibold text-gray-700 p-8 text-center bg-[#E5E3D5]">
              Package 1
            </h1>
            <Image
              src="/s7.jpg"
              alt="Package 1 Image"
              width={700}
              height={500}
              className="rounded-lg shadow-md"
            />

            <div className="grid grid-cols-2 gap-6 bg-[#0B170D] p-6">
              <div>
                <h1 className="text-xl font-bold text-white">Classic Italian Experience</h1>
                <p className="text-white mt-2">
                  The package offers a taste of Italy’s most beloved dishes, perfect for a casual yet fulfilling meal.
                </p>
                <button className="mt-4 px-4 py-2 border border-gray-500 text-gray-500 bg-white hover:bg-gray-200 transition">
                  Book Now
                </button>
              </div>

              <div className="text-white ml-8 space-y-2">
                {[
                  "Three-Course Meal",
                  "Appetizer Choices",
                  "Main Course Selections",
                  "Dessert Options",
                  "Great Value",
                  "Perfect for All Occasions",
                  "Wine Pairings",
                  "Ideal for Celebrations"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <IoCheckmarkSharp className="mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Package 2 */}
          <div className="p-4 rounded-lg">
            <h1 className="text-[50px] font-semibold text-gray-700 p-8 text-center bg-[#E5E3D5]">
              Package 2
            </h1>
            <Image
              src="/s8.jpg"
              alt="Package 2 Image"
              width={700}
              height={500}
              className="rounded-lg shadow-md"
            />

            <div className="grid grid-cols-2 gap-6 bg-[#0B170D] p-6">
              <div>
                <h1 className="text-xl font-bold text-white">Five-Course Italian Experience</h1>
                <p className="text-white mt-2">
                  A luxurious dining experience with five courses to satisfy even the most refined palate.
                </p>
                <button className="mt-4 px-4 py-2 border border-gray-500 text-gray-500 bg-white hover:bg-gray-200 transition">
                  Book Now
                </button>
              </div>

              <div className="text-white ml-8 space-y-2">
                {[
                  "Five-Course Meal",
                  "Appetizer Choices",
                  "Soup Course",
                  "Pasta Course",
                  "Main Course Selections",
                  "Wine Pairings",
                  "Ideal for Celebrations"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <IoCheckmarkSharp className="mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-[150px] grid grid-cols-4 p-8 m-6 border border-gray-400">
        {[
          { count: 20, label: "Years Of Experience" },
          { count: 50, label: "Menu Items" },
          { count: 40, label: "Professional Team" },
          { count: 5900, label: "Positive Reviews", separator: "," }
        ].map((item, idx) => (
          <div key={idx} className="col-span-1 flex flex-col items-center justify-center pl-4">
            <h1 className="text-[90px] text-[#333] text-center font-sans">
              <CountUp end={item.count} duration={2} separator={item.separator} />+
            </h1>
            <h4 className="text-[#333] text-center">{item.label}</h4>
          </div>
        ))}
      </div>

      {/* Reservation Form Section */}
      <div className="w-full bg-[#E5E3D5] mt-[45px] relative overflow-hidden transition-all duration-500">
        <div className="text-center p-8 sm:p-12 relative z-10">
          <h1 className="mt-8 text-[#0B170D] text-[60px] font-serif">
            Reserve Your Table
          </h1>
          <p className="text-[#26412a] font-serif text-[25px] mb-10">
            Planning a special night out or a cozy dinner with loved ones? Secure your spot at our restaurant and enjoy an authentic Italian dining experience.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5 px-4 sm:px-8">
            <div className="flex justify-between space-x-4">
              <input type="text" placeholder="Name" required className="w-1/2 p-3 border border-gray-400 rounded" />
              <input type="email" placeholder="Email" required className="w-1/2 p-3 border border-gray-400 rounded" />
            </div>

            <div className="flex justify-between space-x-4">
              <input type="tel" placeholder="Phone" required className="w-1/2 p-3 border border-gray-400 rounded" />
              <input type="date" required className="w-1/2 p-3 border border-gray-400 rounded" />
            </div>

            <div>
              <textarea placeholder="Message" required className="w-full p-3 border border-gray-400 rounded" rows={4}></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`w-40 px-5 py-3 rounded-md bg-[#0B170D] text-white text-lg font-semibold ${loading ? 'bg-gray-600' : 'hover:bg-[#153D19]'} transition`}
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default Services;
