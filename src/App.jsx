import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Header from "./components/Header";
import Footer from "./components/Footer";
import JKInteriors from "./components/JKInteriors";
import About from "./components/About";
import Services from "./components/Services";
import Philosophy from "./components/Philosophy";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-black">
          <SEO />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<JKInteriors />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App; 