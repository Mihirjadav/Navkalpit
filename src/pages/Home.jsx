// src/pages/Home.jsx
import HeroCarousel from "../components/HeroCarousel";
import PrimaryButton from "../components/PrimaryButton";
import ProductCard from "../components/ProductCard";
import { GiClockwork, GiLabCoat, GiCircuitry } from "react-icons/gi";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel />

      {/* Why Choose Navkalpit Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center card-title mb-6">
            Why Choose Navkalpit?
          </h2>
          <p className="text-center text-gray-500 max-w-3xl mx-auto mb-12">
            We are committed to providing engineers and hobbyists with top-tier
            circuit boards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold card-title mb-3 flex items-center gap-2">
                <GiClockwork className="h-6 w-6 text-blue-600" />
                Fast Turnaround
              </h3>
              <p className="text-gray-500">
                Get your 3D Print in as little as 24 hours. We optimize
                our process for speed and efficiency.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold card-title mb-3 flex items-center gap-2">
                <GiLabCoat className="h-6 w-6 text-blue-600" />
                Guaranteed Quality
              </h3>
              <p className="text-gray-700">
                With state-of-the-art equipment and rigorous testing, we ensure
                every board meets IPC standards.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold card-title mb-3 flex items-center gap-2">
                <GiCircuitry className="h-6 w-6 text-blue-600" />
                Advanced Capabilities
              </h3>
              <p className="text-gray-700">
                From multi-layer boards to flexible PCBs, we have the technology
                to handle your most complex designs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Core Services Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center card-title mb-4">
          Our Core Services
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          From simple prototypes to full production runs and assembly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold card-title mb-3 flex items-center gap-2">
              <GiClockwork className="h-6 w-6 text-blue-600" />
              3D Printing 
            </h3>
            <p className="text-gray-700 mb-6">
              Quickly validate your designs with our high-quality prototyping
              service. We support a wide range of materials and specifications
              to bring your ideas to life.
            </p>
          </div>

          <div className="card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold card-title mb-3 flex items-center gap-2">
              <GiCircuitry className="h-6 w-6 text-blue-600" />
              Developerment
            </h3>
            <p className="text-gray-700 mb-6">
              Our full-turnkey assembly service handles everything from
              component sourcing to final assembly, ensuring a seamless
              production process.
            </p>
          </div>
        </div>
      </section>
      {/* Ready to Start Your Project Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="card p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold card-title mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Upload your Gerber files and get an instant quote. Our team is ready
            to assist you.
          </p>

          <form className="flex flex-col md:flex-row items-center justify-center gap-4">
            <label className="w-full md:w-2/3 bg-white border border-gray-300 rounded-md px-4 py-2 text-left">
              <input
                type="file"
                accept=".zip,.rar,.gerber,.gbr,.zip"
                className="w-full"
              />
            </label>
            <PrimaryButton
              type="button"
              className="inline-block px-6 py-2 rounded-md font-semibold"
            >
              Upload Files Now
            </PrimaryButton>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
