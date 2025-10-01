import React from "react";
import team1 from "/assets/images/banner1.png";
import team2 from "/assets/images/banner2.png";
import team3 from "/assets/images/banner3.png";

const AboutUs = () => {
  return (
    <div className="bg-[#121212] text-[#E0E0E0] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#121212] via-[#1F2937] to-[#121212] py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF6F00] mb-4">
          About Navkalpit
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-[#E0E0E0]">
          We are dedicated to providing high-quality computer hardware solutions,
          custom PC builds, and expert services to enhance your technology experience.
        </p>
        <button className="mt-8 px-8 py-3 bg-[#FF6F00] hover:bg-[#e65c00] rounded-xl font-semibold text-white text-lg transition">
          Contact Us
        </button>
      </section>

      {/* Company Story Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FF6F00] mb-4">
            Our Story
          </h2>
          <p className="text-[#E0E0E0] mb-4">
            Navkalpit started with a passion for technology and a mission to bring
            high-performance computer hardware and custom solutions to enthusiasts,
            professionals, and gamers alike.
          </p>
          <p className="text-[#E0E0E0]">
            Over the years, we have grown into a trusted provider of quality components,
            expert builds, and technical support. Our goal is to empower every user
            with the perfect system.
          </p>
        </div>
        <img
          src="/assets/images/about-hero.png"
          alt="About Us"
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#1F2937] py-16 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#FF6F00] mb-10">
          Our Mission & Vision
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-[#121212] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-3 text-white">Mission</h3>
            <p className="text-[#E0E0E0]">
              To provide top-quality hardware and personalized solutions that enhance
              user experience and empower technology enthusiasts worldwide.
            </p>
          </div>
          <div className="p-6 bg-[#121212] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-3 text-white">Vision</h3>
            <p className="text-[#E0E0E0]">
              To become a leading provider of innovative, high-performance computer
              solutions recognized for reliability, expertise, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#FF6F00] mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[team1, team2, team3].map((member, idx) => (
            <div
              key={idx}
              className="bg-[#1F2937] rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member}
                alt={`Team member ${idx + 1}`}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white mb-2">John Doe</h3>
              <p className="text-[#E0E0E0]">Lead Hardware Engineer</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
