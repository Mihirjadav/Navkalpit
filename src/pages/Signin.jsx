import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";

const Signin = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login payload", form);
    alert("Login submitted (UI only)");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md border border-gray-100 p-8">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4s-3 1.567-3 3.5S10.343 11 12 11zM4 20c0-3.314 3.582-6 8-6s8 2.686 8 6"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Login to Navkalpit
          </h2>
          <p className="text-sm text-gray-500 text-center mb-4">
            Enter your email below to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#26285b]/30"
              placeholder="m@example.com"
            />
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label className="block text-xs text-gray-700 mb-1">
                Password
              </label>
            </div>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>

          <div>
            <PrimaryButton
              type="submit"
              className="w-full py-3 rounded-lg shadow-sm"
            >
              Login
            </PrimaryButton>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
