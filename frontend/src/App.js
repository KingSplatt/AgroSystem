import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Componentes/Sidebar';
import Login from './Login';
import ActualizarProveedor from './Pages/ActualizarProveedor.jsx';
import AnadirProveedor from './Pages/AnadirProveedor.jsx';
import HistorialCompras from './Pages/HistorialCompras.jsx';
import IngresarProductos from './Pages/IngresarProductos';
import Inicio from './Pages/Inicio.jsx';
import VerProveedores from './Pages/VerProveedores.jsx';

const App = () => {
  return (
    <div className='Todo' >
    <BrowserRouter>
    <Sidebar nose={Selection.path}/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/VerProveedores" element={<VerProveedores />} />
        <Route path="/AnadirProveedor" element={<AnadirProveedor />} />
        <Route path="/ActualizarProveedor" element={<ActualizarProveedor />} />
        <Route path="/HistorialCompras" element={<HistorialCompras />} />
        <Route path="/IngresarProductos" element={<IngresarProductos />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;