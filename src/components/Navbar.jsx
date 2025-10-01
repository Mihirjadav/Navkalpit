import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#00c4ff] font-semibold"
      : "text-white hover:text-[#00c4ff]";

  return (
    <header className="bg-[#0d151c] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Navkalpit Logo" className="w-10 h-10 object-contain" />
          <div className="text-2xl font-bold text-white">Navkalpit</div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/aboutus" className={linkClass}>About Us</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "bg-[#00c4ff] text-black px-4 py-2 rounded-lg font-semibold"
                : "bg-[#00c4ff] text-black px-4 py-2 rounded-lg hover:bg-[#00a8d1]"
            }
          >
            Signup
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d151c] px-4 pb-4 space-y-2">
          <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/products" className={linkClass} onClick={() => setMenuOpen(false)}>Products</NavLink>
          <NavLink to="/services" className={linkClass} onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/aboutus" className={linkClass} onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "w-full block text-center bg-[#00c4ff] text-black px-4 py-2 rounded-lg font-semibold"
                : "w-full block text-center bg-[#00c4ff] text-black px-4 py-2 rounded-lg hover:bg-[#00a8d1]"
            }
            onClick={() => setMenuOpen(false)}
          >
            Signup
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
