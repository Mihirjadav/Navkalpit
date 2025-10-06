import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// MUI icons (install with: npm install @mui/icons-material @mui/material @emotion/react @emotion/styled)
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "text-[#26285b] font-semibold" : "text-black";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/20 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 md:px-8">
          {/* Brand / Company name */}
          <div className="flex items-center mr-6">
            <NavLink
              to="/"
              className="flex items-center gap-3 hover:opacity-90"
            >
              <img
                src="/assets/images/Navkalpit_logo.png"
                alt="Navkalpit logo"
                className="h-8 w-8 object-contain"
              />
              <h1 className="text-2xl font-bold text-black hidden sm:block">
                Navkalpit
              </h1>
            </NavLink>
          </div>

          {/* Inline Menu (desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-black">
            <NavLink to="/" className={linkClass + " hover-brand"}>
              Home
            </NavLink>
            <NavLink to="/aboutus" className={linkClass + " hover-brand"}>
              About
            </NavLink>
            <NavLink to="/blogs" className={linkClass + " hover-brand"}>
              Blogs
            </NavLink>
            <NavLink to="/services" className={linkClass + " hover-brand"}>
              Service
            </NavLink>
            <NavLink to="/products" className={linkClass + " hover-brand"}>
              Products
            </NavLink>
            <NavLink to="/library" className={linkClass + " hover-brand"}>
              Library
            </NavLink>
            <NavLink to="/faq" className={linkClass + " hover-brand"}>
              FAQ
            </NavLink>
            <NavLink to="/contact" className={linkClass + " hover-brand"}>
              Contact
            </NavLink>
          </nav>

          {/* Icons: User & Cart */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/signup" aria-label="Signup" className="p-0">
              <button
                aria-label="User Signup"
                className="text-black p-2 rounded-md bg-transparent hover:bg-brand-tint focus:outline-none focus:ring-2 focus:ring-[#26285b]/30"
              >
                <PersonIcon style={{ fontSize: 22 }} />
              </button>
            </NavLink>
            <NavLink to="/cart" aria-label="CartLink" className="p-0">
              <button
                aria-label="Cart"
                className="text-black p-2 rounded-md bg-transparent hover:bg-brand-tint focus:outline-none focus:ring-2 focus:ring-[#26285b]/30"
              >
                <ShoppingCartIcon style={{ fontSize: 22 }} />
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Button (keeps black color) */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* spacer so page content doesn't sit under fixed navbar */}
      <div className="h-16 md:h-20" />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-black">
          <NavLink
            to="/"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/blogs"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/service"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Service
          </NavLink>
          <NavLink
            to="/products"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/library"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Library
          </NavLink>
          <NavLink
            to="/faq"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
          <div className="flex items-center gap-3 pt-2">
            <NavLink
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="p-0"
            >
              <button
                aria-label="User Signup"
                className="text-black p-2 rounded-md hover:bg-gray-100 hover-brand"
              >
                <PersonIcon style={{ fontSize: 18 }} />
              </button>
            </NavLink>
            <NavLink
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="p-0"
            >
              <button
                aria-label="Cart"
                className="text-black p-2 rounded-md hover:bg-gray-100 hover-brand"
              >
                <ShoppingCartIcon style={{ fontSize: 18 }} />
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
