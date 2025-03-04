import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import App from './App';  // Import your Home component
import Experience from './experiences/App';  // Correctly import the Experiences component

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/experiences" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;