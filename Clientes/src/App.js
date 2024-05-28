import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Estilos/InicioClientes.css";
import InicioClientes from "./Pages/InicioClientes.jsx";
import Producto1 from "./Pages/Producto1.jsx";
import Registrarse from "./Pages/Registrarse.jsx";

const App = () => {
  return (
    <div className="Todo">
      <BrowserRouter>
        <Routes>
          <Route path="/InicioClientes" element={<InicioClientes />} />
          <Route path="/Producto1" element={<Producto1 />} />
          <Route path="/Registrarse" element={<Registrarse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
