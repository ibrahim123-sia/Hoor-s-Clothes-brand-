// components/Hero.jsx (updated design)
import React from 'react'
import { Link } from 'react-router-dom'
import hero from "../assets/hoor.png"

const Hero = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center bg-center bg-cover overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 to-pink-600/50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-rose-300 rounded-full opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4 leading-tight">
          Handmade Baby Dresses
        </h1>
        <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Beautiful custom-made dresses for your little ones, crafted with love and care
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/products" 
            className="bg-white text-pink-700 hover:bg-pink-50 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Shop Collection
          </Link>
          <Link 
            to="/products/dress" 
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            View Dresses
          </Link>
        </div>
      </div>

      {/* Decorative curve at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-[100%]"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero