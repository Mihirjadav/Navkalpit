import React, { useEffect, useRef } from "react";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let index = 0;
    const interval = setInterval(() => {
      const images = scrollContainer.children;
      if (images.length === 0) return;

      index = (index + 1) % images.length;

      scrollContainer.scrollTo({
        left: images[index].offsetLeft,
        behavior: "smooth",
      });
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    // Main container with dark background
    <div className="min-h-screen bg-[#1F2937] text-white"> 
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-left pr-4">
            <h1 className="text-5xl font-extrabold leading-tight">
              Innovate. Grow. <br />
              Transform
            </h1>
            <p className="text-[#34D399] mt-4 text-lg">
              Empowering your future with cutting-edge solutions
            </p>
          </div>
          
          {/* Right Side: Auto-Scroll Image Carousel with Horizontal Scrollbar */}
          <div
            ref={scrollRef}
            className="w-full md:w-1/2 mt-10 md:mt-0 overflow-x-auto h-max flex gap-4 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700"
          >
            <img
              src="/assets/images/banner1.png"
              alt="Banner 1"
              className="w-full h-56 object-cover rounded-xl flex-shrink-0 snap-center"
            />
            <img
              src="/assets/images/banner2.png"
              alt="Banner 2"
              className="w-full h-56 object-cover rounded-xl flex-shrink-0 snap-center"
            />
            <img
              src="/assets/images/banner3.png"
              alt="Banner 3"
              className="w-full h-56 object-cover rounded-xl flex-shrink-0 snap-center"
            />
          </div>
        </div>
      </section>

      {/* Separator Line */}
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-t border-gray-700 my-10" />
      </div>

      {/* Services Section */}
      <section className="py-12 mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold mb-8 text-white text-left">Services</h2>
        
        <div className="flex justify-start gap-6 flex-wrap">
          <ServiceCard 
            icon="🚀" 
            title="Tech Solutions" 
            text="Aoraa Ipsum dolot de atimi tuplecy" 
            color="orange" 
          />
          <ServiceCard 
            icon="🎓" 
            title="Training & Development" 
            text="Reren Ipsuner uncorting of tone cettiliny" 
            color="blue" 
          />
          <ServiceCard 
            icon="💡" 
            title="Research Innovation" 
            text="Aome ipsum dolor sir adjline un cuatiny" 
            color="green" 
          />
        </div>
      </section>
    </div>
  );
};

export default Home;