import React from 'react'
import ProductList from '../Componentes/ProductList.jsx';
import Menu from "../Componentes/MenuProductos.jsx";
import "../Estilos/InicioClientes.css";
import "../Estilos/Productos.css";

const mockProducts = [
    { id: 4, name: 'Plaguicida Cipermetrina', price: 797, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfQFpAQfKmDNrCIADSfBWeNVEjKfeDJsmCQ&s' },
    { id: 5, name: 'Plaguicida Plagus', price: 4140.00, image: 'https://soporte4.jlmarketing.com.mx/wp-content/uploads/2023/10/VIGOR-PRODUCTOS_palgus-1.jpg' },
    { id: 6, name: 'Plaguicida It Enzym', price: 326.00, image: 'https://bioaplicaciones.com/cdn/shop/products/ITEnzym1080x1080.png?v=1650337734' },
  ];

const Producto6 =() => {
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
              src="https://bioaplicaciones.com/cdn/shop/products/ITEnzym1080x1080.png?v=1650337734"
              alt="Plaguicida"
              className="element02"
            />
        </div>
          </form>
        <div className="elemnt03">
          <div>
            <h2 className="element04"> It Enzym</h2>
            <p className="element05">
              <strong>Precio:</strong> $ 326.00
            </p>
            <h3 className="element06">Descripción</h3>
            <p className="element07">
            IT ENZYM es un Insecticida y Acaricida Orgánico. Por su acción combate eficazmente Diaphoryna, 
            Minadores de la hoja, Mosca blanca, Araña roja, Pulgones, Paratrioza, Arador, Aedes Aegypti y 
            otros insectos de cuerpo blando, en todos sus estadios, como huevecillos, larvas y adultos que 
            afectan la producción agrícola.
            </p>
            <p className="element08">
              <strong>Categoría:</strong> Plaguicida
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

export default Producto6
