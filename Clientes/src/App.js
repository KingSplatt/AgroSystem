import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Estilos/InicioClientes.css";
import InicioClientes from "./Pages/InicioClientes.jsx";
import Producto1 from "./Pages/Producto1.jsx";
import Producto2 from "./Pages/Producto2.jsx";
import Producto3 from "./Pages/Producto3.jsx";
import Registrarse from "./Pages/Registrarse.jsx";
import Login from "./Login";

const App = () => {
  return (
    <div className="Todo">
      <BrowserRouter>
        <Routes>
          <Route path="/InicioClientes" element={<InicioClientes />} />
          <Route path="/Producto1" element={<Producto1 />} />
          <Route path="/Producto2" element={<Producto2 />} />
          <Route path="/Producto3" element={<Producto3 />} />
          <Route path="/Registrarse" element={<Registrarse />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
