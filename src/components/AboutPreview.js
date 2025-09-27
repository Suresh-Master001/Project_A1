import React from 'react';

const AboutPreview = ({ showPage }) => {
  return (
  <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-700 mb-5">Why Choose DataInsight Analytics?</h2>
            <p className="text-gray-600 mb-5">With over a decade of experience in data analytics for the IT sector, we have helped hundreds of companies unlock the true potential of their data.</p>
            <p className="text-gray-600 mb-8">Our team of data scientists, analysts, and IT experts work together to deliver solutions that are not only technically advanced but also business-focused.</p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl shadow-lg">
                <div className="text-4xl font-extrabold text-blue-700 mb-2">150+</div>
                <div className="text-gray-700 text-base">IT Clients Served</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl shadow-lg">
                <div className="text-4xl font-extrabold text-blue-700 mb-2">98%</div>
                <div className="text-gray-700 text-base">Client Satisfaction</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl shadow-lg">
                <div className="text-4xl font-extrabold text-blue-700 mb-2">40%</div>
                <div className="text-gray-700 text-base">Avg. Cost Reduction</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl shadow-lg">
                <div className="text-4xl font-extrabold text-blue-700 mb-2">24/7</div>
                <div className="text-gray-700 text-base">Support Available</div>
              </div>
            </div>
            
            <a href="#" className="bg-blue-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors" onClick={() => showPage('about')}>Learn More About Us</a>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-slate-700 rounded-lg p-12 text-white text-center">
            <div className="text-xl font-semibold">Data-Driven Results for IT Businesses</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
