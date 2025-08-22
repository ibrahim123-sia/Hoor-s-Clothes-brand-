// components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-pink-200 text-pink-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hoor's</h3>
            <p className="text-pink-800">Beautiful handmade baby dresses for your little ones.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-pink-800 hover:text-pink-700">Home</Link></li>
              <li><Link to="/products" className="text-pink-800 hover:text-pink-700">All Products</Link></li>
              <li><Link to="/products/dress" className="text-pink-800 hover:text-pink-700">Dresses</Link></li>
              <li><Link to="/products/frock" className="text-pink-800 hover:text-pink-700">Frocks</Link></li>
              <li><Link to="/products/rompers" className="text-pink-800 hover:text-pink-700">Rompers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-pink-800">
              <p>123 Baby Street</p>
              <p>Children City, CC 12345</p>
              <p>Email: info@hoors.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-pink-300 mt-8 pt-6 text-center text-pink-700">
          <p>&copy; {new Date().getFullYear()} Hoor's Handmade Baby Dresses. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer