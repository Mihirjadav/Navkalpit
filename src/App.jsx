import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import AdminLayout from "./layout/AdminLayout";
import {
  Home,
  Services,
  AboutUs,
  Contact,
  Products,
  Blogs,
  Faq,
  Signup,
  Signin,
  AdminProducts,
  AdminDashboard,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public site wrapped with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>

        {/* Admin routes use AdminLayout directly so site header/footer are not shown */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
