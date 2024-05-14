import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";

import Register from "./Register";
import Dash from "./Dash";
import Inicio from "./Inicio";
import Login from "./Login";

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
