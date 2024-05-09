import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inicio" element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;