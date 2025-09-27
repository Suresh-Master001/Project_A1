import React, { useState } from 'react';

const Auth = () => {
  const [mode, setMode] = useState('signup');
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(mode === 'login' ? 'Login successful!' : 'Signup successful!');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900 px-2 md:px-0 animate-fade-in">
      <form className="bg-white border-2 border-blue-900 rounded-3xl shadow-2xl p-4 sm:p-8 w-full max-w-xs sm:max-w-md animate-fade-in" onSubmit={handleSubmit}>
        <div className="flex justify-center mb-8">
          <button type="button" onClick={() => setMode('signup')} className={`px-6 py-2 rounded-l-full font-semibold transition-all duration-200 ${mode === 'signup' ? 'bg-blue-900 text-white shadow-lg' : 'bg-blue-100 text-blue-900'}`}>Sign Up</button>
          <button type="button" onClick={() => setMode('login')} className={`px-6 py-2 rounded-r-full font-semibold transition-all duration-200 ${mode === 'login' ? 'bg-blue-900 text-white shadow-lg' : 'bg-blue-100 text-blue-900'}`}>Login</button>
        </div>
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-900 text-3xl">
            <i className={`fas ${mode === 'signup' ? 'fa-user-plus' : 'fa-sign-in-alt'}`}></i>
          </span>
        </div>
        {mode === 'signup' && (
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="w-full mb-4 p-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-200" />
        )}
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full mb-4 p-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-200" />
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required className="w-full mb-6 p-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-200" />
        <button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:from-blue-800 hover:to-indigo-800 transition-all duration-200">{mode === 'login' ? 'Login' : 'Sign Up'}</button>
      </form>
    </section>
  );
};

export default Auth;
