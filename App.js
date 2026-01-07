import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";
export default function App() {
return (
<main className="app">
<Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}