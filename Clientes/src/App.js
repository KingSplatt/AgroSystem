import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Estilos/InicioClientes.css";
import InicioClientes from "./Pages/InicioClientes.jsx";
import producto1 from "./Pages/producto1.jsx";

const App = () => {
  return (
    <div className="Encabezado">
      <BrowserRouter>
        <Routes>
          <Route path="/InicioClientes" element={<InicioClientes />} />
          <Route
            path="*"
            element={
              <>
                <Routes>
                  <Route path="/producto1" element={<producto1 />} />
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
