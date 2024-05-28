import React, { useState } from 'react';
import "../Estilos/MenuProductos.css";
const MenuComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-container">
      <a href="#" className="separacion" onClick={toggleMenu}>
        Productos
      </a>
      {isMenuOpen && (
        <div className="menu">
          <a href="/Herbicidas" className="menu-item">Herbicidas</a> <br/>
          <a href="/Plaguicidas" className="menu-item">Plaguicidas</a>
        </div>
      )}
    </div>
  );
};

export default MenuComponent;
