// components/BestSellers.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { getBestSellers } from '../data/ProductsData'

const BestSellers = ({ addToCart }) => {
  const bestSellers = getBestSellers()

  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-300 rounded-full translate-x-1/3 translate-y-1/3 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-pink-800 mb-4">Best Sellers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most loved pieces, adored by babies and parents alike
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/products"
            className="inline-flex items-center bg-white border-2 border-pink-300 text-pink-700 hover:bg-pink-50 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg group"
          >
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BestSellers