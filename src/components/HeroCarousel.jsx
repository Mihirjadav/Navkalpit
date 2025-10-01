import { useState, useEffect } from "react";

// Replace these paths with your actual images
const slides = [
  {
    id: 1,
    img: "/assets/images/banner1.png",
    title: "High Performance Gaming PCs",
    subtitle: "Experience next-level speed and graphics",
  },
  {
    id: 2,
    img: "/assets/images/banner2.png",
    title: "Latest Hardware Components",
    subtitle: "Upgrade your system with top brands",
  },
  {
    id: 3,
    img: "/assets/images/banner3.png",
    title: "Custom PC Builds",
    subtitle: "Tailored solutions for gamers & creators",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-snug">
              {slide.title}
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#E0E0E0] max-w-2xl">
              {slide.subtitle}
            </p>
            <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-[#FF6F00] hover:bg-[#e65c00] rounded-xl font-semibold text-white text-sm sm:text-base md:text-lg">
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
              idx === current ? "bg-[#FF6F00]" : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
