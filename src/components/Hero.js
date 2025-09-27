import React from 'react';

const Hero = ({ showPage }) => {
  return (
    <section className="bg-gradient-to-br from-slate-700 to-slate-600 text-white pt-48 pb-24 text-center relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,192C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
  <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight drop-shadow-lg text-blue-200 opacity-0 translate-y-10 transition-all duration-700 ease-out animate-slide-up delay-100">Transform Your IT Business with Data-Driven Insights</h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out animate-slide-up delay-200">We provide cutting-edge data analytics solutions to help IT companies make informed decisions, optimize operations, and drive growth.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out animate-slide-up delay-300">
          <button 
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-offset-2 w-full sm:w-auto flex items-center justify-center gap-2"
            onClick={() => showPage('services')}
          >
            <i className="fas fa-chart-bar"></i>
            Our Services
          </button>
          <button 
            className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-indigo-700 hover:to-purple-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 ring-offset-2 w-full sm:w-auto flex items-center justify-center gap-2"
            onClick={() => showPage('contact')}
          >
            <i className="fas fa-rocket"></i>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
