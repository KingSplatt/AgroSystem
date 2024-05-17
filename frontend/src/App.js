import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Componentes/Sidebar";
import Login from "./Login";
import ActualizarProveedor from "./pages/ActualizarProveedor.jsx";
import AnadirProveedor from "./pages/AnadirProveedor.jsx";
import HistorialCompras from "./pages/HistorialCompras.jsx";
import IngresarProductos from "./pages/IngresarProductos";
import Inicio from "./pages/Inicio.jsx";
import VerProveedores from "./pages/VerProveedores.jsx";

const App = () => {
  return (
    <div className="Todo">
      <BrowserRouter>
        <Sidebar nose={Selection.path} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/VerProveedores" element={<VerProveedores />} />
          <Route path="/AnadirProveedor" element={<AnadirProveedor />} />
          <Route
            path="/ActualizarProveedor"
            element={<ActualizarProveedor />}
          />
          <Route path="/HistorialCompras" element={<HistorialCompras />} />
          <Route path="/IngresarProductos" element={<IngresarProductos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
