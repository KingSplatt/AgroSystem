import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//import Dash from './Dash';
import Sidebar from './Componentes/Sidebar';
import Login from './Login';
import ActualizarProveedor from './pages/ActualizarProveedor.jsx';
import AnadirProveedor from './pages/AnadirProveedor.jsx';
import HistorialCompras from './pages/HistorialCompras.jsx';
import Inicio from './pages/Inicio.jsx';
import VerProveedores from './pages/VerProveedores.jsx';

const App = () => {


  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/VerProveedores" element={<VerProveedores />} />
        <Route path="/AnadirProveedor" element={<AnadirProveedor />} />
        <Route path="/ActualizarProveedor" element={<ActualizarProveedor />} />
        <Route path="/HistorialCompras" element={<HistorialCompras />} />
      </Routes>
      <Sidebar nose={"Contenido"} />
    </BrowserRouter>
  );
}

export default App;