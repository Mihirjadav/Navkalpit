import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";

const AdminProducts = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold">Products</h1>
        <PrimaryButton
          to="/admin/products/new"
          className="px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <span className="text-lg">+</span> Add Product
        </PrimaryButton>
      </div>

      <div className="bg-gray-100 rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-2">All Products</h2>
        <p className="text-gray-500 mb-4">
          Manage your products, view stock, and edit details.
        </p>
        <div className="text-gray-500">
          A table of products will be displayed here.
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
