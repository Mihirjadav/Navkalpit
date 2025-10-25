import React from 'react';
import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

export default function Navbar({ pageTitle }) {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b bg-white shadow-sm">
      {/* Logo & Title */}
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold">{pageTitle}</h1>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search data, users, or reports"
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
        
        <FaBell className="text-gray-500 text-xl cursor-pointer" />
        <FaUserCircle className="text-gray-500 text-2xl cursor-pointer" />
      </div>
    </div>
  );
}