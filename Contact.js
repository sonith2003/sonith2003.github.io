// src/components/Contact.js
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <section id="contact">
  <h2>Contact Me</h2>
  <p><a href="https://www.linkedin.com/in/sonith-n-21278a2a8" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
  <a href="https://github.com/sonith2003" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
  <p><a href="mailto:sonithr15@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a></p>
  <p><a href="tel:+918925293592" target="_blank" rel="noopener noreferrer">Call Me</a></p>

</section>
        
        
        
      </div>
    </section>
  );
}
