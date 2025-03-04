import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import App from './App';  // Import your Home component
import Experience from './experiences/App';  // Correctly import the Experiences component
import Projects from './projects/App';
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;