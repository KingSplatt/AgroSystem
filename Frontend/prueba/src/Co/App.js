import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//import Dash from './Dash';
import Sidebar from './Componentes/Sidebar';
import Login from './Login';
import Inicio from './Pages/Inicio.jsx';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;