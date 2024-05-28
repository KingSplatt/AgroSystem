import React from 'react'
import "../Componentes/ProductCardv2.jsx";
import ProductList from '../Componentes/ProductList.jsx';
import "../Estilos/InicioClientes.css";
import "../Estilos/Productos.css";

const mockProducts = [
  { id: 1, name: 'Herbicida Faena Fuerte', price: 49.99, image: 'https://avotools.com/cdn/shop/products/herbicida-faena-fuerte-360-1-litro-811830_800x.jpg?v=1606359467' },
  { id: 2, name: 'Herbicida Amina', price: 39.99, image: 'https://interagro.mx/wp-content/uploads/2020/03/AMINA-1L.jpg' },
  { id: 3, name: 'Herbicida Centella', price: 39.99, image: 'https://interagro.mx/wp-content/uploads/2020/03/CENTELLA-1L.jpg' },
  // Se añaden productos según sea necesario.
];

const Producto3 =() => {
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
              <a href="#" className="separacion">
                Nosotros
              </a>
              <a href="#" className="separacion">
                Productos
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
              src="https://interagro.mx/wp-content/uploads/2020/03/CENTELLA-1L.jpg"
              alt="Herbicida"
              className="element02"
            />
        </div>
          </form>
        <div className="elemnt03">
          <div>
            <h2 className="element04"> Centella</h2>
            <p className="element05">
              <strong>Precio:</strong> $ 39.99
            </p>
            <h3 className="element06">Descripción</h3>
            <p className="element07">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tempor vulputate, primis ornare
              magna a senectus conubia malesuada vestibulum, metus euismod dictumst posuere
              scelerisque dis nascetur litora. Aliquet urna neque facilisis sodales iaculis non dis
              velit, dui phasellus per nostra maecenas suscipit risus, egestas pharetra condimentum
              ultrices congue varius platea.
            </p>
            <p className="element08">
              <strong>Categoría:</strong> Categoria ejemplo
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

export default Producto3
