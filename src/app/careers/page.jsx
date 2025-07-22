"use client";
import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Header from "../header/page";
import Footer from "../footer/page";

function Careers() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [slider]);

  const values = [
    {
      title: "Career Growth",
      text: "We believe in nurturing talent from within and provide clear pathways.",
    },
    {
      title: "Competitive Pay",
      text: "We offer competitive compensation that rewards hard work and dedication.",
    },
    {
      title: "Passionate Team",
      text: "Join a team that shares your passion for excellence in every aspect.",
    },
    {
      title: "Community Spirit",
      text: "You’ll make lasting friendships and enjoy being part of a supportive network.",
    },
  ];

  const chefs = [
    { src: "/26.jpg", name: "Chef Antonio" },
    { src: "/c2.jpg", name: "Chef Maria" },
    { src: "/c3.jpg", name: "Chef Liu" },
    { src: "/c4.jpg", name: "Chef Amara" },
    { src: "/c5.jpg", name: "Chef Thomas" },
    { src: "/c6.jpg", name: "Chef Naomi" },
    { src: "/c7.jpg", name: "Chef Omar" },
    { src: "/c8.jpg", name: "Chef Elise" },
  ];

  const testimonials = [
    {
      text: "My name is Lorenzo and I manage Trattoria Roma. I make sure everything runs smoothly and our guests leave with a smile. I love creating a welcoming atmosphere for everyone who walks in.",
      heading: "Lorenzo Ricci",
      sub: "Manager",
    },
    {
      text: "Ciao! I'm Martina, the head chef here. I specialize in traditional Roman dishes and cook with passion every single day. Bringing authentic flavors to every plate is my mission.",
      heading: "Martina Bianchi",
      sub: "Chef",
    },
    {
      text: "I’m Giacomo, and I keep the kitchen clean and organized. Washing dishes might seem simple, but it’s the backbone of a smooth service. I take pride in my work and stay sharp throughout the shift.",
      heading: "Giacomo Ferri",
      sub: "Dishwasher",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[70vh]">
        <Image
          src="/s3.jpg"
          alt="Careers Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center text-white text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold">Careers</h1>
          <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
            <span className="hover:underline cursor-pointer">Home</span>
            <FaArrowRight />
            <span>Careers</span>
          </div>
        </div>
      </div>

      {/* Be Part Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 p-8 gap-8">
        <div className="w-full max-w-[600px] mx-auto bg-gray-200 p-4 rounded-lg">
          <Image
            src="/25.jpg"
            alt="Be Part Image"
            width={600}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-4">
          <h2 className="text-4xl md:text-5xl text-gray-800 font-sans mb-4">
            Be Part of <br /> Something Special <br /> and Unique
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Join us and be part of a team that prides itself on creating a truly
            special and unique dining experience. Here, you’ll find more than just a job.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((item, idx) => (
              <div key={idx} className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-semibold text-[#153D19]">{item.title}</h3>
                <p className="text-gray-700 mt-2">{item.text}</p>
              </div>
            ))}
          </div>

          <button className="mt-6 text-white bg-[#153D19] hover:bg-[#0B170D] font-semibold px-6 py-3 text-lg rounded transition w-fit">
            Explore Available Jobs
          </button>
        </div>
      </div>

      {/* Career Opportunities Section */}
      <div className="p-8 mt-12 text-left">
        <h1 className="text-4xl md:text-6xl text-[#0B170D]">Career Opportunities</h1>
        <p className="text-lg text-gray-700 mt-4">
          Explore exciting career opportunities with us! We are always looking for
          passionate and dedicated individuals to join our team.
        </p>
      </div>

      {/* Chef Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8 pb-12">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={chef.src}
              alt={chef.name}
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white/90 to-transparent p-4">
              <h1 className="text-xl font-semibold text-[#0B170D]">{chef.name}</h1>
              <button className="mt-2 inline-flex items-center text-md font-medium text-[#153D19] hover:text-gray-800">
                Learn More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Section */}
      <div className="text-center mt-8 mb-10 px-4">
        <h1 className="text-4xl md:text-6xl text-gray-900">
          Personal Growth and <br /> Professional <br /> Development
        </h1>
      </div>

      <div ref={sliderRef} className="keen-slider px-2 pb-8">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex flex-col items-center justify-center p-8 rounded-md h-96 text-center bg-gray-100"
          >
            <p className="text-xl md:text-2xl text-gray-600">{item.text}</p>
            <h2 className="text-2xl font-bold mt-4 text-[#0B170D]">{item.heading}</h2>
            <h4 className="text-md text-gray-600 mt-1">{item.sub}</h4>
            <button className="mt-6 bg-[#153D19] hover:bg-[#0B170D] text-white font-bold py-2 px-6 rounded transition-all">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Careers;
