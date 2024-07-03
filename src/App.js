import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content-container">
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          {/* Other routes */}
        </Routes>
          {/* Your routes and other components go here */}
        </div>
      </div>
    </Router>
  );
}

export default App;