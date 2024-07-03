import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/team" element={<Team />} />
          <Route path="/training" element={<Training />} />
          <Route path="/juniors" element={<Juniors />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/medrec" element={<MedRec />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;