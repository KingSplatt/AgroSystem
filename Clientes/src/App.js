import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InicioClientes from "./Pages/InicioClientes.jsx";

const App = () => {
  return (
    <div className="Todo">
      <BrowserRouter>
        <Routes>
          <Route path="/InicioClientes" element={<InicioClientes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
