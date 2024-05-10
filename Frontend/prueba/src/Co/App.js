import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dash from './Dash';
import Inicio from './Inicio';
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Dash" element={<Dash />} />
      </Routes>
    </Router>
  );
}

export default App;