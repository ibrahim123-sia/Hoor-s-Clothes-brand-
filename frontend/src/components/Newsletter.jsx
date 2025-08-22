// components/Newsletter.jsx (new component)
import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this to your backend
    console.log('Subscribed with email:', email)
    setSubscribed(true)
    setEmail('')
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribed(false)
    }, 3000)
  }

  return (
    <section className="py-16 bg-pink-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Join Our Newsletter</h2>
          <div className="w-24 h-1 bg-pink-300 mx-auto mb-6"></div>
          <p className="text-pink-100 mb-8">
            Subscribe to receive updates, special offers, and exclusive discounts
          </p>
          
          {subscribed ? (
            <div className="bg-pink-700 text-white p-4 rounded-lg shadow-inner">
              <p className="font-medium">Thank you for subscribing! Check your email for a welcome gift.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
              <button
                type="submit"
                className="bg-white text-pink-800 font-semibold px-6 py-3 rounded-lg hover:bg-pink-100 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-pink-200 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter