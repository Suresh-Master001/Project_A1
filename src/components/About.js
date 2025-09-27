import React from 'react';

const About = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 px-2 sm:px-8 md:px-16 lg:px-32 py-6 sm:py-12 md:py-24">
  <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 w-full max-w-5xl border border-blue-300 relative mx-auto flex flex-col gap-8">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-t-3xl"></div>
      <h2 className="text-5xl font-extrabold text-blue-900 mb-10 text-center drop-shadow-lg">Our Story</h2>
      <p className="mb-8 text-gray-700 text-xl text-center">Founded in 2010, DataInsight Analytics has been at the forefront of data analytics solutions for the IT industry. Our journey began with a simple mission: to help IT companies harness the power of their data to drive growth and innovation.</p>
      <p className="mb-8 text-gray-700 text-xl text-center">Over the years, we've grown into a trusted partner for over 150 IT companies, delivering insights that have helped our clients reduce costs, improve efficiency, and make data-driven decisions.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        <div className="bg-blue-100/80 rounded-xl p-10 text-center shadow-lg">
          <span className="block text-3xl font-extrabold text-blue-700 mb-4">Our Mission</span>
          <p className="text-gray-700 text-lg">To empower IT companies with actionable insights through cutting-edge data analytics, enabling them to optimize operations, reduce costs, and drive innovation.</p>
        </div>
        <div className="bg-indigo-100/80 rounded-xl p-10 text-center shadow-lg">
          <span className="block text-3xl font-extrabold text-indigo-700 mb-4">Our Vision</span>
          <p className="text-gray-700 text-lg">To be the leading data analytics provider for the IT industry, recognized for our innovative solutions and exceptional client success.</p>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-extrabold text-blue-900 mb-8">Meet the Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Team Member Card 1 */}
          <div className="bg-white/90 rounded-xl shadow-xl p-8 text-center">
            <div className="h-24 w-full flex items-center justify-center bg-blue-500 rounded-lg mb-6">
              <i className="fas fa-user text-4xl text-white"></i>
            </div>
            <h4 className="font-bold text-blue-900 mb-2 text-xl">Sarah Johnson</h4>
            <div className="text-blue-700 font-semibold mb-2">Chief Data Scientist</div>
            <p className="text-gray-600">10+ years of experience in machine learning and predictive analytics.</p>
          </div>
          {/* Team Member Card 2 */}
          <div className="bg-white/90 rounded-xl shadow-xl p-8 text-center">
            <div className="h-24 w-full flex items-center justify-center bg-red-500 rounded-lg mb-6">
              <i className="fas fa-user text-4xl text-white"></i>
            </div>
            <h4 className="font-bold text-blue-900 mb-2 text-xl">Michael Chen</h4>
            <div className="text-blue-700 font-semibold mb-2">Head of Business Intelligence</div>
            <p className="text-gray-600">Expert in data visualization and dashboard development.</p>
          </div>
          {/* Team Member Card 3 */}
          <div className="bg-white/90 rounded-xl shadow-xl p-8 text-center">
            <div className="h-24 w-full flex items-center justify-center bg-green-500 rounded-lg mb-6">
              <i className="fas fa-user text-4xl text-white"></i>
            </div>
            <h4 className="font-bold text-blue-900 mb-2 text-xl">Emily Rodriguez</h4>
            <div className="text-blue-700 font-semibold mb-2">Senior Data Analyst</div>
            <p className="text-gray-600">Specializes in performance analytics and optimization.</p>
          </div>
          {/* Team Member Card 4 */}
          <div className="bg-white/90 rounded-xl shadow-xl p-8 text-center">
            <div className="h-24 w-full flex items-center justify-center bg-yellow-500 rounded-lg mb-6">
              <i className="fas fa-user text-4xl text-white"></i>
            </div>
            <h4 className="font-bold text-blue-900 mb-2 text-xl">David Kim</h4>
            <div className="text-blue-700 font-semibold mb-2">Cloud Analytics Architect</div>
            <p className="text-gray-600">Cloud infrastructure and scalable analytics solutions expert.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
