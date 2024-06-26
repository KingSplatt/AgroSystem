import React, { useState } from 'react';
import {
    FaBars, FaHandHoldingUsd, FaMoneyCheckAlt, FaProductHunt,
    FaShoppingCart, FaSignOutAlt, FaTh, FaTruck, FaUsers
} from "react-icons/fa";
import { NavLink, Route } from 'react-router-dom';
import '../Estilos/Sidebar.css';
import logo from '../Images/3.jpg';
import Login from "../Login";
import Topbar from './Topbar.jsx';

const Sidebar = ({ nose }) => {

    const savedEmpleado = JSON.parse(localStorage.getItem('empleado'));
    console.log("Empleado (inicial):", savedEmpleado);
    const [isOpen, setIsOpen] = useState(false);
    const [expandedMenuIndex, setExpandedMenuIndex] = useState(null);
    let IDTipo;
    if (savedEmpleado) {
        if (savedEmpleado.IDCEDI) {
            IDTipo = "CEDI: " + savedEmpleado.IDCEDI;
        } else {
            IDTipo = "Sucursal: " + savedEmpleado.IDSucursal;
        }

    }


    const toggle = () => {
        if (isOpen) {
            setExpandedMenuIndex(null);
        }
        setIsOpen(!isOpen);
    };

    const toggleSubMenu = (index) => {
        if (!isOpen) {
            setIsOpen(true);
            setExpandedMenuIndex(index);
        } else {
            setExpandedMenuIndex(prevIndex => (prevIndex === index ? null : index));
        }
    };

    let menuItems = [
        {
            name: 'Inicio',
            path: '/inicio',
            icon: <FaTh />,
            submenu: [
                { name: 'Ver Inicio', path: '/inicio' }
            ]
        },
        {
            name: 'Productos',
            icon: <FaProductHunt />,
            submenu: [
                { name: 'Ver Productos', path: '/VerProducto' },
                { name: 'Añadir Productos Sucursal', path: '/AnadirProductosSucursal' },
                { name: 'Modificar Productos', path: '/ModificarProductos' }
            ]
        },
        {
            name: 'Ventas',
            icon: <FaHandHoldingUsd />,
            submenu: [
                { name: 'Ver ventas', path: '/VerVentas' },
                { name: 'Realizar venta', path: '/RealizarVenta' }
            ]
        },
        {
            name: 'Compras',
            icon: <FaShoppingCart />,
            submenu: [
                { name: 'Historial de compras', path: '/HistorialCompras' },
                { name: 'Ingresar compra', path: '/IngresarProductos' },
                { name: 'Añadir Productos', path: '/AnadirProductos' }
            ]
        },
        {
            name: 'Proveedores',
            icon: <FaTruck />,
            submenu: [
                { name: 'Ver proveedores', path: '/VerProveedores' },
                { name: 'Añadir proveedor', path: '/AnadirProveedor' },
                { name: 'Modificar proveedor', path: '/ActualizarProveedor' }
            ]
        },
        {
            name: 'Clientes',
            icon: <FaUsers />,
            submenu: [
                { name: 'Ver clientes', path: '/VerClientes' },
                { name: 'Añadir cliente', path: '/AnadirCliente' },
                { name: 'Modificar cliente', path: '/ModificarCliente' }
            ]
        },
        {
            name: 'Cotizar',
            icon: <FaMoneyCheckAlt />,
            submenu: [
                { name: 'Cotizar', path: '/Cotizar' },
                { name: 'Historial de cotizaciones', path: '/HistorialCotizaciones' }
            ]
        },
        {
            name: 'Salir',
            path: '/Logout',
            icon: <FaSignOutAlt />,

            onClick: () => {
                alert("Sesión cerrada");
                localStorage.clear();
                window.location.href = "/";
                <Route path="/logout" element={<Login />} />
            }


        }
    ];

    if (savedEmpleado && savedEmpleado.IDCEDI) {
        menuItems = menuItems.filter(item => item.name !== 'Clientes');
        menuItems = menuItems.filter(item => item.name !== 'Ventas');
    }

    if (savedEmpleado && savedEmpleado.IDSucursal) {
        menuItems = menuItems.filter(item => item.name !== 'Proveedores');
        menuItems = menuItems.filter(item => item.name !== 'Cotizar');
        menuItems = menuItems.filter(item => item.name !== 'Compras');
        menuItems = menuItems.filter(item => {
            if (item.name === 'Productos') {
                item.submenu = item.submenu.filter(subitem => subitem.name !== 'Modificar Productos');
            }
            return item;
        })
    }

    if (savedEmpleado && savedEmpleado.IDCEDI) {
        menuItems = menuItems.filter(item => {
            if (item.name === 'Productos') {
                item.submenu = item.submenu.filter(subitem => subitem.name !== 'Añadir Productos CEDI');
                item.submenu = item.submenu.filter(subitem => subitem.name !== 'Añadir Productos Sucursal');
            }
            return item;
        })
    }

    if (savedEmpleado && savedEmpleado.IDSucursal) {
        menuItems = menuItems.filter(item => {
            if (item.name === 'Productos') {
                item.submenu = item.submenu.filter(subitem => subitem.name !== 'Añadir Productos CEDI');
            }
            return item;
        })
    }


    const renderMenuItem = (item, index) => {
        const isExpanded = expandedMenuIndex === index;
        if (item.submenu) {
            return (
                <div key={index}>


                    <div className="link" onClick={() => toggleSubMenu(index)}>
                        <div className="icon">{item.icon}</div>

                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                    </div>

                    {isExpanded && item.submenu.map((subitem, subindex) => (

                        <NavLink to={subitem.path} key={subindex} className="link sublink" activeclassname="active">
                            <div className="submenu_text">{subitem.name}</div>
                        </NavLink>
                    ))}
                </div>
            );
        } else {
            return (
                <NavLink to={item.path} key={index} className="link" activeclassname="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                </NavLink>
            );
        }
    };

    return (
        <div className="contenedor">
            <Topbar usuario={savedEmpleado.Usuario} />
            <div style={{ width: isOpen ? "200px" : "60px" }} className="sidebar">
                <div className="top">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo"><img src={logo} width="100" height="100" alt="logo" /></h1>

                    <div style={{ display: isOpen ? "0px" : "0px" }} className="bars" onClick={toggle}>
                        <FaBars />
                    </div>
                </div>
                <div><label className='Tipo' style={{ display: isOpen ? "block" : "none" }}> {IDTipo}</label></div>
                <div><label className='Usuario' style={{ display: isOpen ? "block" : "none" }}> Usuario: {savedEmpleado.Usuario}</label></div>
                {menuItems.map(renderMenuItem)}
            </div>
            <main>{nose}</main>
        </div>
    );
};

export default Sidebar;