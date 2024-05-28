
import React from 'react'
import "../Componentes/ProductCardv2.jsx";
import ProductList from '../Componentes/ProductList.jsx';
import Menu from "../Componentes/MenuProductos.jsx";
import "../Estilos/InicioClientes.css";
import "../Estilos/Productos.css";

const mockProducts = [
    { id: 4, name: 'Plaguicida Cipermetrina', price: 797, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfQFpAQfKmDNrCIADSfBWeNVEjKfeDJsmCQ&s' },
    { id: 5, name: 'Plaguicida Plagus', price: 4140.00, image: 'https://soporte4.jlmarketing.com.mx/wp-content/uploads/2023/10/VIGOR-PRODUCTOS_palgus-1.jpg' },
    { id: 6, name: 'Plaguicida It Enzym', price: 326.00, image: 'https://bioaplicaciones.com/cdn/shop/products/ITEnzym1080x1080.png?v=1650337734' },
  ];

const Producto5 =() => {
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
              src="https://http2.mlstatic.com/D_NQ_NP_637776-MLM49533411520_032022-O.webp"
              alt="Plaguicida"
              className="element02"
            />
        </div>
          </form>
        <div className="elemnt03">
          <div>
            <h2 className="element04"> Plagus</h2>
            <p className="element05">
              <strong>Precio:</strong> $ 4140.00
            </p>
            <h3 className="element06">Descripción</h3>
            <p className="element07">
            Palgus es un insecticida que cuenta con gran poder residual y amplio espectro de control de 
            plagas para muchos cultivos en dosis bajas. Es un gran aliado para el manejo integrado de 
            gusano cogollero, en múltiples cultivos.
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

export default Producto5
