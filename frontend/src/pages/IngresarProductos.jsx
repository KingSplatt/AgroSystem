import React from 'react';
import '../Estilos/IngresarProductos.css';


const IngresarProductos = () => {

    return(


        <div className='IngresarProductos'>

            <h1>Ingresar Productos</h1>

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
                    <div className= 'BottomIngreso'>

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

        </div>
    )


}

export default IngresarProductos;