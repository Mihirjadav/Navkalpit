import React from "react";

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      {/* Product Image */}
      <div className="w-full h-56 sm:h-72 card-image overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-medium card-title mb-2">{name}</h3>
        <div className="flex justify-center gap-28">
          <p className="font-semibold card-price">{price}</p>
        <button className="border px-2 cursor-pointer rounded-md">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
