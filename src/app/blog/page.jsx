'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Header from '../header/page'
import Footer from '../footer/page'
import Link from 'next/link'

function Blog() {
  const posts = [
    { img: '/b2.jpg' },
    { img: '/b3.jpg' },
    { img: '/b4.jpg' },
    { img: '/b5.jpg' },
    { img: '/c6.jpg' },
    { img: '/b7.jpg' },
    { img: '/b8.jpg' },
    { img: '/b9.jpg' },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const [subscribed, setSubscribed] = useState(false);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const handleClick = () => {
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <>
      <Header />
      <div className="relative w-full h-[70vh]">
        <Image
          src="/b1.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center space-y-2 md:space-y-4 pt-10">
          <h1 className="text-[90px] md:text-[110px] font-sans text-white leading-tight text-center">
            Blog
          </h1>
          <div className="text-gray-600 bg-white rounded-4xl px-4 py-2 flex items-center space-x-2 text-sm md:text-lg font-semibold">
            <span className="hover:underline cursor-pointer">Home</span>
            <FaArrowRight />
            <span>Blog</span>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 mt-[40px]'>
        <div className='bg-[#e5e3d5] m-4'>
          <Image src="/c6.jpg" alt="Side" width={600} height={600} />
          <h1 className='text-[25px] font-serif text-[#0B170D] p-4'>Why Italian Wine Is The Perfect<br /> Choice For Your Dinner</h1>
          <h3 className='text-[18px] text-gray-600 p-4'>Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero, a pharetra augue. Vestibulum id ligula</h3>
          <span className='text-sm text-[#153D19] p-7 m-6'>August 5, 2025</span>
        </div>

        <div className='bg-[#e5e3d5] m-4'>
          <Image src="/s8.jpg" alt="Side" width={600} height={600} />
          <h1 className='text-[23px] font-serif text-[#0B170D] p-4'>The History Of Margherita Pizza:<br />From Italy To The World</h1>
          <h3 className='text-[18px] text-gray-600 p-4'>Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero, a pharetra augue. Vestibulum id ligula</h3>
          <span className='text-sm text-[#153D19] p-7 m-6'>August 5, 2025</span>
        </div>

        <div className='flex flex-col'>
          <div>
            <h1 className='text-[29px] font-serif text-[#0B170D] p-4'>10 Must-try Italian Dishes At Our Restaurant</h1>
            <span className='text-sm text-[#153D19] p-7 m-6'>August 5, 2025</span>
            <h3 className='text-[18px] text-gray-600 p-4'>Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero, a pharetra augue. Vestibulum id ligula</h3>
          </div>
          <div>
            <h1 className='text-[27px] font-serif text-[#0B170D] p-4'>Understanding The Key Ingredients In Italian Cooking</h1>
            <span className='text-sm text-[#153D19] p-7 m-6'>August 5, 2025</span>
            <h3 className='text-[18px] text-gray-600 p-4'>Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero, a pharetra augue. Vestibulum id ligula</h3>
          </div>
          <div>
            <h1 className='text-[29px] font-serif text-[#0B170D] p-4'>How To Make The Perfect Risotto At Home Like Our Chef</h1>
            <span className='text-sm text-[#153D19] p-7 m-6'>August 5, 2025</span>
            <h3 className='text-[18px] text-gray-600 p-4'>Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero, a pharetra augue. Vestibulum id ligula</h3>
          </div>
        </div>

        <div className='bg-[#e5e3d5] m-4 mb-[110%]'>
          <Image src="/c2.jpg" alt="Side" width={600} height={600} />
          <h1 className='text-[25px] font-serif text-[#0B170D] p-4'>Why Italian Wine Is The Perfect<br /> Choice For Your Dinner</h1>
          <h3 className='text-[18px] text-gray-600 p-4'>Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero, a pharetra augue. Vestibulum id ligula</h3>
          <span className='text-sm text-[#153D19] p-7 m-6'>August 5, 2025</span>
        </div>

        <div className='bg-[#e5e3d5] m-4 mb-[110%]'>
          <Image src="/b6.jpg" alt="Side" width={600} height={600} />
          <h1 className='text-[25px] font-serif text-[#0B170D] p-4'>Why Italian Wine Is The Perfect<br /> Choice For Your Dinner</h1>
          <h3 className='text-[18px] text-gray-600 p-4'>Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero, a pharetra augue. Vestibulum id ligula</h3>
          <span className='text-sm text-[#153D19] p-7 m-6'>August 5, 2025</span>
        </div>

        <div className='flex flex-col'>
          <div>
            <h1 className='text-[29px] font-serif text-[#0B170D] p-4'>Why Italian Wine Is The Perfect Choice For Your Dinner</h1>
            <span className='text-sm text-[#153D19] p-7 m-6'>August 5, 2025</span>
            <h3 className='text-[18px] text-gray-600 p-4'>Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero, a pharetra augue. Vestibulum id ligula</h3>
          </div>
          <div>
            <h1 className='text-[27px] font-serif text-[#0B170D] p-4'>The History Of Margherita Pizza: From Italy To The World</h1>
            <span className='text-sm text-[#153D19] p-7 m-6'>August 5, 2025</span>
            <h3 className='text-[18px] text-gray-600 p-4'>Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero, a pharetra augue. Vestibulum id ligula</h3>
          </div>
          <div>
            <h1 className='text-[29px] font-serif text-[#0B170D] p-4'>How To Make The Perfect Risotto At Home Like Our Chef</h1>
            <span className='text-sm text-[#153D19] p-7 m-6'>August 5, 2025</span>
            <h3 className='text-[18px] text-gray-600 p-4'>Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero, a pharetra augue. Vestibulum id ligula</h3>
          </div>
          <div>
            <h1 className='text-[29px] font-serif text-[#0B170D] p-4'>5 Italian Desserts That Will Delight Your Taste Buds</h1>
            <span className='text-sm text-[#153D19] p-7 m-6'>August 5, 2025</span>
            <h3 className='text-[18px] text-gray-600 p-4'>Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero, a pharetra augue. Vestibulum id ligula</h3>
          </div>
        </div>
      </div>

      <div className="w-full mt-[60px] px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-[#E5E3D5] p-2 md:p-[30px] rounded-lg relative overflow-hidden">
          <div className="mb-6 md:mb-0 md:m-6 flex flex-col justify-center z-10">
            <h1 className="text-4xl md:text-[60px] font-serif text-[#153D19] leading-tight">
              Experience the<br />True Taste of <br />Italy
            </h1>
            <p className="text-sm md:text-[15px] text-gray-500 font-medium mt-4">
              Don’t miss out—reserve your table today and treat yourself to a<br className="hidden md:block" />
              culinary journey through Italy.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <input type="email" placeholder="Your email" className="bg-white border border-gray-500 px-[80px] w-full sm:w-auto" />
              <button onClick={handleClick} className={`px-8 py-2 rounded-md text-white transition ${subscribed ? 'bg-[#0B170D] blur-sm' : 'bg-[#153D19] hover:bg-[#0B170D]'}`}>
                Subscribe
              </button>
            </div>
            {subscribed && (
              <p className="text-green-600 mt-2 font-semibold">Subscription added successfully</p>
            )}
          </div>

          <div className="absolute right-0 bottom-0 w-[300px] py-[66px] px-0 md:w-[300px] z-0">
            <Image src="/thirteen.png" alt="Side" width={600} height={600} className="object-contain" />
          </div>
        </div>
      </div>

      <div className='text-center mt-[40px]'>
        <h1 className='text-[60px] text-gray-800'>News And Articles</h1>
        <p className='text-gray-600 text-[23px]'>It’s also a great place to share stories about community<br /> involvement or collaborations with local artisans and producers.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 p-4'>
        {posts.slice(0, visibleCount).map((post, idx) => (
          <div key={idx} className='flex flex-col md:flex-row bg-white shadow-sm rounded-lg overflow-hidden'>
            <div>
              <Image src={post.img} alt='Side' width={600} height={400} className='object-cover w-full md:w-[300px]' />
            </div>
            <div className='flex flex-col justify-between p-4'>
              <h1 className='text-[24px] md:text-[29px] font-serif text-[#0B170D]'>Gelato Vs Ice Cream: Which Do You Prefer?</h1>
              <span className='text-sm text-[#153D19] my-2'>August 5, 2025</span>
              <h3 className='text-[16px] text-gray-600 mb-4'>Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero, a pharetra augue. Vestibulum id ligula</h3>
              <Link href="/single-post">
                <button className='bg-[#153D19] text-white px-4 py-2 rounded-md w-max'>Learn more</button>
              </Link>
            </div>
          </div>
        ))}

        {visibleCount < posts.length && (
          <div className='col-span-full flex justify-center mt-8'>
            <button onClick={handleLoadMore} className='bg-[#0B170D] text-2xl text-white p-5 rounded-md'>
              Load more
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  )
}

export default Blog
