import React from 'react';

const Services = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 px-2 sm:px-8 md:px-16 lg:px-32 py-6 sm:py-12 md:py-20">
    <div className="w-full max-w-6xl bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 border border-blue-300 relative mx-auto flex flex-col gap-8">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-t-3xl"></div>
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold text-blue-900 mb-6 drop-shadow-lg">Comprehensive Data Analytics Solutions</h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">We offer a full range of data analytics services designed specifically for IT companies</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Business Intelligence Card */}
  <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center border-t-4 border-blue-600 hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br from-blue-100/60 to-indigo-100/60 smooth-hover">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-chart-bar text-4xl text-blue-500"></i>
          </div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Business Intelligence</h3>
          <p className="text-gray-600 mb-6">Transform raw data into actionable insights with interactive dashboards and reports that drive strategic decisions.</p>
          <ul className="text-left text-gray-600 mb-6 pl-4 list-disc">
            <li>Interactive Dashboards</li>
            <li>KPI Monitoring</li>
            <li>Data Visualization</li>
            <li>Report Automation</li>
          </ul>
        </div>
        {/* Predictive Analytics Card */}
  <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center border-t-4 border-indigo-600 hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br from-blue-100/60 to-indigo-100/60 smooth-hover">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-brain text-4xl text-indigo-500"></i>
          </div>
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">Predictive Analytics</h3>
          <p className="text-gray-600 mb-6">Leverage machine learning algorithms to forecast trends, identify opportunities, and mitigate risks.</p>
          <ul className="text-left text-gray-600 mb-6 pl-4 list-disc">
            <li>Machine Learning Models</li>
            <li>Trend Forecasting</li>
            <li>Risk Assessment</li>
            <li>Predictive Maintenance</li>
          </ul>
        </div>
        {/* Performance Analytics Card */}
  <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center border-t-4 border-purple-600 hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br from-blue-100/60 to-indigo-100/60 smooth-hover">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-tachometer-alt text-4xl text-purple-500"></i>
          </div>
          <h3 className="text-2xl font-bold text-purple-900 mb-4">Performance Analytics</h3>
          <p className="text-gray-600 mb-6">Monitor and optimize your IT infrastructure, applications, and business processes with real-time analytics.</p>
          <ul className="text-left text-gray-600 mb-6 pl-4 list-disc">
            <li>Infrastructure Monitoring</li>
            <li>Application Performance</li>
            <li>Process Optimization</li>
            <li>Real-time Analytics</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-14">
  <button className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white px-12 py-5 rounded-2xl font-extrabold text-xl shadow-xl hover:from-blue-800 hover:to-purple-800 smooth-hover">Contact Us Now</button>
      </div>
    </div>
  </section>
);

export default Services;
