import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TrackRecord from './pages/TrackRecord';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/track-record" element={<TrackRecord />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback for legacy .html links if they get hit directly? 
              Actually, Netlify rewrites should handle it, but good to have handy */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
