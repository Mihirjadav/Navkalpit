import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

// Sample Products Data
const products = [
  {
    id: 1,
    img: "/assets/images/6layer.webp",
    name: "Flexible PCB - 4 Layer",
    price: "$125.00",
  },
  {
    id: 2,
    img: "/assets/images/8layer.webp",
    name: "Rigid-Flex PCB - 6 Layer",
    price: "$250.50",
  },
  {
    id: 3,
    img: "/assets/images/aluminium.webp",
    name: "Multi-Layer PCB - 8 Layer",
    price: "$310.00",
  },
  {
    id: 4,
    img: "/assets/images/aluminium.webp",
    name: "Aluminum Core PCB",
    price: "$95.75",
  },
  {
    id: 5,
    img: "/assets/images/6layer.webp",
    name: "SMT Stencil",
    price: "$50.00",
  },
  {
    id: 6,
    img: "/assets/images/assemblykit.webp",
    name: "DIY Assembly Kit",
    price: "$75.00",
  },
];

const Products = () => {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const filtered = products.filter(
    (p) => category === "All" || p.name.includes(category)
  );

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-extrabold mb-1">Our Products</h1>
        <p className="text-gray-600 mb-6">
          Explore our range of high-quality PCB products, from standard boards
          to advanced custom solutions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Filters - left */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28">
              <h4 className="font-semibold mb-3">Filters</h4>
              <div className="card border rounded-md p-4">
                <div className="mb-4">
                  <h5 className="font-medium mb-2">Category</h5>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="cat"
                      onChange={() => setCategory("All")}
                      checked={category === "All"}
                    />
                    All
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="cat"
                      onChange={() => setCategory("Flexible")}
                      checked={category === "Flexible"}
                    />
                    PCBs
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="cat"
                      onChange={() => setCategory("Stencil")}
                      checked={category === "Stencil"}
                    />
                    Stencils
                  </label>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Price Range</h5>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="price" /> $0 - $100
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="price" /> $100 - $300
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="price" /> $300 - $500
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="price" /> $500+
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products list */}
          <main className="lg:col-span-9">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600">
                Showing {filtered.length} products
              </div>
              <div className="flex items-center gap-4">
                <label className="text-sm text-gray-600">Sort by</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border rounded-md px-2 py-1"
                >
                  <option value="">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  img={product.img}
                  name={product.name}
                  price={product.price}
                />
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Products;
