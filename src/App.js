import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyListContainer from './Components/CompanyListContainer';
import Details from './Components/Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CompanyListContainer />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
