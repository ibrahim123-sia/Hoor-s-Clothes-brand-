// pages/Products.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Products = ({ products, addToCart }) => {
  const { category } = useParams();

  // ✅ Filter if category exists
  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  const categoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "All Products";

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">
          {categoryTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;