import React from "react";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="bg-cblue-900 flex space-x-4">
      <div className="flex flex-start">
        <a
          href="/"
          className="text-cyellow-50 p-4 mt-1 transition-colors duration-400 hover:text-cyellow-300 hover:bg-cblue-950 hover:outline outline-1 outline-white ml-1"
        >
          Inicio
        </a>
        <a
          href="#"
          className="text-cyellow-50 p-4 mt-1 transition-colors duration-400 hover:text-cyellow-300 hover:bg-cblue-950 hover:outline outline-1 outline-white"
        >
          Productos
        </a>
        <a
          href="#"
          className="text-cyellow-50 p-4 mt-1 transition-colors duration-400 hover:text-cyellow-300 hover:bg-cblue-950 hover:outline outline-1 outline-white"
        >
          Soporte
        </a>
      </div>

      <SearchBar />

      <div className="flex flex-end">
        <a
          href="login"
          className="text-clightgreen-200 p-4 mt-1 transition-colors duration-400 hover:text-clightgreen-300 hover:bg-cblue-950 hover:outline outline-1 outline-white"
        >
          Inicia Sesion
        </a>
        <a
          href="#"
          className="text-clightgreen-200 p-4 mt-1 transition-colors duration-400 hover:text-clightgreen-300 hover:bg-cblue-950 hover:outline outline-1 outline-white mr-1"
        >
          Carrito
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
