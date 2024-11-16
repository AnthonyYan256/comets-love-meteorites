import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Changed Switch to Routes

import About from './About.jsx';
import LearnMore from './LearnMore.jsx';
import AddAComet from './AddAComet.jsx';

import Header from './Header.jsx'
import LandingAnimation from './LandingAnimation.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>  {/* Changed from Switch to Routes, V.6.28.0 */}
        <Route path="/" element={  /* Changed from render to element */
          <>
            <LandingAnimation />
            <div></div>
          </>
        } />
        <Route path="/about" element={<About />} />  {/* Changed from component to element */}
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/add-a-comet" element={<AddAComet />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App