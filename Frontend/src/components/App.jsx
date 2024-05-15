import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../static/styles/App.css";
//import Dash from './Dash';
import Sidebar from "./Sidebar.jsx";
import Login from "./Login.jsx";
import Inicio from "../pages/Inicio.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
      </Routes>
      <Sidebar>
        <Routes>
          <Route path="/" Component={Inicio} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
