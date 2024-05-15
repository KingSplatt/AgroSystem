import React, { useState } from "react";
import {
  FaBars,
  FaHandHoldingUsd,
  FaMoneyCheckAlt,
  FaProductHunt,
  FaShoppingCart,
  FaSignOutAlt,
  FaTh,
  FaTruck,
  FaUsers,
} from "react-icons/fa"; // Importamos los iconos de react-icons
import { NavLink } from "react-router-dom";

const Sidebar = ({ nose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggle = () => setIsOpen(!isOpen);

  const toggleSubMenu = (index) => {
    setExpandedMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const menuItems = [
    {
      name: "Inicio",
      path: "../../Pages/Inicio.jsx",
      icon: <FaTh />,
      submenu: [
        {
          name: "Ver Inicio",
          path: "../../Pages/Inicio",
        },
        {
          name: "Añadir Inicio",
          path: "/Inicio/anadir",
        },
      ],
    },
    {
      name: "Productos",
      icon: <FaProductHunt />,
      submenu: [
        {
          name: "Ver Productos",
          path: "Pages/VerProductos",
        },
        {
          name: "Añadir Productos",
          path: "/productos/anadir",
        },
        {
          name: "Modificar Productos",
          path: "/productos/anadir",
        },
      ],
    },
    {
      name: "Ventas",
      icon: <FaHandHoldingUsd />,
      submenu: [
        {
          name: "Ver ventas",
          path: "/productos/ver",
        },
        {
          name: "Realizar venta",
          path: "/productos/anadir",
        },
      ],
    },
    {
      name: "Compras",
      icon: <FaShoppingCart />,
      submenu: [
        {
          name: "Historial de compras",
          path: "/productos/ver",
        },
        {
          name: "Ingresar compra",
          path: "/productos/anadir",
        },
      ],
    },
    {
      name: "Proveedores",
      icon: <FaTruck />,
      submenu: [
        {
          name: "Ver proveedores",
          path: "/productos/ver",
        },
        {
          name: "Añadir proveedor",
          path: "/productos/anadir",
        },
        {
          name: "Modificar proveedor",
          path: "/productos/anadir",
        },
      ],
    },
    {
      name: "Clientes",
      icon: <FaUsers />,
      submenu: [
        {
          name: "Ver clientes",
          path: "/productos/ver",
        },
        {
          name: "Añadir cliente",
          path: "/productos/anadir",
        },
        {
          name: "Modificar cliente",
          path: "/productos/anadir",
        },
      ],
    },
    {
      name: "Cotizar",
      icon: <FaMoneyCheckAlt />,
    },
    {
      name: "Salir",
      icon: <FaSignOutAlt />,
    },
    // Puedes agregar más elementos de menú aquí con submenús si lo deseas
  ];

  const renderMenuItem = (item, index) => {
    if (item.submenu) {
      return (
        <div key={index}>
          <div className="link" onClick={() => toggleSubMenu(index)}>
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </div>
          <div
            style={{
              marginLeft: isOpen && expandedMenus[index] ? "20px" : "0px",
            }}
          >
            {expandedMenus[index] &&
              item.submenu.map((subitem, subindex) => (
                <NavLink
                  to={subitem.path}
                  key={subindex}
                  className="link"
                  activeclassname="active"
                >
                  <div className="submenu_text">{subitem.name}</div>
                </NavLink>
              ))}
          </div>
        </div>
      );
    } else {
      return (
        <NavLink
          to={item.path}
          key={index}
          className="link"
          activeclassname="active"
        >
          <div className="icon">{item.icon}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            {item.name}
          </div>
        </NavLink>
      );
    }
  };

  return (
    <div className="contenedor">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "70px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItems.map(renderMenuItem)}
      </div>
      <main>{nose}</main>
    </div>
  );
};

export default Sidebar;
