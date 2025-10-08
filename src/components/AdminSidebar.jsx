import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
            ? "bg-gray-50 text-brand font-semibold"
            : "text-gray-700 hover:text-brand"
        }`}
      >
        {isActive && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-brand rounded-r-md" />
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
        className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-md hover:bg-brand-tint text-gray-700 ${
          open ? "bg-brand text-white" : ""
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

export default function AdminSidebar({ isOpen = false, onClose = () => {} }) {
  const navigate = useNavigate();

  function handleLogout() {
    // clear demo admin token
    localStorage.removeItem("admin_token");
    navigate("/admin/signin");
  }

  // when used as overlay (mobile), we'll show the sidebar regardless and
  // rely on parent to control visibility via isOpen
  const baseClass = isOpen
    ? "fixed inset-y-0 left-0 z-50 w-64 border-r bg-card p-0"
    : "hidden md:block w-64 border-r h-screen sticky top-0";

  return (
    <aside className={baseClass}>
      {isOpen && (
        <div className="p-3 flex items-center justify-between border-b">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/Navkalpit_logo.png"
              alt="logo"
              className="w-8 h-8"
            />
            <div className="font-bold text-lg">Navkalpit</div>
          </div>
          <button onClick={onClose} className="p-2 rounded hover:bg-brand-tint">
            Close
          </button>
        </div>
      )}
      {!isOpen && (
        <div className="p-6 flex items-center gap-3">
          <img
            src="/assets/images/Navkalpit_logo.png"
            alt="logo"
            className="w-10 h-10"
          />
          <div className="font-bold text-lg">Navkalpit</div>
        </div>
      )}

      <nav className="px-2 space-y-1">
        <SidebarItem to="/admin/dashboard">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md icon-bg flex items-center justify-center icon-text">
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
            <div className="w-8 h-8 rounded-md icon-bg flex items-center justify-center icon-text">
              <FaClipboardList />
            </div>
            <span>Orders</span>
          </div>
        </SidebarItem>

        <SidebarItem to="/admin/customers">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md icon-bg flex items-center justify-center icon-text">
              <FaUsers />
            </div>
            <span>Customers</span>
          </div>
        </SidebarItem>

        <SidebarItem to="/admin/blogs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md icon-bg flex items-center justify-center icon-text">
              <FaBook />
            </div>
            <span>Blogs</span>
          </div>
        </SidebarItem>

        <SidebarItem to="/admin/blogs/new">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md icon-bg flex items-center justify-center icon-text">
              <FaBook />
            </div>
            <span>New Blog</span>
          </div>
        </SidebarItem>
      </nav>

      <div className="mt-auto p-6">
        <div className="flex items-center gap-3 p-3 rounded-md card">
          <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center">
            N
          </div>
          <div>
            <div className="font-semibold">Admin User</div>
            <div className="text-xs text-gray-500">admin@navkalpit.com</div>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 rounded-md border bg-transparent hover:bg-brand-tint"
          >
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
