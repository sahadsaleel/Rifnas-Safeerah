import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import WeddingDetails from './components/WeddingDetails';
import BrideGroom from './components/BrideGroom';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-offwhite min-h-screen font-sans text-text-main">
      <Navbar />
      <Hero />
      <Countdown />
      <WeddingDetails />
      <BrideGroom />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
