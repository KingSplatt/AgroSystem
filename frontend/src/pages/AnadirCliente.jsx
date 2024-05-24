import React, { useState } from "react";
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";
import "../Estilos/AddClientes.css";

const AnadirCliente = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  // Function to handle state change
  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    // Logic to fetch cities for the selected state or use a predefined data source
    // For simplicity, let's assume cities are predefined for each state
    switch (state) {
      case "Aguascalientes":
        setCities(["Aguascalientes City"]);
        break;
      case "Baja California":
        setCities(["Tijuana", "Mexicali", "Ensenada"]);
        break;
      case "Baja California Sur":
        setCities(["La Paz", "Cabo San Lucas", "Loreto"]);
        break;
      case "Campeche":
        setCities(["Campeche City", "Ciudad del Carmen", "Champotón"]);
        break;
      case "Chiapas":
        setCities(["Tuxtla Gutiérrez", "Tapachula", "San Cristóbal de las Casas"]);
        break;
      case "Chihuahua":
        setCities(["Chihuahua City", "Juárez", "Cuauhtémoc"]);
        break;
      case "Coahuila":
        setCities(["Saltillo", "Torreón", "Monclova"]);
        break;
      case "Colima":
        setCities(["Colima City", "Manzanillo", "Tecomán"]);
        break;
      case "Durango":
        setCities(["Durango City", "Gómez Palacio", "Lerdo"]);
        break;
      case "Estado de México":
        setCities(["Toluca", "Naucalpan", "Ecatepec"]);
        break;
      case "Guanajuato":
        setCities(["León", "Irapuato", "Celaya"]);
        break;
      case "Guerrero":
        setCities(["Acapulco", "Chilpancingo", "Zihuatanejo"]);
        break;
      case "Hidalgo":
        setCities(["Pachuca", "Tulancingo", "Tizayuca"]);
        break;
      case "Jalisco":
        setCities(["Guadalajara", "Zapopan", "Tlaquepaque"]);
        break;
      case "Michoacán":
        setCities(["Morelia", "Uruapan", "Zamora"]);
        break;
      case "Morelos":
        setCities(["Cuernavaca", "Jiutepec", "Temixco"]);
        break;
      case "Nayarit":
        setCities(["Tepic", "Bahía de Banderas", "Santiago Ixcuintla"]);
        break;
      case "Nuevo León":
        setCities(["Monterrey", "San Nicolás", "Guadalupe"]);
        break;
      case "Oaxaca":
        setCities(["Oaxaca City", "Salina Cruz", "Juchitán"]);
        break;
      case "Puebla":
        setCities(["Puebla City", "Tehuacán", "San Martín Texmelucan"]);
        break;
      case "Querétaro":
        setCities(["Querétaro City", "San Juan del Río", "Corregidora"]);
        break;
      case "Quintana Roo":
        setCities(["Cancún", "Playa del Carmen", "Chetumal"]);
        break;
      case "San Luis Potosí":
        setCities(["San Luis Potosí City", "Soledad de Graciano Sánchez", "Matehuala"]);
        break;
      case "Sinaloa":
        setCities(["Culiacán", "Mazatlán", "Los Mochis"]);
        break;
      case "Sonora":
        setCities(["Hermosillo", "Ciudad Obregón", "Nogales"]);
        break;
      case "Tabasco":
        setCities(["Villahermosa", "Cárdenas", "Comalcalco"]);
        break;
      case "Tamaulipas":
        setCities(["Ciudad Victoria", "Reynosa", "Matamoros"]);
        break;
      case "Tlaxcala":
        setCities(["Tlaxcala City", "Apizaco", "Huamantla"]);
        break;
      case "Veracruz":
        setCities(["Veracruz City", "Xalapa", "Coatzacoalcos"]);
        break;
      case "Yucatán":
        setCities(["Mérida", "Valladolid", "Tizimín"]);
        break;
      case "Zacatecas":
        setCities(["Zacatecas City", "Guadalupe", "Fresnillo"]);
        break;
      default:
        setCities([]);
        break;
    }
  };

  return (
    <div className="add-client-container">
      
      <form className="add-client-form">
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
              <td><input type="text" id="Nombre" /></td>
            </tr>
            <tr>
              <td><label htmlFor="ApellidoPaterno">Apellido Paterno</label></td>
              <td><input type="text" id="ApellidoPaterno" /></td>
            </tr>
            <tr>
              <td><label htmlFor="ApellidoMaterno">Apellido Materno</label></td>
              <td><input type="text" id="ApellidoMaterno" /></td>
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
              <td><input type="text" id="Usuario" /></td>
            </tr>
            <tr>
              <td><label htmlFor="Contraseña">Contraseña</label></td>
              <td><input type="password" id="Contraseña" /></td>
            </tr>
            <tr>
              <td><label htmlFor="Correo">Correo</label></td>
              <td><input type="text" id="Correo" /></td>
            </tr>
            <tr>
              <td><label htmlFor="Telefono">Teléfono</label></td>
              <td><input type="text" id="Telefono" /></td>
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
              <td><input type="text" id="RFC" /></td>
            </tr>
            <tr>
              <td><label htmlFor="CURP">CURP</label></td>
              <td><input type="text" id="CURP" /></td>
            </tr>
            <tr>
              <td><label htmlFor="Estado">Estado</label></td>
              <td>
                <select id="Estado" onChange={handleStateChange}>
                  <option value="">Selecciona tu estado</option>
                  {/* Add the state options here */}
                  <option value="Aguascalientes">Aguascalientes</option>
                  <option value="Baja California">Baja California</option>
                  <option value="Baja California Sur">Baja California Sur</option>
                  <option value="Campeche">Campeche</option>
                  <option value="Chiapas">Chiapas</option>
                  <option value="Chihuahua">Chihuahua</option>
                  <option value="Coahuila">Coahuila</option>
                  <option value="Colima">Colima</option>
                  <option value="Durango">Durango</option>
                  <option value="Estado de México">Estado de México</option>
                  <option value="Guanajuato">Guanajuato</option>
                  <option value="Guerrero">Guerrero</option>
                  <option value="Hidalgo">Hidalgo</option>
                  <option value="Jalisco">Jalisco</option>
                  <option value="Michoacán">Michoacán</option>
                  <option value="Morelos">Morelos</option>
                  <option value="Nayarit">Nayarit</option>
                  <option value="Nuevo León">Nuevo León</option>
                  <option value="Oaxaca">Oaxaca</option>
                  <option value="Puebla">Puebla</option>
                  <option value="Querétaro">Querétaro</option>
                  <option value="Quintana Roo">Quintana Roo</option>
                  <option value="San Luis Potosí">San Luis Potosí</option>
                  <option value="Sinaloa">Sinaloa</option>
                  <option value="Sonora">Sonora</option>
                  <option value="Tabasco">Tabasco</option>
                  <option value="Tamaulipas">Tamaulipas</option>
                  <option value="Tlaxcala">Tlaxcala</option>
                  <option value="Veracruz">Veracruz</option>
                  <option value="Yucatán">Yucatán</option>
                  <option value="Zacatecas">Zacatecas</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="Ciudad">Ciudad</label></td>
              <td>
                <select id="Ciudad" disabled={!selectedState}>
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
          <button className="cancel-button">
            <FaRegTimesCircle /> Cancelar
          </button>
          <button className="save-button">
            <FaRegSave /> Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnadirCliente;
