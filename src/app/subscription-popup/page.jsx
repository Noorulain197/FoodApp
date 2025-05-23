"use client";
import { useState } from 'react';

export default function SubscriptionPopup() {
  // State variables
  const [showPopup, setShowPopup] = useState(true);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Subscribe button handler
  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      // Yahan pe API call hoga (demo ke liye setTimeout use kiya hai)
      setTimeout(() => {
        setSubmitted(true);
      }, 1000);
    }
  };

  // Agar popup band karna hai to
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 md:p-8 max-w-[95%] md:max-w-md w-full mx-2 md:mx-4 relative">
        
        {/* Close Button (Top-Right Corner) */}
        <button 
          onClick={() => setShowPopup(false)}
          className="absolute top-1 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        {!submitted ? (
          // Subscription Form
          <>
            {/* Image Section */}
            <img 
              src="/popup-image.jpg" // Apni image ka path dalo
              alt="Special Offer"
              className="w-full h-[150px] md:h-48 object-cover mb-4 rounded-lg"
            />
            
            {/* Title */}
            <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">
              Exclusive Offers Ke Liye Subscribe Karein!
            </h2>

            {/* Email Input Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Apna email likhen..."
                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </>
        ) : (
          // Success Message
          <div className="text-center">
            <div className="text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Subscription Safal! 🎉
            </h3>
            <p className="text-gray-600 mb-4">
              Aapke inbox mein special offers bhej diye gaye hain
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}