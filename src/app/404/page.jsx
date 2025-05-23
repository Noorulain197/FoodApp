import Link from 'next/link';
import { FaLongArrowAltLeft } from 'react-icons/fa';

export default function Custom404() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/404.jpg')" }}>
      {/* Dark overlay using linear gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75))]"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
        <div className="text-center text-white w-full max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-base sm:text-lg mb-6">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex justify-center">
            <Link href="/" passHref>
              <button className="mt-4 text-white bg-[#153D19] font-semibold text-base sm:text-lg hover:bg-[#0B170D] py-3 sm:py-4 px-6 sm:px-8 rounded transition duration-300 flex items-center space-x-2">
                <FaLongArrowAltLeft />
                <span>Back to Home</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
