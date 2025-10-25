import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/images/Navkalpit_logo.png"
                alt="Menu Icon"
                className="h-6 w-6 text-white"
              />
              <div className="text-2xl font-bold">Navkalpit</div>
            </div>
            <p className="text-sm text-gray-500">
              Your partner for fast and reliable 3D printing and prototyping.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul className="space-y-3 text-gray-500">
              {/* <li>About Us</li> */}
              {/* <li>Services</li> */}
              {/* <li>Contact</li> */}
              <NavLink to="/aboutus">About Us</NavLink><br />
              <NavLink to="/services">Services</NavLink><br />
              <NavLink to="/contact">Contact</NavLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <ul className="space-y-3 text-gray-500">
              {/* <li>Instant Quote</li>
              <li>PCB Prototyping</li>
              <li>PCB Assembly</li>
              <li>Capabilities</li> */}
              {/* <NavLink>PCB Design</NavLink><br />
              <NavLink>PCB Assembly</NavLink><br />
              <NavLink>PCB Fabrication</NavLink><br /> */}
              <NavLink>3D Printer Solution</NavLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Support</h4>
            <ul className="space-y-3 text-gray-500">
              {/* <li>FAQ</li>
              <li>Shipping Policy</li>
              <li>Privacy Policy</li> */}
              <NavLink to="/faq">FAQ</NavLink><br />
              <NavLink>Shipping Policy</NavLink><br />
              <NavLink>Privacy Policy</NavLink><br />
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex items-center gap-4 text-gray-500">
              <a href="https://twitter.com/YourAppUsername" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-blue-400 transition-colors duration-200" />
              </a>
              <a href="https://facebook.com/YourAppUsername" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-blue-600 transition-colors duration-200" />
              </a>
              <a href="https://instagram.com/YourAppUsername" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-500 transition-colors duration-200" />
              </a>
              <a href="https://linkedin.com/in/YourAppUsername" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-blue-700 transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Navkalpit Manufacturing. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
