import React from "react";
import "../Estilos/Logout.css";
const Logout = () => {
    return (
        <body className="cuerpologat">
            <div className="logat">
                <h1>¿Estas seguro que deseas salir?</h1>
                <h2>Como consecuencia se cerrara tu sesion y tendras que iniciar sesion de nuevo</h2>
                <div className="botonesl">
                    <button onClick={() => {
                        alert("Sesión cerrada");
                        localStorage.clear();
                        window.location.href = "/";
                    }}>Salir</button>
                    <button onClick={() => {
                        window.location.href = "/inicio";
                    }}>Cancelar</button>

                </div>
            </div>

        </body>
    );
}
export default Logout;
