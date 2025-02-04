import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="*" element={<App />}/>
      </Routes>
    </Router>
  </StrictMode>
);