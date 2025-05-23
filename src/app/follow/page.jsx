import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

function Follow() {
  return (
    <div className="relative mt-[70px]">
      {/* Background Overlay with Linear Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50 z-10"></div>

      {/* Grid of Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {[
          "/14.jpg", "/15.jpg", "/16.jpg", "/17.jpg", "/18.jpg",
          "/19.jpg", "/20.jpg", "/21.jpg", "/24.jpg", "/25.jpg"
        ].map((src, index) => (
          <div key={index} className="relative h-[200px] md:h-[250px]">
            <Image
              src={src}
              alt={`Image ${index}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="z-0"
            />
          </div>
        ))}
      </div>

      {/* Centered Text with White Background Box */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-[#E5E3D5] bg-opacity-90 px-[18px] py-4 text-center shadow-md w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4">
            <FaInstagram className="text-[#153D19] text-7xl mb-3 sm:mb-0" />
            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-gray-800 font-sans text-xl md:text-2xl">Follow Us</h1>
              <h3 className="text-gray-700 text-md md:text-xl">Fresh Flavors, Daily Updates</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Follow;
