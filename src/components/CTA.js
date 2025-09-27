import React from 'react';

const CTA = ({ showPage }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-5 opacity-0 translate-y-10 transition-all duration-700 ease-out animate-slide-up delay-100">Ready to Transform Your Business with Data?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out animate-slide-up delay-200">Contact us today for a free consultation and discover how our analytics solutions can drive your IT company's growth.</p>
        <button 
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 ring-offset-2 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          onClick={() => showPage('contact')}
        >
          Get Free Consultation
        </button>
      </div>
    </section>
  );
};

export default CTA;
