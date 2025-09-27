import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 px-2 sm:px-8 md:px-16 lg:px-32 py-6 sm:py-12 md:py-24">
  <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 w-full max-w-5xl border border-blue-300 relative mx-auto flex flex-col gap-8">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-t-3xl"></div>
        <h2 className="text-5xl font-extrabold text-blue-900 mb-12 text-center drop-shadow-lg">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <h3 className="text-3xl font-extrabold text-blue-900 mb-6">Get In Touch</h3>
            <p className="mb-6 text-gray-700 text-lg">Ready to unlock the power of your data? Contact us today for a free consultation.</p>
            <div className="mb-10">
              <div className="flex items-center mb-5">
                <i className="fas fa-map-marker-alt text-blue-600 text-2xl mr-4"></i>
                <div>
                  <h4 className="font-semibold text-blue-900">Our Office</h4>
                  <p className="text-gray-600">123 Analytics Drive, Tech City, TC 10101</p>
                </div>
              </div>
              <div className="flex items-center mb-5">
                <i className="fas fa-phone text-blue-600 text-2xl mr-4"></i>
                <div>
                  <h4 className="font-semibold text-blue-900">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center mb-5">
                <i className="fas fa-envelope text-blue-600 text-2xl mr-4"></i>
                <div>
                  <h4 className="font-semibold text-blue-900">Email</h4>
                  <p className="text-gray-600">info@datainsight.com</p>
                </div>
              </div>
              <div className="flex items-center mb-5">
                <i className="fas fa-clock text-blue-600 text-2xl mr-4"></i>
                <div>
                  <h4 className="font-semibold text-blue-900">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Follow Us</h3>
            <div className="flex gap-5 mb-10">
              <a href="#" className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-700 transition-all duration-300"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-700 transition-all duration-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-700 transition-all duration-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-700 transition-all duration-300"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-xl p-10">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your Name" 
                required 
                className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50/50 text-lg"
              />
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Your Email" 
                required 
                className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50/50 text-lg"
              />
              <input 
                type="text" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="Subject" 
                required 
                className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50/50 text-lg"
              />
              <select 
                name="service" 
                value={formData.service} 
                onChange={handleChange} 
                required 
                className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50/50 text-lg"
              >
                <option value="" disabled>Select Service</option>
                <option value="bi">Business Intelligence</option>
                <option value="predictive">Predictive Analytics</option>
                <option value="performance">Performance Analytics</option>
                <option value="security">Security Analytics</option>
                <option value="cloud">Cloud Analytics</option>
                <option value="custom">Custom Solutions</option>
              </select>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Your Message" 
                required 
                rows="5" 
                className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50/50 text-lg resize-vertical"
              ></textarea>
              <button 
                type="submit" 
                className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-blue-800 hover:to-purple-800 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
