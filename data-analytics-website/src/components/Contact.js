import React from 'react';

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Get in touch for your data analytics needs.</p>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
