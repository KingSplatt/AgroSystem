import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Componentes/Sidebar";
import Login from "./Login";
import ActualizarProveedor from "./pages/ActualizarProveedor.jsx";
import AnadirProductos from "./pages/AnadirProductos";
import AnadirProveedor from "./pages/AnadirProveedor.jsx";
import Cotizar from "./pages/Cotizar.jsx";
import HistorialCompras from "./pages/HistorialCompras.jsx";
import IngresarProductos from "./pages/IngresarProductos";
import Inicio from "./pages/Inicio.jsx";
import ModificarProductos from "./pages/ModificarProducto";
import VerProducto from "./pages/VerProducto";
import VerProveedores from "./pages/VerProveedores.jsx";
import VerVentas from "./pages/VerVentas.jsx";
import RealizarVenta from "./pages/RealizarVenta.jsx";
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
                  <Route
                    path="/AnadirProveedor"
                    element={<AnadirProveedor />}
                  />
                  <Route
                    path="/ActualizarProveedor"
                    element={<ActualizarProveedor />}
                  />
                  <Route
                    path="/HistorialCompras"
                    element={<HistorialCompras />}
                  />
                  <Route
                    path="/IngresarProductos"
                    element={<IngresarProductos />}
                  />
                  <Route path="/VerProducto" element={<VerProducto />} />
                  <Route path="/Cotizar" element={<Cotizar />} />
                  <Route
                    path="/AnadirProductos"
                    element={<AnadirProductos />}
                  />
                  <Route
                    path="/ModificarProductos"
                    element={<ModificarProductos />}
                  />
                  <Route
                    path="/VerVentas"
                    element={<VerVentas />}
                  />
                  <Route
                    path="/RealizarVenta"
                    element={<RealizarVenta />}
                  />
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
