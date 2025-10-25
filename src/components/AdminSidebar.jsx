import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { CategoriesLogo, CouponcodeLogo, CustomerLogo, HomeLogo, OrdermanagementLogo,
  TransactionLogo,BrandLogo,
  AddproductLogo,
  ProductlistLogo,
  ProductreviewLogo,
  AdminLogo,
  LogoutLogo,
  ShopLogo,
  LinkLogo
 } from "../svg/icon";

const SidebarItem = ({ to, children }) => (
  <NavLink to={to} className="relative block">
    {({ isActive }) => (
      <div
        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-150 ${
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
    : "hidden md:block w-64 border-r min-h-screen sticky top-0";

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
        <div className="px-3 py-5 flex items-center gap-3">
          <img
            src="/assets/images/Navkalpit_logo.png"
            alt="logo"
            className="w-8 h-8"
          />
          <div className="font-bold text-lg">Navkalpit</div>
        </div>
      )}

      <nav>
        <div className="ml-4">
          <span>Main Menu</span>
        </div>
        <SidebarItem to="/admin/dashboard">
          <div className="flex items-center gap-3">
              <HomeLogo height={20} width={20}/>
            <span>Dashboard</span>
          </div>
        </SidebarItem>

        <SidebarItem to="/admin/orders">
          <div className="flex items-center gap-3">
              <OrdermanagementLogo width={18} height={18}/> 
            <span>Order Management</span>
          </div>
        </SidebarItem>

        <SidebarItem to="/admin/customer">
          <div className="flex items-center gap-3">
              <CustomerLogo width={20} height={20}/>
            <span>Customers</span>
          </div>
        </SidebarItem>

        <SidebarItem to="/admin/orders">
          <div className="flex items-center gap-3">
              <CouponcodeLogo width={20} height={20}/>
              <span>Coupon Code</span>
          </div>
        </SidebarItem>

        <SidebarItem to="/admin/orders">
          <div className="flex items-center gap-3">
              <CategoriesLogo width={20} height={20}/>  
            <span>Categories</span>
          </div>
        </SidebarItem>

        <SidebarItem to="/admin/blogs/new">
          <div className="flex items-center gap-3">
              <TransactionLogo width={20} height={20}/>
            <span>Transaction</span>
          </div>
        </SidebarItem>

        <SidebarItem to="/admin/blogs/new">
          <div className="flex items-center gap-3">
            <BrandLogo width={20} height={20}/>
            <span>Brand</span>
          </div>
        </SidebarItem>

        <div className="ml-4">
          <span>Product</span>
        </div>

        <SidebarItem to="/admin/products/new">
          <div className="flex items-center gap-3">
            <AddproductLogo height={20} width={20}/>
            <span>Add Products</span>
          </div>
        </SidebarItem>

        <SidebarItem>
          <div className="flex items-center gap-3">
            <ProductlistLogo height={20} width={20}/>
            <span>Product List</span>
          </div>
        </SidebarItem>

        <SidebarItem>
          <div className="flex items-center gap-3">
            <ProductreviewLogo height={20} width={20}/>
            <span>Product Reviews</span>
          </div>
        </SidebarItem>

        <div className="ml-4">
          <span>Admin </span>
        </div>

        <SidebarItem>
          <div className="flex gap-3 items-center">
            <AdminLogo height={20} width={20}/>
            <span>Admin Role</span>
          </div>
        </SidebarItem>
      </nav>

      <div className="mt-auto p-4">
        <div className="flex items-center gap-3 py-3 rounded-md">
          <div className="w-8 h-8  bg-brand text-white flex items-center rounded-full justify-center">
            N
          </div>
          <div>
            <div className="font-semibold">Admin User</div>
            <div className="text-xs text-gray-500">admin@navkalpit.com</div>
          </div>
          <div className="" onClick={handleLogout}>
            <LogoutLogo height={20} width={20}/> 
          </div>
        </div>
       <div className="shadow-lg px-4 py-2 mt-3 rounded-md">
         <div className="flex items-center gap-3">
          <ShopLogo height={20} width={20}/>
          <span>Your Shop</span>
          <div className="ml-10">
            <LinkLogo height={14} width={14}/>
          </div>
        </div>
       </div>
      </div>
    </aside>
  );
}
