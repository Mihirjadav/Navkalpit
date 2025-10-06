import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
