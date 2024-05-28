import ImageSlider from "../Componentes/ImageSlider.jsx";
import "../Estilos/InicioClientes.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from '../Componentes/ProductList.jsx';

const mockProducts = [
  { id: 1, name: 'Herbicida Faena Fuerte', price: 49.99, image: 'https://avotools.com/cdn/shop/products/herbicida-faena-fuerte-360-1-litro-811830_800x.jpg?v=1606359467' },
  { id: 2, name: 'Herbicida Amina', price: 39.99, image: 'https://interagro.mx/wp-content/uploads/2020/03/AMINA-1L.jpg' },
  { id: 3, name: 'Herbicida Centella', price: 39.99, image: 'https://interagro.mx/wp-content/uploads/2020/03/CENTELLA-1L.jpg' },
  // Se añaden productos según sea necesario.
];

const InicioClientes =() =>
  {
    return(
        <div className="EncabezadoTop">
          <h2>
            Gallo Giro - Agroquimicos.
              <div className="">
              <input className="inputBarra" type='search' placeholder="Buscar" />
              </div>
          </h2>
          <div>
            <nav className="centrado">
              
              <a href="#" className="separacion">
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
              <a href="#" className="separacion">
                Iniciar sesion
              </a>
            </nav>
          </div>
          <div className="txtSugerencias">
            Sugerencias
                <ProductList products={mockProducts} />
          </div>
        </div>
    )
  }
  export default InicioClientes