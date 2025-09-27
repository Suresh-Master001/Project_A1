import React from 'react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-10 mt-20 shadow-2xl animate-fade-in border-t-2 border-blue-800">
  <div className="container mx-auto px-2 sm:px-8 md:px-16 lg:px-32 flex flex-col items-center justify-center gap-4 sm:gap-8 max-w-7xl p-0 text-center">
      <div className="flex items-center gap-3">
        <span className="font-extrabold text-2xl tracking-wide bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">DataInsight Analytics</span>
      </div>
      <div className="flex gap-6">
  <a href="#" className="text-white font-semibold smooth-hover">Home</a>
  <a href="#" className="text-white font-semibold smooth-hover">Services</a>
  <a href="#" className="text-white font-semibold smooth-hover">About</a>
  <a href="#" className="text-white font-semibold smooth-hover">Contact</a>
      </div>
      <div className="flex gap-4">
  <a href="#" className="text-white smooth-hover"><i className="fab fa-linkedin-in"></i></a>
  <a href="#" className="text-white smooth-hover"><i className="fab fa-twitter"></i></a>
  <a href="#" className="text-white smooth-hover"><i className="fab fa-facebook-f"></i></a>
  <a href="#" className="text-white smooth-hover"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
    <div className="text-center text-indigo-300 mt-8 text-sm tracking-wide">&copy; 2025 DataInsight Analytics. All rights reserved.</div>
  </footer>
);

export default Footer;
