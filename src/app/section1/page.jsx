import Image from 'next/image'
import React from 'react'

function Section1() {
  return (
    <div className='grid w-full h-[500px] mt-[50px] grid-cols-1 sm:grid-cols-2'>
      
      {/* Left Image Section with slight overflow effect */}
      <div className='col-span-1 relative overflow-visible'>
        <div className='w-[600px] sm:w-full h-full ml-[30px] sm:ml-0 bg-gray-200 py-8'>
          <Image
            src="/one.jpg"
            alt="Side"
            width={600}
            height={600}
            className='ml-[30px] sm:ml-0 w-full h-full object-cover' // Adjusted for responsiveness
          />
        </div>
      </div>

      {/* Right Content Section */}
      <div className='col-span-1 pl-[50px] pr-[20px] flex flex-col justify-center sm:pl-4'>
        <div className='mb-6'>
          <h2 className='text-[50px] sm:text-[40px] text-[#153D19] font-sans'>
            Our Italian Legacy
          </h2>
          <p className='text-lg sm:text-base text-gray-700'>
            Welcome to a place where the rich history of Italian cuisine comes alive. Our restaurant is a
            tribute to the timeless flavors and techniques that have been cherished for generations.
          </p>
        </div>

        {/* Styled Info Boxes */}
        <div className='space-y-4'>
          <div className='border border-gray-300 rounded-lg p-4 shadow-sm bg-white'>
            <h3 className='text-xl sm:text-lg font-semibold text-[#153D19]'>Authentic Recipes</h3>
            <h4 className='text-gray-700'>
              Enjoy pizzas made with traditional Italian recipes passed down through generations.
            </h4>
          </div>

          <div className='border border-gray-300 rounded-lg p-4 shadow-sm bg-white'>
            <h3 className='text-xl sm:text-lg font-semibold text-[#153D19]'>Fresh Ingredients</h3>
            <h4 className='text-gray-700'>
              We use only the freshest and finest ingredients to ensure every bite is bursting with flavor.
            </h4>
          </div>

          {/* Call to Action Button */}
          <button className="mt-4 text-white bg-[#153D19] font-semibold px-8 py-3 text-lg hover:bg-[#0B170D] transition">
            Explore Our Heritage
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section1
