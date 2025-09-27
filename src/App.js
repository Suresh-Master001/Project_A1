import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesPreview from './components/ServicesPreview';
import AboutPreview from './components/AboutPreview';
import CTA from './components/CTA';
import Services from './components/Services';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const showPage = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        currentPage={currentPage} 
        showPage={showPage} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main>
        {/* Apply 10% gap on left and right for all main pages */}
        {currentPage === 'home' && (
          <div className="w-full px-[10%]">
            <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex flex-col justify-center items-center py-20">
              <section className="w-full max-w-5xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-12 mb-12 flex flex-col items-center animate-fade-in">
                <h1 className="text-5xl font-extrabold text-blue-900 mb-6 text-center drop-shadow-lg">Transform Your IT Business with Data-Driven Insights</h1>
                <p className="text-xl text-gray-700 mb-8 text-center max-w-2xl">We provide cutting-edge data analytics solutions to help IT companies make informed decisions, optimize operations, and drive growth.</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-blue-800 hover:to-purple-800 smooth-hover" onClick={() => showPage('services')}>
                    Our Services
                  </button>
                  <button className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-100 smooth-hover" onClick={() => showPage('contact')}>
                    Get Started
                  </button>
                </div>
              </section>
              <section className="w-full max-w-5xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-12 mb-12 animate-fade-in">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Our Services</h2>
                  <p className="text-lg text-gray-700 max-w-2xl mx-auto">We offer comprehensive data analytics solutions tailored specifically for IT companies</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl shadow-md p-8 text-center border-t-4 border-blue-500 hover:shadow-xl smooth-hover animate-fade-in">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <i className="fas fa-chart-bar text-3xl text-blue-500"></i>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Business Intelligence</h3>
                    <p className="text-gray-600 mb-4">Transform raw data into actionable insights with interactive dashboards and reports that drive strategic decisions.</p>
                    <button className="text-blue-600 font-semibold hover:underline" onClick={() => showPage('services')}>Learn More <i className="fas fa-arrow-right ml-1"></i></button>
                  </div>
                  <div className="bg-white rounded-2xl shadow-md p-8 text-center border-t-4 border-blue-500 hover:shadow-xl smooth-hover animate-fade-in delay-100">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <i className="fas fa-brain text-3xl text-blue-500"></i>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Predictive Analytics</h3>
                    <p className="text-gray-600 mb-4">Leverage machine learning algorithms to forecast trends, identify opportunities, and mitigate risks.</p>
                    <button className="text-blue-600 font-semibold hover:underline" onClick={() => showPage('services')}>Learn More <i className="fas fa-arrow-right ml-1"></i></button>
                  </div>
                  <div className="bg-white rounded-2xl shadow-md p-8 text-center border-t-4 border-blue-500 hover:shadow-xl smooth-hover animate-fade-in delay-200">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <i className="fas fa-tachometer-alt text-3xl text-blue-500"></i>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Performance Analytics</h3>
                    <p className="text-gray-600 mb-4">Monitor and optimize your IT infrastructure, applications, and business processes with real-time analytics.</p>
                    <button className="text-blue-600 font-semibold hover:underline smooth-hover" onClick={() => showPage('services')}>Learn More <i className="fas fa-arrow-right ml-1"></i></button>
                  </div>
                </div>
                <div className="text-center mt-10 animate-fade-in">
                  <button className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-blue-800 hover:to-purple-800 smooth-hover" onClick={() => showPage('services')}>
                    View All Services
                  </button>
                </div>
              </section>
            </div>
          </div>
        )}
        
        {currentPage === 'services' && (
          <div className="w-full" style={{paddingLeft: '10%', paddingRight: '10%'}}>
            <Services />
          </div>
        )}
        {currentPage === 'about' && (
          <div className="w-full" style={{paddingLeft: '10%', paddingRight: '10%'}}>
            <About />
          </div>
        )}
        {currentPage === 'case-studies' && <CaseStudies />}
        {currentPage === 'contact' && (
          <div className="w-full" style={{paddingLeft: '10%', paddingRight: '10%'}}>
            <Contact />
          </div>
        )}
        {currentPage === 'signup' && (
          <div className="w-full" style={{paddingLeft: '10%', paddingRight: '10%'}}>
            <Signup showPage={showPage} />
          </div>
        )}
        {currentPage === 'login' && (
          <div className="w-full" style={{paddingLeft: '10%', paddingRight: '10%'}}>
            <Login showPage={showPage} />
          </div>
        )}
        
      </main>
      <Footer showPage={showPage} />
    </div>
  );
}

export default App;
