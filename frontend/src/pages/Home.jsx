// pages/Home.jsx
import React from 'react'
import Hero from '../components/Hero'
import NewArrivals from '../components/NewArrivals'
import BestSellers from '../components/BestSellers'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'

const Home = ({ addToCart }) => {
  return (
    <div>
      <Hero />
      <Features />
      <NewArrivals addToCart={addToCart} />
      <BestSellers addToCart={addToCart} />
      <Testimonials />
      <Newsletter />
    </div>
  )
}

export default Home