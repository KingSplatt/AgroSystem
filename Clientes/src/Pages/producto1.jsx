import React from 'react'
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

const Producto1 =() => {
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
              
              <a href="/" className="separacion">
              Inicio
              </a>
              <Menu />
              <a href="/Nosotros" className="separacion">
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
              src="https://avotools.com/cdn/shop/products/herbicida-faena-fuerte-360-1-litro-811830_800x.jpg?v=1606359467"
              alt="Herbicida"
              className="element02"
            />
        </div>
          </form>
        <div className="elemnt03">
          <div>
            <h2 className="element04"> Faena Fuerte</h2>
            <p className="element05">
              <strong>Precio:</strong> $ 390.00
            </p>
            <h3 className="element06">Descripción</h3>
            <p className="element07">
              FAENA FUERTE 360 es un herbicida formulado como concentrado soluble en agua para ser aplicado 
              al follaje de la maleza que se recomienda en el cuadro. El producto es absorbido por las hojas
               y llega hasta las raíces y otras partes de la maleza ya brotada.
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

export default Producto1
