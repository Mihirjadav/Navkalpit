import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#00c4ff] rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M3 12h18"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-2xl font-bold">Navkalpit</div>
            </div>
            <p className="text-sm text-gray-500">
              Your partner for fast and reliable PCB prototyping and
              manufacturing.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-500">
              <li>About Us</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-500">
              <li>Instant Quote</li>
              <li>PCB Prototyping</li>
              <li>PCB Assembly</li>
              <li>Capabilities</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-gray-500">
              <li>FAQ</li>
              <li>Shipping Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex items-center gap-4 text-gray-500">
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
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
