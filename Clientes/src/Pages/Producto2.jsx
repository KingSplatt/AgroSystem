import React from 'react'
import "../Componentes/ProductCardv2.jsx";
import ProductList from '../Componentes/ProductList.jsx';
import Menu from "../Componentes/MenuProductos.jsx";
import "../Estilos/InicioClientes.css";
import "../Estilos/Productos.css";

const mockProducts = [
  { id: 1, name: 'Herbicida Faena Fuerte', price: 390.00, image: 'https://avotools.com/cdn/shop/products/herbicida-faena-fuerte-360-1-litro-811830_800x.jpg?v=1606359467' },
  { id: 2, name: 'Herbicida Amina', price: 249.99, image: 'https://interagro.mx/wp-content/uploads/2020/03/AMINA-1L.jpg' },
  { id: 3, name: 'Herbicida Centella', price: 499.00, image: 'https://interagro.mx/wp-content/uploads/2020/03/CENTELLA-1L.jpg' },
  // Se añaden productos según sea necesario.
];

const Producto2 =() => {
  const handleAddToCart = () => {
    alert('Selecciona exitosa')
    // Add code here to handle adding the product to the cart
  }

  return (
    //Parte del encabezado
    <div className='EncabezadoTop'>
      <h2>
            Gallo Giro - Agroquimicos.
              <div>
              <input className="inputBarra" type='search' placeholder="Buscar" />
              </div>
          </h2>
          <div>
            <nav className="centrado">
              
              <a href="/InicioClientes" className="separacion">
              Inicio
              </a>
              <Menu />
              <a href="#" className="separacion">
                Nosotros
              </a>
              <a href="#" className="separacion">
                Carrito
              </a>
              <a href="/Registrarse" className="separacion">
                Registrarse
              </a>
              <a href="/Login" className="separacion">
                Iniciar sesion
              </a>
            </nav>
          </div>
      
      
      <div className="Formulario">
        <div className="form">
          <form action="">
            <div className="element01">
            <img
              src="https://interagro.mx/wp-content/uploads/2020/03/AMINA-1L.jpg"
              alt="Herbicida"
              className="element02"
            />
        </div>
          </form>
        <div className="elemnt03">
          <div>
            <h2 className="element04"> Amina</h2>
            <p className="element05">
              <strong>Precio:</strong> $ 249.99
            </p>
            <h3 className="element06">Descripción</h3>
            <p className="element07">
            AMINA FUERTE es un herbicida agrícola a base de ácido 2,4-D AMINA que actúa en forma sistémica 
            a través de hojas y tallos, afectando los tejidos de crecimiento. Es selectivo a gramíneas y 
            elimina maleza de hoja ancha anual y perene. No es residual ni volátil, por lo tanto no afecta 
            cultivos susceptibles.
            </p>
            <p className="element08">
              <strong>Categoría:</strong> Herbicida
            </p>
          </div>
          <div className="element09">
            <label htmlFor="quantity" className="element08">
              <strong>Cantidad:</strong>
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              defaultValue="1"
              className="element10"
            />
            <button id="Agregar al carrito" className="element11" onClick={handleAddToCart}>
              Añadir al carrito
            </button>
          </div>
        </div>
        </div>
      </div>


      <div className="txtSugerencias">
            Sugerencias
                <ProductList products={mockProducts} />
      </div>
    </div>

  )
}

export default Producto2
