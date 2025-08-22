// components/NewArrivals.jsx (complete fixed version)
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { productsData } from '../data/ProductsData'

const NewArrivals = ({ addToCart }) => {
  const [newArrivals, setNewArrivals] = useState([])

  useEffect(() => {
    // Get new arrivals (products added in the last 30 days)
    const getNewArrivals = () => {
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
      
      // For debugging
      console.log('30 days ago:', thirtyDaysAgo.toDateString())
      
      const arrivals = productsData.filter(product => {
        const productDate = new Date(product.dateAdded)
        console.log(`Product: ${product.name}, Date: ${productDate.toDateString()}, IsNew: ${product.isNew}`)
        return product.isNew
      })
      
      console.log('Filtered new arrivals:', arrivals)
      return arrivals
    }

    setNewArrivals(getNewArrivals())
  }, [])

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-0 w-28 h-28 bg-pink-100 rounded-full translate-x-1/3 opacity-40"></div>
      <div className="absolute bottom-20 left-0 w-24 h-24 bg-rose-100 rounded-full -translate-x-1/3 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            New Collection
          </span>
          <h2 className="text-4xl font-playfair font-bold text-pink-800 mb-4">New Arrivals</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest creations, designed with love and attention to detail
          </p>
        </div>
        
        {newArrivals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-pink-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-16M5 8h14" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-pink-800 mb-2">No New Arrivals</h3>
            <p className="text-gray-600 mb-6">Check back soon for our latest creations!</p>
            <Link 
              to="/products"
              className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300"
            >
              View All Products
            </Link>
          </div>
        )}
        
        {newArrivals.length > 0 && (
          <div className="text-center mt-12">
            <Link 
              to="/products"
              className="inline-flex items-center bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg shadow-pink-200 group"
            >
              Shop New Collection
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default NewArrivals