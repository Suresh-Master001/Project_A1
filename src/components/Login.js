
import React, { useState } from 'react';

const Login = ({ showPage }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert('Login successful!');
  };
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 animate-fade-in px-2 sm:px-8 md:px-16 lg:px-32 py-6 sm:py-12">
      <div className="w-full max-w-md mx-auto flex flex-col gap-4">
        <form className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-300 p-6 sm:p-10 animate-slide-up flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4 text-center drop-shadow-lg">Login to Your Account</h2>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full p-4 border border-blue-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/60 text-lg shadow-sm" />
          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required className="w-full p-4 border border-blue-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/60 text-lg shadow-sm" />
          <button type="submit" className="w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:from-blue-800 hover:to-purple-800 transition-all duration-300">Login</button>
          <div className="mt-4 text-center flex flex-col sm:flex-row items-center justify-center gap-2">
            <span className="text-gray-700 text-lg">Don't have an account?</span>
            <button
              type="button"
              className="text-indigo-700 font-bold hover:underline focus:outline-none text-lg"
              onClick={() => showPage('signup')}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
