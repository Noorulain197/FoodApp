'use client'
import Footer from '@/app/footer/page'
import Header from '@/app/header/page'
import Image from 'next/image'
import { FaArrowRight, FaTags } from 'react-icons/fa'
import React, { useState } from 'react'

function SinglePost() {
  const allPosts = [
    { img: '/b2.jpg' },
    { img: '/b3.jpg' },
    { img: '/b4.jpg' },
    { img: '/b5.jpg' },
    { img: '/c6.jpg' },
    { img: '/b7.jpg' },
    { img: '/b8.jpg' },
    { img: '/b9.jpg' },
  ]

  const [visibleCount, setVisibleCount] = useState(4)

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 2)
  }

  return (
    <>
      <Header />

      {/* Banner Section */}
      <div className="relative w-full h-[70vh]">
        <div className="absolute inset-0 bg-[#153D19] z-10 flex flex-col items-center justify-center space-y-2 md:space-y-4 pt-10">
          <h1 className="text-[70px] md:text-[100px] font-sans text-white leading-tight text-center">
            Gelato Vs Ice Cream:<br />Which Do You Prefer?
          </h1>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 px-6">
        {/* Main Post */}
        <div className="lg:col-span-2">
          <Image src="/b2.jpg" alt="Main Post" width={1000} height={600} className="w-full object-cover rounded-lg" />

          <div className="text-[16px] text-gray-700 font-serif space-y-6 mt-8">
            <p>
              Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero, a pharetra augue.
              Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
            <p>
              Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
              ut fermentum massa justo sit amet risus.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec sed odio dui.
            </p>
            <p>
              Proin mollis diam vel molestie dapibus. Ut mauris velit, porta tincidunt diam non, scelerisque tristique ex.
              Ut ex elit, mattis sit amet quam sit amet, posuere vulputate nisi.
            </p>
          </div>

          <div className="bg-[#E5E3D5] text-center py-12 mt-12 rounded-lg">
            <h4 className="text-[22px] text-gray-700 font-serif mb-2">
              “Maecenas iaculis pharetra nunc sit amet malesuada...”
            </h4>
            <h1 className="text-[27px] font-serif text-[#0B170D]">Darrel Wilson</h1>
          </div>

          <div className="text-[16px] text-gray-700 font-serif space-y-4 mt-8">
            <p>Proin interdum massa eget ligula sollicitudin...</p>
            <p>Nullam consequat eros at sapien volutpat fringilla...</p>
          </div>

          <div className="flex items-center gap-2 mt-6">
            <FaTags />
            <span className="text-[#153D19] text-[18px]">Cooking, Ingredients, Recipes</span>
          </div>
        </div>

        {/* Related Posts Sidebar */}
        <div className="flex flex-col gap-6">
          {allPosts.slice(0, visibleCount).map((post, idx) => (
            <div key={idx} className="flex flex-col md:flex-row bg-[#f5f5f5] rounded-lg overflow-hidden">
              <div className="w-full md:w-[160px] flex-shrink-0">
                <Image src={post.img} alt="Related" width={300} height={200} className="object-cover w-full h-full" />
              </div>
              <div className="p-4 flex flex-col justify-between">
                <h2 className="text-[20px] font-serif text-[#0B170D]">Gelato Vs Ice Cream: Which Do You Prefer?</h2>
                <span className="text-sm text-[#153D19] mt-1">August 5, 2025</span>
                <p className="text-sm text-gray-600 mt-2">Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero.</p>
                <button className="bg-[#153D19] text-white mt-2 px-4 py-1 rounded-md w-max text-sm">Learn more</button>
              </div>
            </div>
          ))}

          {visibleCount < allPosts.length && (
            <button
              onClick={handleLoadMore}
              className="bg-[#0B170D] text-white text-lg py-2 rounded-md mt-4"
            >
              Load more
            </button>
          )}
        </div>
      </div>

      {/* News & Articles Section */}
      <div className="text-center mt-20">
        <h1 className="text-[50px] text-gray-800">News And Articles</h1>
        <p className="text-gray-600 text-lg">
          It’s also a great place to share stories about community<br />
          involvement or collaborations with local artisans and producers.
        </p>
      </div>

      {/* Bottom Post List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 px-6">
        {allPosts.slice(0, visibleCount).map((post, idx) => (
          <div key={idx} className="flex flex-col md:flex-row bg-white shadow-sm rounded-lg overflow-hidden">
            <Image src={post.img} alt="Post" width={600} height={400} className="w-full md:w-[300px] object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <h2 className="text-[24px] font-serif text-[#0B170D]">Gelato Vs Ice Cream: Which Do You Prefer?</h2>
              <span className="text-sm text-[#153D19] mt-1">August 5, 2025</span>
              <p className="text-sm text-gray-600 mt-2">Sed posuere consectetur est at lobortis lorem ipsum nulla vitae elit libero.</p>
              <button className="bg-[#153D19] text-white mt-3 px-4 py-2 rounded-md w-max">Learn more</button>
            </div>
          </div>
        ))}

        {visibleCount < allPosts.length && (
          <div className="col-span-full flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="bg-[#0B170D] text-white text-xl py-2 px-6 rounded-md"
            >
              Load more
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  )
}

export default SinglePost
