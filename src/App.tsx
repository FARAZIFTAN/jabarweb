import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import JabarSummary from './pages/JabarSummary';
import Home from './pages/Home';
import SustainableDestinations from './pages/SustainableDestinations';
import SustainableExperience from './pages/SustainableExperience';
import SustainableEvents from './pages/SustainableEvents';
import Gastronomy from './pages/Gastronomy';
import CultureHeritage from './pages/CultureHeritage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<SustainableDestinations />} />
          <Route path="/experience" element={<SustainableExperience />} />
          <Route path="/events" element={<SustainableEvents />} />
          <Route path="/gastronomy" element={<Gastronomy />} />
          <Route path="/heritage" element={<CultureHeritage />} />
          <Route path="/jabar-summary" element={<JabarSummary />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;