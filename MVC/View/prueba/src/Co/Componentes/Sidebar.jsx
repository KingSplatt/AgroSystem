import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const menuItem=[
        {
            name: 'Inicio',
            path: '/Inicio',
            icon: 'fas fa-home'
        }
    ]
    return(
        <div className="contenedor">
            <div className="sidebar">
                <div className="superior">
                    <div className="logo">
                        <FaBars />
                    </div>
                </div>
                {menuItem.map((item, index) => {
                    <NavLink to={item.path} key={index} className="menu-item">
                        <div className="icono">
                           {item.icon}
                        </div>
                    </NavLink>
                })}
            </div>
        </div>
    );
};

export default Sidebar;