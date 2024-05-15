import React from "react";
import "../static/styles/Navbar.css";
import searchImage from "../static/img/search.png";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-block">
          <a href="/" className="nav-item">
            Inicio
          </a>
        </div>

        <div className="nav-block">
          <a href="/productos" className="nav-item">
            Productos
          </a>
        </div>

        <div className="search-bar">
          <input
            type="text"
            className="search-field"
            placeholder="Busca un producto..."
          />

          <span className="search-button">
            <img type="button" src={searchImage} alt="buscar" />
          </span>
        </div>

        <div className="nav-block auth">
          <a href="/login" className="nav-item">
            Iniciar sesion
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
