// components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Simplified active check
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-pink-200 text-pink-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
           <Link to="/" className="flex items-center group">
  <div className="relative flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-pink-400 mr-3"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
        clipRule="evenodd"
      />
    </svg>
    <span className="relative z-10 text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent font-playfair">
      Hoor's
    </span>
   
  </div>
</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-pink-700 transition-colors ${
                isActive("/") ? "border-b-2 border-pink-700" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/products/dress"
              className={`hover:text-pink-700 transition-colors ${
                isActive("/products/dress") ? "border-b-2 border-pink-700" : ""
              }`}
            >
              Dresses
            </Link>
            <Link
              to="/products/frock"
              className={`hover:text-pink-700 transition-colors ${
                isActive("/products/frock") ? "border-b-2 border-pink-700" : ""
              }`}
            >
              Frocks
            </Link>
            <Link
              to="/products/party"
              className={`hover:text-pink-700 transition-colors ${
                isActive("/products/party")
                  ? "border-b-2 border-pink-700"
                  : ""
              }`}
            >
              Party
            </Link>
            <Link
              to="/products"
              className={`hover:text-pink-700 transition-colors ${
                isActive("/products") ? "border-b-2 border-pink-700" : ""
              }`}
            >
              All Products
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-pink-900 hover:text-pink-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-pink-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products/dress"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Dresses
            </Link>
            <Link
              to="/products/frock"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Frocks
            </Link>
            <Link
              to="/products/party"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Party
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-400"
              onClick={() => setIsMenuOpen(false)}
            >
              All Products
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
