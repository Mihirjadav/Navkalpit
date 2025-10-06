import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section with background image */}
      <section
        className="w-full h-64 md:h-96 bg-center bg-cover flex items-center"
        style={{ backgroundImage: "url('/assets/images/contact.jpg')" }}
      >
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-6 py-14 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
              Contact Us
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Have a question about your order or our capabilities? We're here
              to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left - Contact Information */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              Our support team is available 24/7 to assist with your inquiries.
              Expect a response within a few hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow">
                  <FaPhoneAlt className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Sales & Support</h4>
                  <p className="text-gray-600">+1 (800) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow">
                  <FaEnvelope className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">support@navkalpit.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Headquarters</h4>
                  <p className="text-gray-600">
                    456 Tech Drive, Silicon Valley, CA 94043
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-7 flex justify-end">
            <div className="w-full max-w-lg bg-white border border-gray-100 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Send us a Message</h3>
              <p className="text-sm text-gray-500 mb-4">
                For technical questions, order status, or general inquiries.
              </p>

              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none"
                />
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24" />
    </div>
  );
};

export default Contact;
