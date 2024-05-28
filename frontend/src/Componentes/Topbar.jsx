// Topbar.js
import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../Estilos/Topbar.css';

const savedEmpleado = JSON.parse(localStorage.getItem('empleado'));

const Topbar = ({ usuario }) => {
    return (
        <div className="topbar">
            <div className="usuario">
                <FaUser className="user-icon" />
                <p><i>{savedEmpleado.Usuario}</i></p>
            </div>
        </div>
    );
};

export default Topbar;
