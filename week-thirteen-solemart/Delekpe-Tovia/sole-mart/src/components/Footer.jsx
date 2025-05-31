import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Copyright */}
        <div>
          <p className="mb-4">&copy; 2024 Lestary UI Kit. <br /> All rights reserved</p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><i className="fab fa-instagram text-white hover:text-gray-400"></i></a>
            <a href="#"><i className="fab fa-twitter text-white hover:text-gray-400"></i></a>
            <a href="#"><i className="fab fa-youtube text-white hover:text-gray-400"></i></a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help center</a></li>
            <li><a href="#" className="hover:underline">Terms of service</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
            <li><a href="#" className="hover:underline">Status</a></li>
          </ul>
        </div>

        {/* Stay up to date */}
        <div>
          <h3 className="font-semibold mb-4">Stay up to date</h3>
          <form>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
