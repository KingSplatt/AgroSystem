import React, { useState } from 'react';
import {
    FaBars, FaHandHoldingUsd, FaMoneyCheckAlt, FaProductHunt,
    FaShoppingCart, FaSignOutAlt, FaTh, FaTruck, FaUsers
} from "react-icons/fa"; // Importamos los iconos de react-icons
import { NavLink } from 'react-router-dom';
import '../Estilos/Sidebar.css';



const Sidebar = ({ nose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedMenus, setExpandedMenus] = useState({});

    const toggle = () => setIsOpen(!isOpen);

    const toggleSubMenu = (index) => {
        setExpandedMenus(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const menuItems = [
        {
            name: 'Inicio',
            path: '/inicio',
            icon: <FaTh />,
            submenu: [
                {
                    name: 'Ver Inicio',
                    path: '/inicio'
                }
            ]
        },
        {
            name: 'Productos',
            icon: <FaProductHunt />,
            submenu: [
                {
                    name: 'Ver Productos',
                    path: '/VerProducto'
                },
                {
                    name: 'Añadir Productos',
                    path: '/productos/anadir'
                },
                {
                    name: 'Modificar Productos',
                    path: '/productos/anadir'
                }
            ]
        },
        {
            name: 'Ventas',
            icon: <FaHandHoldingUsd />,
            submenu: [
                {
                    name: 'Ver ventas',
                    path: '/productos/ver'
                },
                {
                    name: 'Realizar venta',
                    path: '/productos/anadir'
                }
            ]
        },
        {
            name: 'Compras',
            icon: <FaShoppingCart />,
            submenu: [
                {
                    name: 'Historial de compras',
                    path: '/HistorialCompras'
                },
                {
                    name: 'Ingresar compra',
                    path: '/IngresarProductos'
                }
            ]
        },
        {
            name: 'Proveedores',
            icon: <FaTruck />,
            submenu: [
                {
                    name: 'Ver proveedores',
                    path: '/VerProveedores'
                },
                {
                    name: 'Añadir proveedor',
                    path: '/AnadirProveedor'
                },
                {
                    name: 'Modificar proveedor',
                    path: '/ActualizarProveedor'
                }
            ]
        },
        {
            name: 'Clientes',
            icon: <FaUsers />,
            submenu: [
                {
                    name: 'Ver clientes',
                    path: '/productos/ver'
                },
                {
                    name: 'Añadir cliente',
                    path: '/productos/anadir'
                },
                {
                    name: 'Modificar cliente',
                    path: '/productos/anadir'
                }
            ]
        },
        {
            name: 'Cotizar',
            path: '/cotizar',
            icon: <FaMoneyCheckAlt />

        },
        {
            name: 'Salir',
            path: '/logout',
            icon: <FaSignOutAlt />

        }
        // Puedes agregar más elementos de menú aquí con submenús si lo deseas
    ];

    const renderMenuItem = (item, index) => {
        if (item.submenu) {
            return (
                <div key={index}>
                    <div className="link" onClick={() => toggleSubMenu(index)}>
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                    </div>
                    <div style={{ marginLeft: isOpen && expandedMenus[index] ? "20px" : "0px" }}>
                        {expandedMenus[index] && item.submenu.map((subitem, subindex) => (
                            <NavLink to={subitem.path} key={subindex} className="link" activeclassName="active">
                                <div className="submenu_text">{subitem.name}</div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            );
        } else {
            return (
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                </NavLink>
            );
        }
    };

    return (
        <div className="contenedor">
            <div style={{ width: isOpen ? "200px" : "60px" }} className="sidebar">
                <div className="top">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "90px" : "0px" }} className="bars">
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
