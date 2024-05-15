import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";

import Register from "./Register";
import Dash from "./Dash";
import Inicio from "./Inicio";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Productos from "../pages/Productos";

const Views = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" Component={Inicio} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/dash" Component={Dash} />
          <Route path="/productos" Component={Productos} />
        </Routes>
      </Router>
    </>
  );
};

export default Views;
