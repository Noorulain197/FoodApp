import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Header from '../header/page'
import CountUp from 'react-countup';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Footer from '../footer/page';

function About() {
    return (
        <>
          <Header />
            <div className="relative w-full h-[70vh]">
                <Image
                    src="/m.jpg"
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center space-y-2 md:space-y-4 pt-10">
                    <h1 className="text-[60px] sm:text-[90px] md:text-[110px] font-sans text-white leading-tight text-center">
                        About Us
                    </h1>
                    <div className="text-gray-600 bg-white rounded-4xl px-4 py-2 flex items-center space-x-2 text-sm md:text-lg font-semibold">
                        <span className="hover:underline cursor-pointer">Home</span>
                        <FaArrowRight />
                        <span>About Us</span>
                    </div>
                </div>
            </div>

            {/* Section 1 */}
            <div className='grid w-full mt-[50px] grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-0'>

                {/* Image */}
                <div className='relative flex justify-center'>
                    <div className='w-full max-w-[600px] h-full bg-gray-200 py-8'>
                        <Image
                            src="/one.jpg"
                            alt="Side"
                            width={600}
                            height={600}
                            className='ml-[30px]'
                        />
                    </div>
                </div>

                {/* Text */}
                <div className='pl-[20px] pr-[20px] flex flex-col justify-center'>
                    <div className='mb-6'>
                        <h2 className='text-[40px] md:text-[60px] text-[#153D19] font-sans'>Our Italian Legacy</h2>
                        <p className='text-lg text-gray-700'>
                            Welcome to a place where the rich history of Italian cuisine comes alive...
                        </p>
                    </div>

                    <div className='space-y-4'>
                        <div className='border border-gray-300 rounded-lg p-4 shadow-sm bg-white'>
                            <h3 className='text-xl font-semibold text-[#153D19]'>Authentic Recipes</h3>
                            <h4 className='text-gray-700'>
                                Enjoy pizzas made with traditional Italian recipes...
                            </h4>
                        </div>
                        <div className='border border-gray-300 rounded-lg p-4 shadow-sm bg-white'>
                            <h3 className='text-xl font-semibold text-[#153D19]'>Fresh Ingredients</h3>
                            <h4 className='text-gray-700'>
                                We use only the freshest and finest ingredients...
                            </h4>
                        </div>
                        <button className="mt-4 text-white bg-[#153D19] font-semibold px-8 py-3 text-lg hover:bg-[#0B170D] transition">
                            Explore Our Heritage
                        </button>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className='grid w-full mt-[70px] grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-0'>

                {/* Text */}
                <div className='pl-[20px] pr-[20px] flex flex-col justify-center'>
                    <div className='mb-6'>
                        <h2 className='text-[36px] md:text-[50px] text-gray-800 font-bold'>Crafting an <br />Authentic Italian Experience</h2>
                        <p className='text-[18px] md:text-[20px] text-gray-700'>
                            Our vision is to become the leading Italian restaurant...
                        </p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 mt-7 p-2 md:p-6 gap-4'>
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className='border border-gray-300 bg-[#E5E3D5] p-[30px]'>
                                <h3 className='text-[24px] md:text-[30px] font-serif text-[#153D19]'>
                                    0{i + 1}. Title Here
                                </h3>
                                <h4 className='text-gray-700'>Short supporting text goes here.</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div className='relative flex justify-center'>
                    <div className='w-full max-w-[650px] bg-[#E5E3D5] py-8'>
                        <Image
                            src="/24.jpg"
                            alt="Side"
                            width={600}
                            height={800}
                            className='mr-[50px]'
                        />
                    </div>
                </div>
            </div>

            {/* Brand Logos */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mt-[100px] px-4 md:px-8 gap-8'>
                {["/29.png", "/30.png", "/31.png", "/32.png", "/33.png"].map((src, i) => (
                    <div key={i} className='w-full flex justify-center'>
                        <Image src={src} alt="Brand" width={150} height={150} className='object-contain' />
                    </div>
                ))}
            </div>

            {/* Meet the Team */}
            <div className='mt-[60px] px-4'>
                <h2 className='text-center font-sans text-[40px] md:text-[60px] text-gray-800'>Meet the Masters</h2>
                <p className='text-[18px] md:text-[23px] font-semibold text-gray-700 text-center'>
                    We are committed to providing you with an unparalleled dining experience...
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 p-4 md:p-[40px] gap-4'>
                    {[
                        { name: "JonnyDe Smith ", role: "Head Chef", img: "/five.png" },
                        { name: "Maria Rossi De", role: "Pastry Chef", img: "/six.png" },
                        { name: "Antonio De Luca", role: "Sous Chef", img: "/seven.png" },
                        { name: "Giulia Romano", role: "Line Cook", img: "/eight.png" },
                    ].map((chef, idx) => (
                        <div key={idx} className='relative border border-gray-400 rounded-lg overflow-hidden group'>
                            <div className="bg-[#E5E3D5] w-full h-[400px] relative">
                                <Image
                                    src={chef.img}
                                    alt={chef.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className="absolute bottom-2 bg-[linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,1))] text-black px-4 m-[30px] py-4 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-[22px] md:text-[28px] text-gray-800 font-semibold">{chef.name}</h3>
                                        <p className="text-sm text-center text-gray-700">{chef.role}</p>
                                    </div>
                                </div>
                                <div className="absolute bg-[#153D1930] mt-2 left-4 flex flex-col space-y-3">
                                    {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                        <div key={i} className="bg-[#153D19] p-2 mx-3 rounded-full">
                                            <Icon className="text-white text-m" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        
        </>
    )
}

export default About