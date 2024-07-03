import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content-container">
          <Navbar />
          {/* Your routes and other components go here */}
        </div>
      </div>
    </Router>
  );
}

export default App;