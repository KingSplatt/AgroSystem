import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Componentes/Sidebar';
import Login from './Login';
import ActualizarProveedor from './Pages/ActualizarProveedor.jsx';
import AnadirProductos from './Pages/AnadirProductos';
import AnadirProveedor from './Pages/AnadirProveedor.jsx';
import Cotizar from './Pages/Cotizar.jsx';
import HistorialCompras from './Pages/HistorialCompras.jsx';
import IngresarProductos from './Pages/IngresarProductos';
import Inicio from './Pages/Inicio.jsx';
import ModificarProductos from './Pages/ModificarProducto';
import VerProducto from './Pages/VerProducto';
import VerProveedores from './Pages/VerProveedores.jsx';

const App = () => {
  return (
    <div className='Todo'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={ <>
                <Sidebar />
                <Routes>
                  <Route path="/inicio" element={<Inicio />} />
                  <Route path="/VerProveedores" element={<VerProveedores />} />
                  <Route path="/AnadirProveedor" element={<AnadirProveedor />} />
                  <Route path="/ActualizarProveedor" element={<ActualizarProveedor />} />
                  <Route path="/HistorialCompras" element={<HistorialCompras />} />
                  <Route path="/IngresarProductos" element={<IngresarProductos />} />
                  <Route path="/VerProducto" element={<VerProducto />} />
                  <Route path="/Cotizar" element={<Cotizar />} />
                  <Route path="/AnadirProductos" element={<AnadirProductos />} />
                  <Route path="/ModificarProductos" element={<ModificarProductos />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;