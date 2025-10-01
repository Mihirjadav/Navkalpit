// src/pages/Home.jsx
import HeroCarousel from "../components/HeroCarousel";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="bg-[#121212] text-white">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto py-16 px-6">
  <h2 className="text-3xl font-bold text-center text-[#FF6F00] mb-10">
    Featured Products
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <ProductCard
      img="/assets/images/nvidia.jpg"
      name="NVIDIA RTX 4080"
      price="₹1,20,000"
    />
    <ProductCard
      img="/assets/images/intel.jpg"
      name="Intel i9 14th Gen"
      price="₹65,000"
    />
    <ProductCard
      img="/assets/images/DDR5.jpg"
      name="Corsair 32GB DDR5"
      price="₹18,000"
    />
  </div>
</section>

    </div>
  );
};

export default Home;
