import React from 'react';
import { FaRegSave, FaRegTimesCircle } from 'react-icons/fa';
import '../Estilos/IngresarProductos.css';


const IngresarProductos = () => {

    const Cancelar = () => {
        //limpiar tabla y formulario
        document.getElementById('claveCompra').value = '';
        document.getElementById('articulo').value = '';
        document.getElementById('cantidad').value = '';
        document.getElementById('precio').value = '';
        document.getElementById('proveedor').value = '';
        document.querySelector('tbody').innerHTML = '';
        document.querySelector('tfoot td:last-child').textContent = '0';


    }


    return (

        <div className='todoIG'>

            <div className='IngresarProductos'>

                <h2>Ingresar Productos</h2>

                <div className='FormularioProducto'>

                    <form className='FormularioIngreso'>
                        <div className='TopIngreso'>
                            <label>Proveedor: </label>
                            <select id='proveedor'>
                                <option value=''>Seleccionar: </option>
                                {/* Opciones de proveedor */}
                            </select>

                            <label>Clave de compra: </label>
                            <input type='text' id='claveCompra' />
                        </div>


                        <div className='MsjIngreso'><label><b>Detalles </b> </label> <hr></hr></div>
                        <div className='BottomIngreso'>

                            <label>Articulo: </label>
                            <input type='text' id='articulo' />

                            <label>Cantidad: </label>
                            <input type='number' id='cantidad' />

                            <label>Precio: </label>
                            <input type='number' id='precio' />
                        </div>

                        <button className='AgregarATable'>Ingresar</button>
                    </form>


                </div>

                <div className='TablaProductos'>
                    <table>
                        <thead>
                            <tr>
                                <th>Clave</th>
                                <th>Articulo</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Proveedor</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Aquí se llenará la tabla */}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total: </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>0</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div className="CyG">
                    <button className="Cancel" onClick={Cancelar}><FaRegTimesCircle /> Cancelar</button>
                    <button className="Save"><FaRegSave /> Guardar</button>
                </div>
            </div>
        </div>
    )


}

export default IngresarProductos;