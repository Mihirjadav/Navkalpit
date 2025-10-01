import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#0d151c] shadow-md">
      <div className="text-2xl font-bold">Navkalpit</div>
      <nav className="flex items-center gap-6">
        <Link to="/" className="hover:text-[#00c4ff]">Home</Link>
        <Link to="/services" className="hover:text-[#00c4ff]">Services</Link>
        <a href="#" className="hover:text-[#00c4ff]">About Us</a>
        <a href="#" className="hover:text-[#00c4ff]">Training</a>
        <a href="#" className="hover:text-[#00c4ff]">R&D</a>
        <button className="bg-[#00c4ff] text-black px-4 py-2 rounded-lg hover:bg-[#00a8d1]">
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
