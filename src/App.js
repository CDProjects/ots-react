// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import News from './Components/News';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            {/* Other routes */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
