import React from "react";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">SONITH</span>
        </h1>
        <h2 className="hero-subtitle">Frontend Developer</h2>
        <p className="hero-description">
          I build responsive and user-friendly web applications 
          using React.js, JavaScript, HTML, and CSS.
        </p>
      </div>
      <div className="image">
        <img src="/image/Profile.jpg.jpg" alt="Profile" />
      </div>
    </section>
  );
}