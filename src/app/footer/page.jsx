import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

function Footer() {
    return (
        <div className='w-full bg-[#E5E3D5] py-10'>
            <div className='max-w-5xl mx-auto flex flex-col items-center text-center text-[#0B170D] gap-6'>

                {/* Logo (black) */}
                <div className="w-[250px]">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={250}
                        height={100}
                        className="filter invert"
                    />
                </div>

                {/* Description */}
                <div>
                    <p className="mb-4 text-lg leading-relaxed">
                        At our Pizzania, we are passionate about bringing the<br />
                        authentic flavors of Italy to your table.
                    </p>
                </div>

                {/* Contact Info with Icons */}
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-black" />
                        <h4>36927 Towne View Lake Daishaton, KS 60725</h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-black" />
                        <h4>+12 286 3486</h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-black" />
                        <h4>support@yourdomain.com</h4>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4 mt-4">
                    {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                        <a
                            key={index}
                            href="#"
                            aria-label="Social Media Icon"
                            className="bg-[#153D19] text-white p-3 rounded-full text-lg hover:scale-105 transition-transform"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>

            </div>
            <div className='mt-8 px-4 sm:px-8 md:px-16'>
                {/* Centered Top Border */}
                <div className="w-2/3 mx-auto border-t-2 border-[#153D19] mb-8"></div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {/* Company */}
                    <div className='col-span-1'>
                        <h1 className='text-[#0B170D] text-xl sm:text-2xl font-bold mb-4'>Company</h1>
                        <ul className='space-y-2'>
                            <li className='text-[#153D19]'>About</li>
                            <li className='text-[#153D19]'>Careers</li>
                            <li className='text-[#153D19]'>Our Story</li>
                            <li className='text-[#153D19]'>Blog</li>
                            <li className='text-[#153D19]'>Contact Us</li>
                        </ul>
                    </div>

                    {/* Popular Menu */}
                    <div className='col-span-1'>
                        <h1 className='text-[#0B170D] text-xl sm:text-2xl font-bold mb-4'>Popular Menu</h1>
                        <ul className='space-y-2'>
                            <li className='text-[#153D19]'>Pizza</li>
                            <li className='text-[#153D19]'>Pasta</li>
                            <li className='text-[#153D19]'>Salads</li>
                            <li className='text-[#153D19]'>Desserts</li>
                            <li className='text-[#153D19]'>Beverages</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className='col-span-1'>
                        <h1 className='text-[#0B170D] text-xl sm:text-2xl font-bold mb-4'>Support</h1>
                        <ul className='space-y-2'>
                            <li className='text-[#153D19]'>Customer Service</li>
                            <li className='text-[#153D19]'>FAQs</li>
                            <li className='text-[#153D19]'>Order Tracking</li>
                            <li className='text-[#153D19]'>Reservation</li>
                            <li className='text-[#153D19]'>Testimonials</li>
                        </ul>
                    </div>

                    {/* Operational Time */}
                    <div className='col-span-1'>
                        <h1 className='text-[#0B170D] text-xl sm:text-2xl font-bold mb-4'>Operational Time</h1>
                        <ul className='divide-y divide-blue-400'>
                            <li className='py-3'>
                                <h3 className='text-[#153D19] font-medium'>Monday-Thursday</h3>
                                <span className='text-gray-400 text-lg'>11:00 AM - 9:00 PM</span>
                            </li>
                            <li className='py-3'>
                                <h3 className='text-[#153D19] font-medium'>Friday-Saturday</h3>
                                <span className='text-gray-400 text-lg'>11:00 AM - 10:00 PM</span>
                            </li>
                            <li className='py-3'>
                                <h3 className='text-[#153D19] font-medium'>Sunday</h3>
                                <span className='text-gray-400 text-lg'>12:00 AM - 8:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           
            <div className='flex justify-between items-center bg-[#0B170D] text-white font-serif font-bold px-4 sm:px-8 md:px-16 m-8 py-8 mt-8 mb-[50px]'>
                <div>
                    <h1>© 2025 All rights reserved. By Darrel Wilson</h1>
                </div>
                <div className='flex space-x-6'>
                    <span>Privacy Policy</span>
                    <span>Terms & Services</span>
                </div>
            </div>

        </div>
    )
}

export default Footer
