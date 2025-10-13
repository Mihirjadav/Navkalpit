import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { GiCircuitry, GiSolderingIron } from "react-icons/gi";
import { SiAltiumdesigner } from "react-icons/si";

// Images are stored in public/assets/images
const pcbProtoImg = "/assets/images/PCBM.webp";
const pcbAssemblyImg = "/assets/images/PCB.webp";
const advancedImg = "/assets/images/febrication.webp";

const Services = () => {
  return (
    <div>
      {/* Header */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          Our Manufacturing Services
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          From single prototypes to full production runs, we provide a
          comprehensive suite of services to bring your electronic designs to
          life.
        </p>
      </section>

      {/* PCB Design (text left, image right) */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-brand text-white">
              <GiCircuitry />
            </span>{" "}
            PCB Design
          </h3>
          <p className="text-gray-700 mb-4">
            Fast, affordable, and high-quality PCB prototypes. We help you test
            your designs quickly with a wide range of materials and finishes.
          </p>
          <PrimaryButton className="px-4 py-2 rounded-md">
            Request a Quote
          </PrimaryButton>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={pcbProtoImg}
            alt="PCB Prototyping"
            className="w-full md:w-4/5 rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* PCB Assembly (image left, text right) */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 flex justify-center md:justify-start">
          <img
            src={pcbAssemblyImg}
            alt="PCB Assembly"
            className="w-full md:w-4/5 rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-semibold flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-brand text-white">
              <GiSolderingIron />
            </span>{" "}
            PCB Assembly (PCBA)
          </h3>
          <p className="text-gray-700 mb-4">
            Full turnkey and consigned assembly services. Our automated process
            ensures precision for SMT and through-hole components.
          </p>
          <PrimaryButton className="px-4 py-2 rounded-md">
            Request a Quote
          </PrimaryButton>
        </div>
      </section>

      {/* PCB Fabrication (text left, image right) */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-brand text-white">
              <SiAltiumdesigner />
            </span>{" "}
            PCB Fabrication
          </h3>
          <p className="text-gray-700 mb-4">
            We handle complex requirements including multi-layer boards,
            flexible PCBs, rigid-flex, and advanced materials.
          </p>
          <PrimaryButton className="px-4 py-2 rounded-md">
            Request a Quote
          </PrimaryButton>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={advancedImg}
            alt="Advanced Capabilities"
            className="w-full md:w-4/5 rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* 3D Printer Solution (image left, text right) */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 flex justify-center md:justify-start">
          <img
            src={pcbAssemblyImg}
            alt="PCB Assembly"
            className="w-full md:w-4/5 rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-semibold flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-brand text-white">
              <GiSolderingIron />
            </span>{" "}
            3D Printer Solution
          </h3>
          <p className="text-gray-700 mb-4">
            Full turnkey and consigned assembly services. Our automated process
            ensures precision for SMT and through-hole components.
          </p>
          <PrimaryButton className="px-4 py-2 rounded-md">
            Request a Quote
          </PrimaryButton>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-3 card-title">
          Ready to Fabricate?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-500">
          Our intuitive online platform makes it easy to upload your files and
          configure your boards. Get an instant quote today.
        </p>
        <PrimaryButton className="px-5 py-2 rounded-md font-semibold">
          Get an Instant Quote
        </PrimaryButton>
      </section>
    </div>
  );
};

export default Services;
