import React from 'react';

const CaseStudies = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-700 to-slate-600 text-white pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <ul className="flex justify-center text-sm">
            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li className="mx-2">/</li>
            <li>Case Studies</li>
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-700 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See how we've helped IT companies achieve remarkable results with our data analytics solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                Infrastructure Optimization
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-700 mb-3">Reducing Operational Costs by 30%</h3>
                <p className="text-gray-600 mb-4">How we helped a SaaS company optimize their infrastructure and reduce costs through performance analytics.</p>
                <a href="#" className="text-blue-500 font-semibold hover:text-blue-600">Read Full Case Study <i className="fas fa-arrow-right ml-1"></i></a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-red-500 flex items-center justify-center text-white font-bold text-lg">
                Customer Behavior Analysis
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-700 mb-3">Increasing Conversion Rates by 45%</h3>
                <p className="text-gray-600 mb-4">Developing a comprehensive user analytics platform that transformed customer engagement.</p>
                <a href="#" className="text-blue-500 font-semibold hover:text-blue-600">Read Full Case Study <i className="fas fa-arrow-right ml-1"></i></a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-green-500 flex items-center justify-center text-white font-bold text-lg">
                Security Threat Detection
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-700 mb-3">Reducing Security Incidents by 70%</h3>
                <p className="text-gray-600 mb-4">Implementing a real-time threat detection system for a financial technology company.</p>
                <a href="#" className="text-blue-500 font-semibold hover:text-blue-600">Read Full Case Study <i className="fas fa-arrow-right ml-1"></i></a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-yellow-500 flex items-center justify-center text-white font-bold text-lg">
                Cloud Migration Analytics
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-700 mb-3">Accelerating Cloud Migration by 50%</h3>
                <p className="text-gray-600 mb-4">How analytics helped an enterprise IT company streamline their cloud migration process.</p>
                <a href="#" className="text-blue-500 font-semibold hover:text-blue-600">Read Full Case Study <i className="fas fa-arrow-right ml-1"></i></a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
                Predictive Maintenance
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-700 mb-3">Reducing Downtime by 60%</h3>
                <p className="text-gray-600 mb-4">Implementing predictive maintenance analytics for a large IT infrastructure provider.</p>
                <a href="#" className="text-blue-500 font-semibold hover:text-blue-600">Read Full Case Study <i className="fas fa-arrow-right ml-1"></i></a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-teal-500 flex items-center justify-center text-white font-bold text-lg">
                Data-Driven Decision Making
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-700 mb-3">Improving Decision Accuracy by 75%</h3>
                <p className="text-gray-600 mb-4">How business intelligence transformed strategic planning for a technology consulting firm.</p>
                <a href="#" className="text-blue-500 font-semibold hover:text-blue-600">Read Full Case Study <i className="fas fa-arrow-right ml-1"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-5">Ready to Write Your Success Story?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">Contact us today to discuss how our data analytics solutions can help your IT company achieve similar results.</p>
          <a href="#" className="bg-red-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-600 transition-colors">Start Your Journey</a>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
