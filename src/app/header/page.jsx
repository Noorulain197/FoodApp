'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube, FaCog } from 'react-icons/fa';
import { IoMdMenu } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B170D] shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white">

        {/* Left Icon - Gallery/Info Menu */}
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Open Info Menu">
                <TiThMenu className="w-6 h-6 text-white" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-green-950 text-white w-72">
              <div className="mt-4">
                {/* Logo */}
                <div className="w-full mb-4">
                  <img src="/logo.png" alt="Logo" className="w-full h-20 object-contain" />
                </div>

                <p className="text-sm text-gray-400">Follow us on Instagram</p>

                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {["b1", "b2", "b3", "b4", "b5", "b6"].map((img, i) => (
                    <img key={i} src={`/${img}.jpg`} alt={`Photo ${i + 1}`} className="w-full h-20 object-cover rounded" />
                  ))}
                </div>

                {/* Info */}
                <div className="flex justify-between items-center mt-4 text-sm font-medium text-white">
                  <span>Get in Touch</span>
                  <span>Direction</span>
                </div>

                {/* Social Icons */}
                <div className="flex justify-around mt-4 text-gray-400 text-lg">
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaYoutube /></a>
                  <a href="#"><FaLinkedin /></a>
                  <a href="#"><FaInstagramSquare /></a>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Logo */}
          <div className="w-[130px]">
            <Image src="/logo.png" alt="Logo" width={200} height={80} />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 font-semibold text-lg">
            <Link href="/" className="hover:text-green-300">Home</Link>

            <div className="group relative cursor-pointer">
              <span>Pages <FiChevronDown className="inline" /></span>
              <ul className="absolute hidden group-hover:block bg-[#153D19] mt-2 p-4 rounded shadow-lg space-y-2">
                <li><Link href="/about" className="block hover:text-green-300">About</Link></li>
                <li><Link href="/menu" className="block hover:text-green-300">Menu</Link></li>
                <li><Link href="/services" className="block hover:text-green-300">Services</Link></li>
                <li><Link href="/testimonials" className="block hover:text-green-300">Testimonials</Link></li>
                <li><Link href="/careers" className="block hover:text-green-300">Careers</Link></li>
                <li><Link href="/404" className="block hover:text-green-300">404</Link></li>
                <li><Link href="/coming-soon" className="block hover:text-green-300">Coming Soon</Link></li>
              </ul>
            </div>

            <div className="group relative cursor-pointer">
              <span>Blog <FiChevronDown className="inline" /></span>
              <ul className="absolute hidden group-hover:block bg-[#153D19] mt-2 p-4 rounded shadow-lg">
                <li><Link href="/blog/single-post" className="block hover:text-green-300">Single Post</Link></li>
              </ul>
            </div>

            <Link href="/contact-us" className="hover:text-green-300">Contact Us</Link>
          </nav>
        </div>

        {/* Right Side - Hamburger for Mobile */}
        <div className="flex items-center space-x-4">
          {/* Reservation */}
          <Link href="/reservation">
            <button className="hidden lg:block bg-white text-green-700 font-semibold px-6 py-2 rounded hover:bg-green-100 transition">
              Reservation
            </button>
          </Link>

          {/* Hamburger Icon - Mobile Only */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Open Menu">
                  <IoMdMenu className="w-8 h-8 text-white" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0B170D] text-white w-72">
                <div className="flex flex-col space-y-4 mt-6 text-lg">
                  <Link href="/" className="hover:text-green-400">Home</Link>
                  <Link href="/about" className="hover:text-green-400">About</Link>
                  <Link href="/menu" className="hover:text-green-400">Menu</Link>
                  <Link href="/services" className="hover:text-green-400">Our Services</Link>
                  <Link href="/testimonials" className="hover:text-green-400">Testimonials</Link>
                  <Link href="/careers" className="hover:text-green-400">Careers</Link>
                  <Link href="/404" className="hover:text-green-400">404</Link>
                  <Link href="/coming-soon" className="hover:text-green-400">Coming Soon</Link>
                  <Link href="/blog/single-post" className="hover:text-green-400">Blog Post</Link>
                  <Link href="/contact-us" className="hover:text-green-400">Contact Us</Link>
                  <Link href="/reservation" className="hover:text-green-400">Reservation</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
