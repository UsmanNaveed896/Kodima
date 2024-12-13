import React from "react";
import Img from '../../assets/Frame.png'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-wrap items-center md:justify-between justify-center border-b border-gray-700 pb-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 jus">
            <img
              src={Img}
              alt="Kadima Logo"
              className=""
            />
            
          </div>

          {/* Get Started Button */}
          <div className="flex items-center space-x-4 mt-6 md:mt-0">
            <p className="text-sm name">Ready to get started?</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg">
              Get Started
            </button>
          </div>
        </div>



        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-lg focus:outline-none"
              />
              <button className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-r-lg">
                →
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2 text-center">
            <h3 className="text-lg font-semibold mb-4">Home</h3>
            <a href="#" className="hover:text-orange-500">About Us</a>
            <a href="#" className="hover:text-orange-500">Programs</a>
            <a href="#" className="hover:text-orange-500">Get Involved</a>
            <a href="#" className="hover:text-orange-500">Contact Us</a>
          </div>

          {/* Help Links */}
          <div className="flex flex-col space-y-2 text-center">
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <a href="#" className="hover:text-orange-500">FAQs</a>
            <a href="#" className="hover:text-orange-500">Contact Us</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center pt-6 border-t border-gray-700">
          <div className="text-sm space-x-4">
            <a href="#" className="hover:text-orange-500">Terms & Conditions</a>
            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-orange-500 hover:text-orange-600">
            <FaFacebookF />
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-600">
            <FaTwitter />
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-600">
            <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
