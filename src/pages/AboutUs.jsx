import React from "react";
import team1 from "/assets/images/user.jpg";
import team2 from "/assets/images/CEO.jpg";
import team3 from "/assets/images/founder.jpg";
import aboutImage from "/assets/images/AboutUs.webp";
import { FiTarget, FiAward, FiUsers } from "react-icons/fi";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sneha Sigh",
      position: "Lead Hardware Engineer",
      image: team1,
    },
    {
      name: "Dipti Patel",
      position: "Chief Executive Officer (CEO)",
      image: team2,
    },
    {
      name: "Krishna Desai",
      position: "Founder & Visionary",
      image: team3,
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          About Navkalpit
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl md:text-2xl">
          We are engineers at heart, dedicated to empowering innovation by
          providing fast, reliable, and high-quality PCB manufacturing services.
        </p>
      </section>

      {/* Origin / Two-column story */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Origin</h2>
          <p className="text-gray-700 mb-4">
            Founded by a team of electronics engineers, Navkalpit was born from
            a firsthand understanding of the challenges in hardware development.
            Long lead times, inconsistent quality, and high costs were constant
            hurdles. We knew there had to be a better way.
          </p>
          <p className="text-gray-700 mb-4">
            We built Navkalpit to be the service we always wished we had: a
            platform that combines cutting-edge technology with a passion for
            customer success. Our goal is to remove the friction from PCB
            manufacturing, allowing innovators to focus on what they do
            best—creating the future.
          </p>
          <p className="text-gray-700">
            Today, we serve thousands of engineers, startups, and hobbyists
            worldwide, but our mission remains unchanged: to make custom circuit
            board manufacturing accessible, fast, and flawless.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={aboutImage}
            alt="Server racks and wiring"
            className="w-full md:w-4/5 rounded-2xl shadow-xl object-cover"
          />
        </div>
      </section>

      {/* Three feature icons row */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-[#00c4ff] text-white rounded-full flex items-center justify-center mb-4">
                <FiTarget className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">Our Mission</h4>
              <p className="text-gray-600">
                To accelerate innovation by providing the fastest, most
                reliable, and highest quality PCB prototyping and assembly
                services for engineers and designers.
              </p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-[#00c4ff] text-white rounded-full flex items-center justify-center mb-4">
                <FiAward className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">Our Principles</h4>
              <p className="text-gray-600">
                We are driven by a commitment to quality, speed, and
                customer-centricity. We invest in technology and empower our
                team to deliver excellence on every order.
              </p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-[#00c4ff] text-white rounded-full flex items-center justify-center mb-4">
                <FiUsers className="h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">Our Team</h4>
              <p className="text-gray-600">
                A passionate group of engineers, manufacturing experts, and
                support specialists dedicated to ensuring your project's success
                from quote to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Build Together</h3>
          <p className="text-gray-600 mb-8">
            Ready to bring your electronic designs to life? Get an instant quote
            for your PCB project.
          </p>
          <button className="px-6 py-2 bg-[#26285b] text-white rounded-md font-semibold">
            Get Instant Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
