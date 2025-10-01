import React from "react";

const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="bg-[#1c2732] p-6 rounded-xl text-center w-64 shadow-md hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-3">
        {icon} {title}
      </h3>
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  );
};

export default ServiceCard;
