  import React, { useEffect, useState } from "react";
  import { Outlet, useLocation } from "react-router-dom";
  import AdminSidebar from "../components/AdminSidebar";
  import { seedAdminDemo } from "../utils/adminApi";
  import Navbar from "../pages/admin/Navbar";

  const AdminLayout = () => {
    useEffect(() => {
      seedAdminDemo();
    }, []);

    const location = useLocation();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const getPageTitle = (pathname) => {
    if (pathname.includes("/admin/customers")) return "Customers";
    if (pathname.includes("/admin/orders")) return "Orders";
    if (pathname.includes("/admin/products")) return "Products";
    if (pathname.includes("/admin/customer")) return "Customer";
    return "Dashboard";
  };

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/Navkalpit_logo.png"
              alt="logo"
              className="w-8 h-8"
            />
            <div className="font-bold">Admin</div>
          </div>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded hover:bg-brand-tint"
          >
            Menu
          </button>
        </div>

        {/* Sidebar - desktop and mobile overlay */}
        <AdminSidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Overlay for mobile when sidebar open */}
        {isSidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="md:hidden fixed inset-0 bg-black/30 z-40"
          />
        )}

         <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <Navbar  pageTitle={getPageTitle(location.pathname)} />

        {/* Page Content from Route */}
        <main className="p-6 md:p-8 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      </div>
    );
  };

  export default AdminLayout;
