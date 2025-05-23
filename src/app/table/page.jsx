'use client';
import React, { useState } from 'react';
import { LiaPizzaSliceSolid } from "react-icons/lia";

function Table() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500); // simulate loading
  };

  return (
    <div className={`w-full bg-[#E5E3D5] mt-[45px] relative overflow-hidden transition-all duration-500`}>

      {/* Form Content */}
      <div className="text-center p-8 sm:p-12 relative z-10">
        <h1 className="mt-8 text-[#0B170D] text-[60px] font-serif">
          Reserve Your Table
        </h1>
        <p className="text-[#26412a] font-serif text-[25px] mb-10">
          Planning a special night out or a cozy dinner with loved ones? Secure your spot at our restaurant and enjoy an authentic Italian dining experience.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5 px-4 sm:px-8">
          <div className="flex justify-between space-x-4">
            <input 
              type="text" 
              placeholder="Name" 
              required 
              className="w-1/2 p-3 border border-gray-400 rounded" 
              aria-label="Enter your name"
            />
            <input 
              type="email" 
              placeholder="Email" 
              required 
              className="w-1/2 p-3 border border-gray-400 rounded" 
              aria-label="Enter your email"
            />
          </div>

          <div className="flex justify-between space-x-4">
            <input 
              type="tel" 
              placeholder="Phone" 
              required 
              className="w-1/2 p-3 border border-gray-400 rounded" 
              aria-label="Enter your phone number"
            />
            <input 
              type="date" 
              required 
              className="w-1/2 p-3 border border-gray-400 rounded" 
              aria-label="Select your reservation date"
            />
          </div>

          <div>
            <textarea 
              placeholder="Message" 
              required 
              className="w-full p-3 border border-gray-400 rounded" 
              rows={4} 
              aria-label="Enter any special requests or message"
            ></textarea>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" required aria-label="Agree to terms and conditions" />
            <label className="text-gray-700">I agree to the terms and conditions</label>
          </div>

          <div className="text-left">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#153D19] hover:bg-[#0B170D] text-white font-bold py-2 px-6 rounded disabled:opacity-50 transition-all"
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>

          {submitted && (
            <div className="text-[#153D19] font-semibold text-lg mt-4">
              Submission completed successfully!
            </div>
          )}
        </form>
      </div>

      {/* Pizza Icon at absolute bottom-right corner */}
      <div className="absolute bottom-0 right-0 p-0 z-0">
        <LiaPizzaSliceSolid className="text-[#353434] text-[400px] opacity-25 pointer-events-none" />
      </div>

    </div>
  );
}

export default Table;
