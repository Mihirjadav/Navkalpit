import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#121212] text-[#E0E0E0] min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-[#121212] via-[#1F2937] to-[#121212]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF6F00] mb-4">
          Get in Touch
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          Have questions or need support? Reach out to us and we’ll get back to
          you as soon as possible.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-[#1F2937] rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#FF6F00] mb-6">
            Contact Form
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded-lg bg-[#121212] text-white border border-[#4682B4] focus:outline-none focus:border-[#FF6F00]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-lg bg-[#121212] text-white border border-[#4682B4] focus:outline-none focus:border-[#FF6F00]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="px-4 py-2 rounded-lg bg-[#121212] text-white border border-[#4682B4] focus:outline-none focus:border-[#FF6F00]"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="px-4 py-2 rounded-lg bg-[#121212] text-white border border-[#4682B4] focus:outline-none focus:border-[#FF6F00]"
            ></textarea>
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-[#FF6F00] hover:bg-[#e65c00] rounded-xl font-semibold text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-8">
          <div className="bg-[#1F2937] rounded-2xl p-6 shadow-lg flex items-start gap-4">
            <FaPhoneAlt className="text-[#FF6F00] mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold text-white">Phone</h3>
              <p>+91 99792 71956</p>
            </div>
          </div>
          <div className="bg-[#1F2937] rounded-2xl p-6 shadow-lg flex items-start gap-4">
            <FaEnvelope className="text-[#FF6F00] mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold text-white">Email</h3>
              <p>support@navkalpit.com</p>
            </div>
          </div>
          <div className="bg-[#1F2937] rounded-2xl p-6 shadow-lg flex items-start gap-4">
            <FaMapMarkerAlt className="text-[#FF6F00] mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold text-white">Address</h3>
              <p>Ahmedabad, Gujrat, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#FF6F00] mb-6 text-center">
          Our Location
        </h2>
        <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
          {/* Replace with Google Maps iframe if needed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842920963!2d72.41492881144384!3d23.020474101422135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1759305257381!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            title="Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
