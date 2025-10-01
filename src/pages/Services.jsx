import React from "react";
import {
  FaDesktop,
  FaMicrochip,
  FaTools,
  FaGamepad,
  FaNetworkWired,
  FaServer,
  FaHdd,
  FaKeyboard,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaDesktop size={40} className="text-[#FF6F00]" />,
    title: "Custom PC Builds",
    description:
      "Tailored PC builds for gaming, content creation, and professional work.",
  },
  {
    id: 2,
    icon: <FaMicrochip size={40} className="text-[#FF6F00]" />,
    title: "Hardware Components",
    description:
      "High-quality CPUs, GPUs, RAM, SSDs, and more from top brands.",
  },
  {
    id: 3,
    icon: <FaTools size={40} className="text-[#FF6F00]" />,
    title: "PC Repair & Upgrade",
    description:
      "Expert repair and upgrade services to boost your system's performance.",
  },
  {
    id: 4,
    icon: <FaGamepad size={40} className="text-[#FF6F00]" />,
    title: "Gaming Setup Consultation",
    description:
      "Get the best advice for your ultimate gaming setup and accessories.",
  },
  {
    id: 5,
    icon: <FaNetworkWired size={40} className="text-[#FF6F00]" />,
    title: "Networking & Routers",
    description:
      "Setup high-speed wired and wireless networks for home or office.",
  },
  {
    id: 6,
    icon: <FaServer size={40} className="text-[#FF6F00]" />,
    title: "Server & Storage Solutions",
    description:
      "Reliable server hardware and storage solutions for businesses.",
  },
  {
    id: 7,
    icon: <FaHdd size={40} className="text-[#FF6F00]" />,
    title: "Data Recovery & Backup",
    description:
      "Recover lost data and implement backup solutions for safety.",
  },
  {
    id: 8,
    icon: <FaKeyboard size={40} className="text-[#FF6F00]" />,
    title: "Peripheral Setup",
    description:
      "Setup and optimize monitors, keyboards, mice, and other peripherals.",
  },
];

const Services = () => {
  return (
    <div className="bg-[#121212] min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-[#121212] via-[#1F2937] to-[#121212]">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#FF6F00] mb-4">
          Our Services
        </h1>
        <p className="text-[#E0E0E0] text-lg sm:text-xl max-w-2xl mx-auto">
          Explore our wide range of computer hardware services to keep your
          system running efficiently and optimize your tech experience.
        </p>
      </section>

      {/* Services Cards */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#1F2937] rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-[#E0E0E0] mb-4">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
