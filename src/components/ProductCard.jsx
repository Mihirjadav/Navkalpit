import React from "react";

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      {/* Product Image */}
      <div className="w-full h-72 bg-gray-50 overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{name}</h3>
        <p className="text-blue-600 font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
