// components/Testimonials.jsx (corrected - this was missing)
import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Asghar",
      comment: "The quality of these dresses is exceptional! My daughter loves them.",
      rating: 5
    },
    {
      id: 2,
      name: "Umme Hafsa",
      comment: "Beautiful craftsmanship and fast delivery. Will definitely order again!",
      rating: 5
    },
    {
      id: 3,
      name: "Sana Asif",
      comment: "The perfect dress for my baby's first birthday. So many compliments!",
      rating: 4
    }
  ]

  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }
    return stars
  }

  return (
    <section className="py-12 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
              <p className="text-pink-700 font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials