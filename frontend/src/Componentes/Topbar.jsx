// Topbar.js
import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../Estilos/Topbar.css';

const Topbar = ({ usuario }) => {
    return (
        <div className="topbar">
            <div className="usuario">
                <FaUser className="user-icon" />
                <p><i>{usuario}</i></p>
            </div>
        </div>
    );
};

export default Topbar;
