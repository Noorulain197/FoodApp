'use client'
import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Count() {
    return (
        <div className="w-full">
            <div className="mt-[150px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 m-6 border border-gray-400">

                {/* Box 1 */}
                <div className="col-span-1 flex flex-col items-center justify-center  pl-4">
                    <h1 className="text-[90px] text-[#333] text-center font-sans">
                        <CountUp end={20} duration={2} />+
                    </h1>
                    <h4 className="text-[#333] text-center">Years Of Experience</h4>
                </div>

                {/* Box 2 */}
                <div className="col-span-1 flex flex-col items-center justify-center border-l-4 border-gray-400 pl-4">
                    <h1 className="text-[90px] text-[#333] text-center font-sans">
                        <CountUp end={50} duration={2} />
                    </h1>
                    <h4 className="text-[#333] text-center">Menu Items</h4>
                </div>

                {/* Box 3 */}
                <div className="col-span-1 flex flex-col items-center justify-center border-l-4 border-gray-400 pl-4">
                    <h1 className="text-[90px] text-[#333] text-center font-sans">
                        <CountUp end={40} duration={2} />+
                    </h1>
                    <h4 className="text-[#333] text-center">Professional Team</h4>
                </div>

                {/* Box 4 */}
                <div className="col-span-1 flex flex-col items-center justify-center border-l-4 border-gray-400 pl-4">
                    <h1 className="text-[90px] text-[#333] text-center font-sans">
                        <CountUp end={5900} duration={2.5} separator="," />+
                    </h1>
                    <h4 className="text-[#333] text-center">Positive Reviews</h4>
                </div>
            </div>

            {/* Part2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-35">
                {/* Text Column */}
                <div className="flex flex-col justify-center p-4 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-sans text-gray-800 leading-tight">
                        Taste the <br />Italian<br /> Favorites
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Explore the dishes that have won the <br /> hearts of our guests.
                    </p>
                    <button className="text-white bg-[#153D19] mt-4 font-semibold px-6 py-3 text-lg hover:bg-[#0B170D] transition rounded-md">
                        Discover More
                    </button>
                </div>

                {/* Food Cards */}
                {[ 
                    {
                        title: "Margherita Pizza",
                        desc: "Classic pizza with fresh mozzarella, basil, and a rich tomato sauce.",
                        img: "/two.jpg",
                        price: "$15",
                    },
                    {
                        title: "Fettuccine Alfredo",
                        desc: "Creamy Alfredo sauce tossed with tender fettuccine and Parmesan.",
                        img: "/three.jpg",
                        price: "$20",
                    },
                    {
                        title: "Lasagna Bolognese",
                        desc: "Rich layers of pasta, meat sauce, and béchamel, baked to perfection.",
                        img: "/four.jpg",
                        price: "$18",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105"
                    >
                        <div className="w-full h-72 relative">
                            <Image
                                src={item.img}
                                alt={item.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-xl"
                            />
                            <div className="absolute top-4 right-4 bg-[#153D19] text-white text-lg px-4 py-2 rounded-full shadow-md">
                                {item.price}
                            </div>
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                                {item.title}
                            </h2>
                            <p className="text-gray-700 text-base mb-5 text-center">
                                {item.desc}
                            </p>
                            <button className="w-full text-white bg-[#153D19] font-semibold text-lg px-5 py-3 hover:bg-[#0B170D] transition rounded-md">
                                View Menu
                            </button>
                        </div>
                    </div>
                ))}

            </div>

            <div>
                <div className='mt-[60px]'>
                    <h2 className='text-center font-sans text-[60px] text-gray-800'>Meet the Masters</h2>
                    <p className='text-[23px] font-semibold text-gray-700 text-center'>
                        We are committed to providing you with an
                        <br />
                        unparalleled dining experience that feels like a warm
                        <br />
                        embrace from Italy.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 p-[40px] gap-4'>
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
                                {/* Overlay */}
                                <div className="absolute bottom-2  bg-[linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,1))] text-black px-4 m-[30px] py-4 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-[28px] text-gray-800 font-semibold">{chef.name}</h3>
                                        <p className="text-sm text-center text-gray-700">{chef.role}</p>
                                    </div>
                                </div>
                                {/* Icons now at top-right */}
                                <div className="absolute bg-[#153D1930] mt-2 left-4 flex flex-col space-y-3">
                                    <div className="bg-[#153D19] p-2 mx-3 rounded-full">
                                        <FaFacebookF className="text-white text-m" />
                                    </div>
                                    <div className="bg-[#153D19] p-2 mx-3 rounded-full">
                                        <FaTwitter className="text-white text-m" />
                                    </div>
                                    <div className="bg-[#153D19] p-2 mx-3 rounded-full">
                                        <FaInstagram className="text-white text-m" />
                                    </div>
                                    <div className="bg-[#153D19] p-2 mx-3 rounded-full">
                                        <FaLinkedinIn className="text-white text-m" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Count;
