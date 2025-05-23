'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function Experience() {
  const [subscribed, setSubscribed] = useState(false)

  const handleClick = () => {
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 3000) // Hide after 3 seconds
  }

  return (
    <div className="w-full mt-[60px] px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-[#E5E3D5] p-2 md:p-[30px] rounded-lg relative overflow-hidden">
        
        {/* Left Section */}
        <div className="mb-6 md:mb-0 md:m-6 flex flex-col justify-center z-10">
          <h1 className="text-4xl md:text-[60px] font-serif text-[#153D19] leading-tight">
            Experience the<br />True Taste of <br />Italy
          </h1>
          <p className="text-sm md:text-[15px] text-gray-500 font-medium mt-4">
            Don’t miss out—reserve your table today and treat yourself to a<br className="hidden md:block" />
            culinary journey through Italy.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <input 
              type="email" 
              placeholder="Your email"
              className="bg-white border border-gray-500 px-[80px] py-2 w-full sm:w-auto rounded-md"
            />
            <button 
              onClick={handleClick}
              className={`px-8 py-2 rounded-md text-white transition ${
                subscribed ? 'bg-[#0B170D] blur-sm' : 'bg-[#153D19] hover:bg-[#0B170D]'
              }`}
            >
              Subscribe
            </button>
          </div>

          {subscribed && (
            <p className="text-green-600 mt-2 font-semibold">Subscription added successfully</p>
          )}
        </div>

        {/* Right Image */}
        <div className="absolute right-0 bottom-0 w-[300px] py-[66px] px-0 md:w-[450px] md:py-[100px] z-0">
          <Image
            src="/thirteen.png"
            alt="Side"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Experience
