import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Your other components and routes go here */}
      </div>
    </Router>
  );
}

export default App;