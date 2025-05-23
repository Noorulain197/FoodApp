"use client"
import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

function Review() {
    return (
        <div className='max-w-[1300px] mx-auto px-4 py-8'>
            {/* Heading Section */}
            <div className='flex flex-col lg:flex-row justify-between items-start gap-6'>
                <h1 className='text-[35px] sm:text-[40px] lg:text-[60px] font-serif text-gray-800 leading-tight'>
                    What Our <br className='hidden lg:block' />
                    Guests Are<br className='hidden lg:block' />
                    Saying
                </h1>
                <p className='text-[16px] sm:text-[18px] lg:text-[25px] text-gray-700 lg:pt-[55px]'>
                    Their words reflect the passion and care we<br className='hidden lg:block' />
                    put into every dish, and we are honored to<br className='hidden lg:block' />
                    be a part of their dining memories.
                </p>
            </div>

            {/* Review Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                {/* First Review */}
                <div className='flex flex-col items-center'>
                    <Image
                        src="/nine.jpg"
                        alt="Guest"
                        width={600}
                        height={600}
                        className='w-full object-cover rounded-lg'
                    />
                    <div className='bg-[#E5E3D5] p-6 flex flex-col items-center text-center rounded-lg mt-4'>
                        <FaQuoteLeft className='text-4xl text-black mb-4' />
                        <p className='text-[14px] sm:text-[16px] text-gray-800 mb-4'>
                            I’ve visited many Italian restaurants, but this one stands out.
                            The ambiance is cozy, and the staff is genuinely friendly.
                            The Pepperoni Passion pizza was perfectly spicy and cheesy.
                            A delightful experience from start to finish.
                            I’ll definitely be returning with friends!
                        </p>
                        <h4 className='font-bold text-[#153D19]'>Michael T.</h4>
                    </div>
                </div>

                {/* Second Review */}
                <div className='flex flex-col items-center'>
                    <Image
                        src="/ten.jpg"
                        alt="Guest"
                        width={600}
                        height={600}
                        className='w-full object-cover rounded-lg'
                    />
                    <div className='bg-[#E5E3D5] p-6 flex flex-col items-center text-center rounded-lg mt-4'>
                        <FaQuoteLeft className='text-4xl text-black mb-4' />
                        <p className='text-[14px] sm:text-[16px] text-gray-800 mb-4'>
                            I’ve visited many Italian restaurants, but this one stands out.
                            The ambiance is cozy, and the staff is genuinely friendly.
                            The Pepperoni Passion pizza was perfectly spicy and cheesy.
                            A delightful experience from start to finish.
                            I’ll definitely be returning with friends!
                        </p>
                        <h4 className='font-bold text-[#153D19]'>Michael T.</h4>
                    </div>
                </div>

                {/* Third Review */}
                <div className='flex flex-col items-center'>
                    <div className='bg-[#E5E3D5] p-6 flex flex-col items-center text-center rounded-lg'>
                        <FaQuoteLeft className='text-4xl text-black mb-4' />
                        <p className='text-[14px] sm:text-[16px] text-gray-800 mb-4'>
                            I’ve visited many Italian restaurants, but this one stands out.
                            The ambiance is cozy, and the staff is genuinely friendly.
                            The Pepperoni Passion pizza was perfectly spicy and cheesy.
                            A delightful experience from start to finish.
                            I’ll definitely be returning with friends!
                        </p>
                        <h4 className='font-bold text-[#153D19]'>Michael T.</h4>
                    </div>
                    <Image
                        src="/eleven.jpg"
                        alt="Guest"
                        width={600}
                        height={600}
                        className='w-full object-cover rounded-lg mt-4'
                    />
                </div>

                {/* Fourth Review */}
                <div className='flex flex-col items-center'>
                    <div className='bg-[#E5E3D5] p-6 flex flex-col items-center text-center rounded-lg'>
                        <FaQuoteLeft className='text-4xl text-black mb-4' />
                        <p className='text-[14px] sm:text-[16px] text-gray-800 mb-4'>
                            I’ve visited many Italian restaurants, but this one stands out.
                            The ambiance is cozy, and the staff is genuinely friendly.
                            The Pepperoni Passion pizza was perfectly spicy and cheesy.
                            A delightful experience from start to finish.
                            I’ll definitely be returning with friends!
                        </p>
                        <h4 className='font-bold text-[#153D19]'>Michael T.</h4>
                    </div>
                    <Image
                        src="/twelve.jpg"
                        alt="Guest"
                        width={600}
                        height={600}
                        className='w-full object-cover rounded-lg mt-4'
                    />
                </div>

            </div>
        </div>
    )
}

export default Review
