import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// MUI icons (install with: npm install @mui/icons-material @mui/material @emotion/react @emotion/styled)
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, font, setFont } = useTheme();

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-brand font-semibold hover-brand" : "hover-brand";

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
              <h1 className="text-2xl font-bold text-brand hidden sm:block">
                Navkalpit
              </h1>
            </NavLink>
          </div>

          {/* Inline Menu (desktop) */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/aboutus" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/blogs" className={navLinkClass}>
              Blogs
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Service
            </NavLink>
            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>
            <NavLink to="/library" className={navLinkClass}>
              Library
            </NavLink>
            <NavLink to="/faq" className={navLinkClass}>
              FAQ
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Icons: User & Cart */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme toggle */}
            <button
              aria-label="Toggle theme"
              onClick={() => toggleTheme()}
              className="p-2 rounded-md bg-transparent hover:bg-brand-tint focus:outline-none icon-btn"
            >
              {theme === "dark" ? (
                <LightModeIcon style={{ fontSize: 20 }} />
              ) : (
                <DarkModeIcon style={{ fontSize: 20 }} />
              )}
            </button>

            {/* Font selector */}
            <select
              aria-label="Select font"
              value={font}
              onChange={(e) => setFont(e.target.value)}
              className="text-sm p-1 rounded-md bg-transparent border border-transparent focus:outline-none"
            >
              <option value="system">System</option>
              <option value="serif">Serif</option>
              <option value="mono">Monospace</option>
            </select>
            <NavLink to="/signup" aria-label="Signup" className="p-0">
              <button
                aria-label="User Signup"
                className="p-2 rounded-md bg-transparent hover:bg-brand-tint focus:outline-none focus-ring icon-btn"
              >
                <PersonIcon style={{ fontSize: 22 }} />
              </button>
            </NavLink>
            <NavLink to="/cart" aria-label="CartLink" className="p-0">
              <button
                aria-label="Cart"
                className="p-2 rounded-md bg-transparent hover:bg-brand-tint focus:outline-none focus-ring icon-btn"
              >
                <ShoppingCartIcon style={{ fontSize: 22 }} />
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Button (keeps black color) */}
          <button
            className="md:hidden focus:outline-none icon-btn"
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
        <div className="md:hidden card px-4 pb-4 space-y-2">
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => toggleTheme()}
              className="p-2 rounded-md bg-transparent hover:bg-brand-tint icon-btn"
            >
              {theme === "dark" ? (
                <LightModeIcon style={{ fontSize: 18 }} />
              ) : (
                <DarkModeIcon style={{ fontSize: 18 }} />
              )}
            </button>
            <span className="text-sm">
              {theme === "dark" ? "Dark" : "Light"}
            </span>
          </div>
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/blogs"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/service"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Service
          </NavLink>
          <NavLink
            to="/products"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/library"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Library
          </NavLink>
          <NavLink
            to="/faq"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={navLinkClass}
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
                className="icon-btn p-2 rounded-md hover:bg-brand-tint hover-brand"
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
                className="icon-btn p-2 rounded-md hover:bg-brand-tint hover-brand"
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
