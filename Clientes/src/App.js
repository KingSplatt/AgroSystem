import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Estilos/InicioClientes.css";
import InicioClientes from "./Pages/InicioClientes.jsx";
import Producto1 from "./Pages/Producto1.jsx";
import Producto2 from "./Pages/Producto2.jsx";
import Producto3 from "./Pages/Producto3.jsx";
import Producto4 from "./Pages/Producto4.jsx";
import Producto5 from "./Pages/Producto5.jsx";
import Producto6 from "./Pages/Producto6.jsx";
import Herbicidas from "./Pages/Herbicidas.jsx";
import Plaguicidas from "./Pages/Plaguicidas.jsx";
import Registrarse from "./Pages/Registrarse.jsx";
import Nosotros from "./Pages/Nosotros.jsx";
import Login from "./Login";

const App = () => {
  return (
    <div className="Todo">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InicioClientes />} />
          <Route path="/Producto1" element={<Producto1 />} />
          <Route path="/Producto2" element={<Producto2 />} />
          <Route path="/Producto3" element={<Producto3 />} />
          <Route path="/Producto4" element={<Producto4 />} />
          <Route path="/Producto5" element={<Producto5 />} />
          <Route path="/Producto6" element={<Producto6 />} />
          <Route path="/Herbicidas" element={<Herbicidas />} />
          <Route path="/Plaguicidas" element={<Plaguicidas />} />
          <Route path="/Registrarse" element={<Registrarse />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
