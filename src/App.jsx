import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Process from './pages/Process';
import TrackRecord from './pages/TrackRecord';
import ForCandidates from './pages/ForCandidates';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Insights from './pages/Insights';
import ClearedAiSalaryGuide from './pages/insights/ClearedAiSalaryGuide';
import RetainedVsContingencyVsEmbedded from './pages/insights/RetainedVsContingencyVsEmbedded';
import HowToHireFpgaEngineers from './pages/insights/HowToHireFpgaEngineers';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <div className="main-content">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/track-record" element={<TrackRecord />} />
            <Route path="/for-candidates" element={<ForCandidates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/cleared-defense-ai-engineer-salary-guide-dc" element={<ClearedAiSalaryGuide />} />
            <Route path="/insights/retained-vs-contingency-vs-embedded-recruiting" element={<RetainedVsContingencyVsEmbedded />} />
            <Route path="/insights/how-to-hire-fpga-engineers" element={<HowToHireFpgaEngineers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
}

export default App;
