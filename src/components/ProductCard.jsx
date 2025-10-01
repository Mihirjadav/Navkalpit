import React from "react";

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="bg-[#121212] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      {/* Product Image */}
      <img src={img} alt={name} className="w-full h-64 object-cover" />

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-[#E0E0E0] mb-4">{price}</p>

        {/* Buttons */}
        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <button className="w-full sm:w-1/2 px-4 py-2 bg-[#FF6F00] hover:bg-[#e65c00] rounded-xl font-semibold text-white transition">
            View Details
          </button>
          <button className="w-full sm:w-1/2 px-4 py-2 bg-[#FF6F00] hover:bg-[#315f8c] rounded-xl font-semibold text-white transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
