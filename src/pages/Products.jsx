import React from "react";
import ProductCard from "../components/ProductCard";

// Sample Products Data
const products = [
  {
    id: 1,
    img: "/assets/images/banner1.png",
    name: "NVIDIA RTX 4080",
    price: "₹1,20,000",
  },
  {
    id: 2,
    img: "/assets/images/banner2.png",
    name: "Intel i9 14th Gen",
    price: "₹65,000",
  },
  {
    id: 3,
    img: "/assets/images/banner3.png",
    name: "Corsair 32GB DDR5",
    price: "₹18,000",
  },
  {
    id: 4,
    img: "/assets/images/banner1.png",
    name: "AMD Ryzen 9 7900X",
    price: "₹55,000",
  },
  {
    id: 5,
    img: "/assets/images/banner2.png",
    name: "Samsung 2TB SSD",
    price: "₹15,000",
  },
  {
    id: 6,
    img: "/assets/images/banner3.png",
    name: "Corsair RGB Gaming Keyboard",
    price: "₹7,500",
  },
];

const Products = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-[#E0E0E0]">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-[#121212] via-[#1F2937] to-[#121212]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF6F00] mb-4">
          Our Products
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          Explore our premium range of computer hardware and accessories
          carefully curated for gamers, professionals, and tech enthusiasts.
        </p>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
