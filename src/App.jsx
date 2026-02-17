import React from 'react';
import Hero from './components/Hero';
import Pedigree from './components/Pedigree';
import ServiceHierarchy from './components/ServiceHierarchy';
import Closing from './components/Closing';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Pedigree />
      <ServiceHierarchy />
      <Closing />
      <Footer />
    </div>
  );
}

export default App;
