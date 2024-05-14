import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";

import Register from "./components/Register";
import Dash from "./components/Dash";
import Inicio from "./components/Inicio";
import Login from "./components/Login";

const Views = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Inicio} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/dash" Component={Dash} />
        </Routes>
      </Router>
    </>
  );
};

export default Views;
