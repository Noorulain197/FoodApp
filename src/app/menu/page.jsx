'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Header from '../header/page'
import Footer from '../footer/page'

function Menu() {
    const [subscribed, setSubscribed] = useState(false)

    const handleClick = () => {
        setSubscribed(true)
        setTimeout(() => setSubscribed(false), 3000)
    }
    return (
        <>
            <Header />
            <div className="relative w-full h-[70vh]">
                <Image
                    src="/16.jpg"
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center space-y-2 md:space-y-4 pt-10">
                    <h1 className="text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-sans text-white leading-tight text-center">
                        Menus
                    </h1>
                    <div className="text-gray-600 bg-white rounded-4xl px-4 py-2 flex items-center space-x-2 text-sm md:text-lg font-semibold">
                        <span className="hover:underline cursor-pointer">Home</span>
                        <FaArrowRight />
                        <span>Menus</span>
                    </div>
                </div>
            </div>
            {/* Header Section */}
            <div className="bg-white text-[#0B170D] py-16 text-center px-4 mt-[50px]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">A Taste of Italy in Every Bite</h1>
                <h3 className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-4">Discover the rich and diverse flavors of Italy with every bite at our restaurant.</h3>
            </div>

            {/* Images Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-white">
                {[ 
                    { src: "/m5.jpg", title: "Appetizers", desc: "Start your meal with our delicious appetizers that capture the essence." },
                    { src: "/m6.jpg", title: "Main Courses", desc: "Our main courses offer a journey through Italy's rich culinary traditions." },
                    { src: "/m7.jpg", title: "Dessert", desc: "Indulge in our selection of traditional Italian desserts to complete your meal." },
                    { src: "/m8.jpg", title: "Beverages", desc: "Our selected drinks are designed to enhance the taste of our dishes." }
                ].map((item, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg">
                        <Image
                            src={item.src}
                            alt={item.title}
                            width={600}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(21,61,25,0.4),rgba(21,61,25,0.8))] flex flex-col justify-center items-center text-white text-center p-4">
                            <h3 className="text-xl sm:text-2xl font-semibold">{item.title}</h3>
                            <p className="text-sm sm:text-base mt-2">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Part2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-12">
                <div className="flex flex-col justify-center space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans text-gray-800 leading-tight">
                        Taste the <br />Italian<br />Favorites
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-500">
                        Explore the dishes that have won the <br /> hearts of our guests.
                    </p>
                    <button className="text-white bg-[#153D19] mt-4 font-semibold px-6 py-3 text-lg sm:text-xl hover:bg-[#0B170D] transition rounded-md">
                        Discover More
                    </button>
                </div>

                {/* Food Cards */}
                {[ 
                    { title: "Margherita Pizza", desc: "Classic pizza with fresh mozzarella, basil, and a rich tomato sauce.", img: "/two.jpg", price: "$15" },
                    { title: "Fettuccine Alfredo", desc: "Creamy Alfredo sauce tossed with tender fettuccine and Parmesan.", img: "/three.jpg", price: "$20" },
                    { title: "Lasagna Bolognese", desc: "Rich layers of pasta, meat sauce, and béchamel, baked to perfection.", img: "/four.jpg", price: "$18" }
                ].map((item, index) => (
                    <div key={index} className="bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
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

            <div className="w-full lg:w-[1250px] h-[500px] flex items-center justify-center m-6 bg-[#E5E3D5]">
                <div className="text-center max-w-2xl px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#153D19] leading-tight">
                        Book Your Table Online
                    </h1>
                    <p className="text-sm sm:text-base md:text-[15px] text-gray-500 font-medium mt-4">
                        Planning a visit? Easily reserve your table online to ensure a seamless dining experience. Our online reservation system allows you to choose the date,
                        time, and seating preference that suits you best.
                    </p>
                    <div className="mt-6">
                        <button className="text-white bg-[#153D19] font-semibold text-base px-6 py-2 hover:bg-[#0B170D] transition rounded-md">
                            Make A Reservation
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Menu;
