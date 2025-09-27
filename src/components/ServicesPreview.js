import React from 'react';

const ServicesPreview = ({ showPage }) => {
  return (
  <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3b82f6" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,192C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out animate-slide-up delay-0">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6 leading-tight">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">We offer comprehensive data analytics solutions tailored specifically for IT companies</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Business Intelligence Card */}
          <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br from-blue-100/60 to-indigo-100/60 smooth-hover border-t-4 border-blue-600 opacity-0 translate-y-5 transition-all duration-700 ease-out delay-100">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 hover:scale-110">
              <i className="fas fa-chart-bar text-2xl text-blue-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Business Intelligence</h3>
            <p className="text-gray-600 mb-5">Transform raw data into actionable insights with interactive dashboards and reports that drive strategic decisions.</p>
            <button className="text-blue-500 font-semibold hover:text-blue-600 hover:underline transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300" onClick={() => showPage('services')}>Learn More <i className="fas fa-arrow-right ml-1"></i></button>
          </div>
          {/* Predictive Analytics Card */}
          <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br from-blue-100/60 to-indigo-100/60 smooth-hover border-t-4 border-blue-600 opacity-0 translate-y-5 transition-all duration-700 ease-out delay-200">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 hover:scale-110">
              <i className="fas fa-brain text-2xl text-blue-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Predictive Analytics</h3>
            <p className="text-gray-600 mb-5">Leverage machine learning algorithms to forecast trends, identify opportunities, and mitigate risks.</p>
            <button className="text-blue-500 font-semibold hover:text-blue-600 hover:underline transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300" onClick={() => showPage('services')}>Learn More <i className="fas fa-arrow-right ml-1"></i></button>
          </div>
          {/* Performance Analytics Card */}
          <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br from-blue-100/60 to-indigo-100/60 smooth-hover border-t-4 border-blue-600 opacity-0 translate-y-5 transition-all duration-700 ease-out delay-300">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 hover:scale-110">
              <i className="fas fa-tachometer-alt text-2xl text-blue-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Performance Analytics</h3>
            <p className="text-gray-600 mb-5">Monitor and optimize your IT infrastructure, applications, and business processes with real-time analytics.</p>
            <button className="text-blue-500 font-semibold hover:text-blue-600 hover:underline smooth-hover focus:outline-none focus:ring-2 focus:ring-blue-300" onClick={() => showPage('services')}>Learn More <i className="fas fa-arrow-right ml-1"></i></button>
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-blue-800 hover:to-blue-900 smooth-hover focus:outline-none focus:ring-2 focus:ring-blue-400 ring-offset-2 flex items-center justify-center gap-2 mx-auto" onClick={() => showPage('services')}>
            <i className="fas fa-arrow-right"></i>
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
