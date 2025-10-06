import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBoxes,
  FaClipboardList,
  FaUsers,
  FaBook,
  FaImage,
} from "react-icons/fa";

const SidebarItem = ({ to, children }) => (
  <NavLink to={to} className="relative block">
    {({ isActive }) => (
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors duration-150 ${
          isActive
            ? "bg-gray-50 text-[#26285b] font-semibold"
            : "text-gray-700 hover:text-[#26285b]"
        }`}
      >
        {isActive && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-[#26285b] rounded-r-md" />
        )}
        <div className="pl-3 w-full">{children}</div>
      </div>
    )}
  </NavLink>
);

const SidebarSubmenu = ({ label, icon: Icon, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((s) => !s)}
        className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-md hover:bg-[#26285b]/6 text-gray-700 ${
          open ? "bg-[#26285b] text-white" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon />}
          <span className="truncate">{label}</span>
        </div>
        <svg
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-90" : "rotate-0"
          }`}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M6 6l6 4-6 4V6z" fill="currentColor" />
        </svg>
      </button>

      {open && <div className="mt-1 ml-4 space-y-1">{children}</div>}
    </div>
  );
};

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <img
          src="/assets/images/Navkalpit_logo.png"
          alt="logo"
          className="w-10 h-10"
        />
        <div className="font-bold text-lg">Navkalpit</div>
      </div>

      <nav className="px-2 space-y-1">
        <SidebarItem to="/admin/dashboard">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#f5f7fb] flex items-center justify-center text-[#26285b]">
              <FaBoxes />
            </div>
            <span>Dashboard</span>
          </div>
        </SidebarItem>
        <SidebarSubmenu label="Products" icon={FaBoxes}>
          <SidebarItem to="/admin/products">Manage Products</SidebarItem>
          <SidebarItem to="/admin/products/new">Add Product</SidebarItem>
        </SidebarSubmenu>
        <SidebarItem to="/admin/orders">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#f5f7fb] flex items-center justify-center text-[#26285b]">
              <FaClipboardList />
            </div>
            <span>Orders</span>
          </div>
        </SidebarItem>
        <SidebarItem to="/admin/customers">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#f5f7fb] flex items-center justify-center text-[#26285b]">
              <FaUsers />
            </div>
            <span>Customers</span>
          </div>
        </SidebarItem>
        <SidebarItem to="/admin/blogs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#f5f7fb] flex items-center justify-center text-[#26285b]">
              <FaBook />
            </div>
            <span>Blogs</span>
          </div>
        </SidebarItem>
        <SidebarItem to="/admin/library">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#f5f7fb] flex items-center justify-center text-[#26285b]">
              <FaBook />
            </div>
            <span>Library</span>
          </div>
        </SidebarItem>
        <SidebarItem to="/admin/images">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#f5f7fb] flex items-center justify-center text-[#26285b]">
              <FaImage />
            </div>
            <span>AI Images</span>
          </div>
        </SidebarItem>
      </nav>

      <div className="mt-auto p-6">
        <div className="flex items-center gap-3 p-3 rounded-md bg-gray-50">
          <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center">
            N
          </div>
          <div>
            <div className="font-semibold">Admin User</div>
            <div className="text-xs text-gray-500">admin@navkalpit.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
