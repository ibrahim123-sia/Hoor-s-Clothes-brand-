// data/ProductsData.js (updated with matching descriptions)
import productImages from '../utils/imageImports';

export const productsData = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: "Rs 500.00",
    category: "dress",
    images: [productImages[1], productImages[2], productImages[3]],
    rating: 4.5,
    reviews: 24,
    description: "A beautiful floral summer dress perfect for warm weather. Features light, breathable fabric with vibrant flower patterns that will keep your little one cool and stylish all season long.",
    details: [
      "Material: 100% Cotton",
      "Age Range: 4-5 years",
      "Available Colors: Pink, White, Blue, Yellow",
      "Care: Hand wash recommended"
    ],
    dateAdded: "2023-10-15",
    isNew: true
  },
  {
    id: 2,
    name: "Simple Summer Dress",
    price: "Rs 500.00",
    category: "dress",
    images: [productImages[4], productImages[5], productImages[6]],
    rating: 4.6,
    reviews: 18,
    description: "An elegant yet simple summer dress with minimalistic design. Perfect for everyday wear with its comfortable fit and classic style that never goes out of fashion.",
    details: [
      "Material: 80% Cotton, 20% Lace",
      "Age Range: 3-4 years",
      "Available Colors: Pink, White",
      "Care: Hand wash only"
    ],
    dateAdded: "2023-11-05",
    isNew: true
  },
  {
    id: 3,
    name: "Light Weight Dress",
    price: "Rs 500.00",
    category: "dress",
    images: [productImages[7], productImages[8], productImages[9]],
    rating: 4.8,
    reviews: 12,
    description: "An ultra-lightweight dress perfect for hot summer days. Made with special breathable fabric that allows maximum air circulation while maintaining style and comfort.",
    details: [
      "Material: Denim",
      "Age Range: 2-3 years",
      "Available Colors: Blue, Light Blue",
      "Care: Machine washable"
    ],
    dateAdded: "2023-09-20",
    isNew: false
  },
  {
    id: 8,
    name: "Beautiful Light Dress",
    price: "Rs 500.00",
    category: "dress",
    images: [productImages[14], productImages[15], productImages[16]],
    rating: 4.9,
    reviews: 9,
    description: "A beautifully crafted light dress with delicate details and airy fabric. Perfect for special occasions or everyday elegance with its graceful design and comfortable fit.",
    details: [
      "Material: Cotton Jersey",
      "Age Range: 4-5 years",
      "Available Colors: Gray, Blue, Pink",
      "Care: Machine washable"
    ],
    dateAdded: "2023-07-15",
    isNew: false
  },
  {
    id: 4,
    name: "Princess Flock",
    price: "Rs 500.00",
    category: "frock",
    images: [productImages[10]],
    rating: 4.7,
    reviews: 32,
    description: "A royal-inspired princess frock with exquisite details and luxurious fabric. Features elegant embroidery and a flowing silhouette that makes every little girl feel like royalty.",
    details: [
      "Material: Satin and Tulle",
      "Age Range: 2-3 years",
      "Available Colors: Pink, White, Lavender",
      "Care: Dry clean recommended"
    ],
    dateAdded: "2023-11-20",
    isNew: true
  },
  {
    id: 5,
    name: "Baby Flock",
    price: "Rs 500.00",
    category: "frock",
    images: [productImages[11]],
    rating: 4.8,
    reviews: 15,
    description: "An adorable baby frock designed for the littlest ones. Soft, gentle fabric with cute patterns and comfortable fit perfect for newborns and infants.",
    details: [
      "Material: 100% Organic Cotton",
      "Age Range: 6-12 months",
      "Available Colors: White, Yellow, Green",
      "Care: Machine washable"
    ],
    dateAdded: "2023-08-10",
    isNew: false
  },
  {
    id: 6,
    name: "Princess Party Dress",
    price: "Rs 1000.00",
    category: "party",
    images: [productImages[12]],
    rating: 4.6,
    reviews: 28,
    description: "A magnificent princess party dress perfect for birthdays and special celebrations. Features sparkling details, luxurious fabric, and a magical design that will make your child the star of any party.",
    details: [
      "Material: Silk and Lace",
      "Age Range: 5-6 years",
      "Available Colors: White, Cream",
      "Care: Dry clean only"
    ],
    dateAdded: "2023-11-10",
    isNew: true
  },
  {
    id: 7,
    name: "Baby Party Dress",
    price: "Rs 500.00",
    category: "party",
    images: [productImages[13]],
    rating: 4.9,
    reviews: 21,
    description: "An adorable baby party dress designed for special occasions. Features celebratory elements, comfortable yet festive fabric, and cute details perfect for birthdays and family gatherings.",
    details: [
      "Material: Cotton Blend",
      "Age Range: 1-2 years",
      "Available Colors: Multi-color floral",
      "Care: Hand wash recommended"
    ],
    dateAdded: "2023-10-30",
    isNew: true
  },
];

// Get new arrivals (products added in the last 30 days)
export const getNewArrivals = () => {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  return productsData.filter(product => {
    const productDate = new Date(product.dateAdded);
    // Compare dates correctly (ignore time portion)
    return productDate >= thirtyDaysAgo && product.isNew;
  });
};

// Get best sellers (products with highest ratings and reviews)
export const getBest极速快3ellers = () => {
  return [...productsData]
    .sort((a, b) => {
      // Sort by rating first, then by number of reviews
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      }
      return b.reviews - a.reviews;
    })
    .slice(0, 4); // Get top 4
};