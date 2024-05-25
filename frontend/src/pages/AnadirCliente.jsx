import React, { useState } from "react";
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";
import "../Estilos/AddClientes.css";

const AnadirCliente = () => {
    const [selectedState, setSelectedState] = useState("");
    const [cities, setCities] = useState([]);
    const [formData, setFormData] = useState({
        Nombre: '',
        ApellidoPaterno: '',
        ApellidoMaterno: '',
        Usuario: '',
        Contrasena: '',
        Correo: '',
        Telefono: '',
        RFC: '',
        CURP: '',
        Ciudad: ''
    });

    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        switch (state) {
            case "Aguascalientes":
                setCities(["Aguascalientes City"]);
                break;
            case "Baja California":
                setCities(["Tijuana", "Mexicali", "Ensenada"]);
                break;
            default:
                setCities([]);
                break;
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if any field is empty
      for (const key in formData) {
        if (formData[key].trim() === '') {
            alert('Por favor completa todos los campos');
            return;
        }
      }
        try {
            const response = await fetch('http://localhost:8080/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Cliente añadido con éxito');
                setFormData({
                    Nombre: '',
                    ApellidoPaterno: '',
                    ApellidoMaterno: '',
                    Usuario: '',
                    Contrasena: '',
                    Correo: '',
                    Telefono: '',
                    RFC: '',
                    CURP: '',
                    Ciudad: ''
                });
                setSelectedState('');
                setCities([]);
            } else {
                alert('Error al añadir el cliente');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al añadir el cliente');
        }
    };

    return (
        <div className="add-client-container">
            <form className="add-client-form" onSubmit={handleSubmit}>
                <h2>Añadir Cliente</h2>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">Datos del Usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label htmlFor="Nombre">Nombre(s)</label></td>
                            <td><input type="text" id="Nombre" value={formData.Nombre} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="ApellidoPaterno">Apellido Paterno</label></td>
                            <td><input type="text" id="ApellidoPaterno" value={formData.ApellidoPaterno} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="ApellidoMaterno">Apellido Materno</label></td>
                            <td><input type="text" id="ApellidoMaterno" value={formData.ApellidoMaterno} onChange={handleInputChange} /></td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan="2">Datos de Contacto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label htmlFor="Usuario">Usuario</label></td>
                            <td><input type="text" id="Usuario" value={formData.Usuario} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="Contrasena">Contraseña</label></td>
                            <td><input type="password" id="Contrasena" value={formData.Contrasena} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="Correo">Correo</label></td>
                            <td><input type="text" id="Correo" value={formData.Correo} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="Telefono">Teléfono</label></td>
                            <td><input type="text" id="Telefono" value={formData.Telefono} onChange={handleInputChange} /></td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan="2">Datos Financieros</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label htmlFor="RFC">RFC</label></td>
                            <td><input type="text" id="RFC" value={formData.RFC} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="CURP">CURP</label></td>
                            <td><input type="text" id="CURP" value={formData.CURP} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="Estado">Estado</label></td>
                            <td>
                                <select id="Estado" onChange={handleStateChange} value={selectedState}>
                                    <option value="">Selecciona tu estado</option>
                                    <option value="Aguascalientes">Aguascalientes</option>
                                    <option value="Baja California">Baja California</option>
                                    <option value="Baja California Sur">Baja California Sur</option>
                                    <option value="Campeche">Campeche</option>
                                    <option value="Chiapas">Chiapas</option>
                                    <option value="Chihuahua">Chihuahua</option>
                                    <option value="Coahuila">Coahuila</option>
                                    <option value="Colima">Colima</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="Ciudad">Ciudad</label></td>
                            <td>
                                <select id="Ciudad" disabled={!selectedState} value={formData.Ciudad} onChange={handleInputChange}>
                                    <option value="">Selecciona tu ciudad</option>
                                    {cities.map((city) => (
                                        <option key={city} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="buttons-container">
                    <button className="cancel-button" type="button">
                        <FaRegTimesCircle /> Cancelar
                    </button>
                    <button className="save-button" type="submit">
                        <FaRegSave /> Guardar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AnadirCliente;
