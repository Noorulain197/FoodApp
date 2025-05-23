"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function ComingSoon() {
  const calculateTimeLeft = () => {
    const launchDate = new Date("2025-10-11T00:00:00");
    const now = new Date();
    const difference = launchDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/404.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75 z-0" />

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-serif mb-6">We are coming soon</h1>
        <p className="text-lg sm:text-2xl font-light mb-10">
          Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio,
          dapibus ac facilisis in, Maecenas faucibus mollis interdum lorem ipsum dolor sit.
        </p>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-6 text-5xl font-semibold mb-10">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => {
            const value = Object.values(timeLeft)[idx] || 0;
            return (
              <div key={label} className="text-center">
                <p>{value}</p>
                <span className="text-base sm:text-xl">{label}</span>
              </div>
            );
          })}
        </div>

        {/* Back Button */}
        <Link href="/" passHref>
          <button className="mt-4 bg-[#153D19] hover:bg-[#0B170D] text-white font-semibold text-lg py-4 px-8 rounded transition duration-300 flex items-center gap-2">
            <FaLongArrowAltLeft />
            <span>Back to Home</span>
          </button>
        </Link>

        {/* Contact Info */}
        <p className="mt-8 text-sm sm:text-base">
          Questions or inquiries? Contact us at <a href="mailto:hello@yourmail.com" className="underline">hello@yourmail.com</a>
        </p>
      </div>
    </div>
  );
}
