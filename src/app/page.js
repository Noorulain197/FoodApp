"use client"
import Image from "next/image";
import Header from "./header/page";
import Section1 from "./section1/page";
import Count from "./count/page";
import Review from "./review/page";
import Table from "./table/page";
import Experience from "./experience/page";
import Follow from "./follow/page";
import Footer from "./footer/page";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import CountUp from "react-countup";
import SubscriptionPopup from "./subscription-popup/page";


export default function Home() {
  return (
    <>
      <Header />

      <SubscriptionPopup />
      {/* Hero Banner Section */}
      <div className="relative w-full h-auto min-h-[500px] sm:min-h-[700px] lg:min-h-[800px] pt-[100px]">
        {/* Background Image */}
        <Image
          src="/main.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content Wrapper */}
        <div className="relative z-20 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between text-white px-4">
          {/* Text Section */}
          <div className="text-center lg:text-left max-w-xl lg:max-w-2xl mb-10 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans leading-tight mb-4">
              A Taste of<br className="hidden sm:block" />
              Italy In<br className="hidden sm:block" />
              Every Bite
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8">
              Immerse yourself in the rich culinary traditions of Italy. From hand-tossed pizzas to sumptuous pasta dishes, every plate is a masterpiece crafted with love.
            </p>
            <button className="bg-white text-[#153D19] px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-green-50 transition-all">
              Savor The Flavor
            </button>
          </div>

          {/* Image on Large Screens */}
          <div className="hidden lg:block w-full max-w-[500px]">
            <div className="relative aspect-square">
              <Image
                src="/pngegg.png"
                alt="Side"
                fill
                className="object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Our Italian Legacy Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          <div className="lg:w-1/2 relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/one.jpg"
                alt="Italian cuisine"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#153D19] mb-4 md:mb-6">
              Our Italian Legacy
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8">
              Welcome to where Italian culinary history comes alive. Our restaurant honors timeless flavors and techniques cherished for generations.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Authentic Recipes",
                  content: "Pizzas made with traditional recipes passed down through generations."
                },
                {
                  title: "Fresh Ingredients",
                  content: "Finest ingredients ensuring every bite bursts with flavor."
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-lg md:text-xl font-semibold text-[#153D19] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              ))}

              <button className="mt-4 bg-[#153D19] text-white px-6 py-3 rounded-lg hover:bg-[#0B170D] transition-colors">
                Explore Our Heritage
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#f8f8f8] py-12 md:py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: 20, suffix: "+", label: "Years Of Experience" },
            { number: 50, label: "Menu Items" },
            { number: 40, suffix: "+", label: "Professional Team" },
            { number: 5900, suffix: "+", label: "Positive Reviews" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-[#153D19] mb-2">
                <CountUp end={stat.number} duration={2} />
                {stat.suffix}
              </div>
              <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#153D19] mb-4">
            Taste the Italian Favorites
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore the dishes that have won the hearts of our guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Margherita Pizza",
              desc: "Classic pizza with fresh mozzarella, basil, and rich tomato sauce.",
              img: "/two.jpg",
              price: "$15"
            },
            {
              title: "Fettuccine Alfredo",
              desc: "Creamy Alfredo sauce with tender fettuccine and Parmesan.",
              img: "/three.jpg",
              price: "$20"
            },
            {
              title: "Lasagna Bolognese",
              desc: "Layers of pasta, meat sauce, and béchamel, baked perfectly.",
              img: "/four.jpg",
              price: "$18"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-60 sm:h-72">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 right-4 bg-[#153D19] text-white px-4 py-1 rounded-full">
                  {item.price}
                </span>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <button className="w-full bg-[#153D19] text-white py-2.5 rounded-lg hover:bg-[#0B170D]">
                  View Menu
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chef Section */}
      <section className="bg-[#f8f8f8] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#153D19] mb-4">
              Meet the Masters
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing an unparalleled dining experience that feels like a warm embrace from Italy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "JonnyDe Smith", role: "Head Chef", img: "/five.png" },
              { name: "Maria Rossi De", role: "Pastry Chef", img: "/six.png" },
              { name: "Antonio De Luca", role: "Sous Chef", img: "/seven.png" },
              { name: "Giulia Romano", role: "Line Cook", img: "/eight.png" }
            ].map((chef, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-80">
                  <Image
                    src={chef.img}
                    alt={chef.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                    <h3 className="text-xl font-semibold text-white">{chef.name}</h3>
                    <p className="text-gray-300 text-sm">{chef.role}</p>
                  </div>
                </div>
                <div className="p-4 flex justify-center space-x-3">
                  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                    <button key={i} className="text-[#153D19] hover:text-[#0B170D]">
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Review />
      <Table />
      <Experience />
      <Follow />
      <Footer />
    </>
  );
}