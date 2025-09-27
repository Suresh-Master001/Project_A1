import React from 'react';

const Header = ({ currentPage, showPage, mobileMenuOpen, setMobileMenuOpen }) => (
  <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white shadow-2xl fixed w-full z-50 animate-fade-in border-b-2 border-blue-800 backdrop-blur-xl bg-opacity-80 relative">
  <nav className="w-full py-3 flex justify-between items-center min-h-[56px] px-[10%]">
  <div className="flex items-center gap-3 cursor-pointer py-2 px-4 rounded-2xl smooth-hover" onClick={() => showPage('home')}>
  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500">
      <i className="fas fa-chart-line text-2xl text-white"></i>
    </span>
    <span className="font-extrabold text-2xl tracking-wide bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg animate-fade-in">
      DataInsight
    </span>
  </div>
      <ul className={`hidden md:flex gap-6 font-semibold text-lg transition-all duration-300 whitespace-nowrap ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
  <li><button className={`px-4 py-1.5 rounded-xl transition-all duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400/60 hover:bg-white/10 hover:text-blue-200 smooth-hover ${currentPage==='home'?'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg scale-105':''}`} onClick={() => showPage('home')}>Home</button></li>
  <li><button className={`px-4 py-1.5 rounded-xl transition-all duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400/60 hover:bg-white/10 hover:text-blue-200 smooth-hover ${currentPage==='services'?'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg scale-105':''}`} onClick={() => showPage('services')}>Services</button></li>
  <li><button className={`px-4 py-1.5 rounded-xl transition-all duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400/60 hover:bg-white/10 hover:text-blue-200 smooth-hover ${currentPage==='about'?'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg scale-105':''}`} onClick={() => showPage('about')}>About</button></li>
  <li><button className={`px-4 py-1.5 rounded-xl transition-all duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400/60 hover:bg-white/10 hover:text-blue-200 smooth-hover ${currentPage==='contact'?'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg scale-105':''}`} onClick={() => showPage('contact')}>Contact</button></li>
  <li><button className={`px-4 py-1.5 rounded-xl transition-all duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400/60 hover:bg-white/10 hover:text-blue-200 smooth-hover ${currentPage==='signup'?'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg scale-105':''}`} onClick={() => showPage('signup')}>Sign Up</button></li>
        {/* Login button removed as requested */}
      </ul>
      <button className="md:hidden text-2xl ml-[5%] mr-[5%]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <i className="fas fa-bars drop-shadow-lg"></i>
      </button>
    </nav>
  </header>
);

export default Header;
