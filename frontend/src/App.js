import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Componentes/Sidebar";
import Login from "./Login";
import ActualizarProveedor from "./Pages/ActualizarProveedor.jsx";
import AnadirCliente from "./Pages/AnadirCliente.jsx";
import AnadirProductos from "./Pages/AnadirProductos.jsx";
import AnadirProveedor from "./Pages/AnadirProveedor.jsx";
import Cotizar from "./Pages/Cotizar.jsx";
import HistorialCompras from "./Pages/HistorialCompras.jsx";
import HistorialCotizaciones from "./Pages/HistorialCotizaciones.jsx";
import IngresarProductos from "./Pages/IngresarProductos.jsx";
import Inicio from "./Pages/Inicio.jsx";
import ModificarCliente from "./Pages/ModificarCliente.jsx";
import ModificarProductos from "./Pages/ModificarProducto.jsx";
import RealizarVenta from "./Pages/RealizarVenta.jsx";
import VerClientes from "./Pages/VerCliente.jsx";
import VerProducto from "./Pages/VerProducto.jsx";
import VerProveedores from "./Pages/VerProveedores.jsx";
import VerVentas from "./Pages/VerVentas.jsx";

const App = () => {
  return (
    <div className="Todo">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="*"
            element={
              <>
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
                  <Route path="/RealizarVenta" element={<RealizarVenta />} />
                  <Route path="/VerVentas" element={<VerVentas />} />
                  <Route path="/AnadirCliente" element={<AnadirCliente />} />
                  <Route path="/VerClientes" element={<VerClientes />} />
                  <Route path="/ModificarCliente" element={<ModificarCliente />} />
                  <Route path="/HistorialCotizaciones" element={<HistorialCotizaciones />} />
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
