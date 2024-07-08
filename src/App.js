// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import News from './Components/News';
import Team from './Components/Team';
import Training from './Components/Training';
import Juniors from './Components/Juniors';
import Fixtures from './Components/Fixtures';
import MedRec from './Components/MedRec';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/team" element={<Team />} />
            <Route path="/training" element={<Training />} />
            <Route path="/juniors" element={<Juniors />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/media-recruitment" element={<MedRec />} />
            <Route path="/contact" element={<Contact />} />
            {/* Other routes */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
