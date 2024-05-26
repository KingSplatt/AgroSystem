import ImageSlider from "../Componentes/ImageSlider.jsx";
import "../Estilos/InicioClientes.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from '../Componentes/ProductList.jsx';

const mockProducts = [
  { id: 1, name: 'Producto 1', price: 19.99, image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Producto 2', price: 29.99, image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Producto 3', price: 39.99, image: 'https://via.placeholder.com/200' },
  // Añade más productos según sea necesario
];

// Componente de detalles del producto (debes crearlo)
const ProductDetail = ({ match }) => {
  const productId = match.params.id;
  const product = mockProducts.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-detail-image" />
      <h1>{product.name}</h1>
      <p>${product.price.toFixed(2)}</p>
      <p>Detalles del producto...</p>
    </div>
  );
};

const InicioClientes =() =>
  {
    return(
      
      
      


        <div className="Encabezado">
          <h2>
            Gallo Giro - Agroquimicos.
              <div className="barraSuperior">
              <input className="input" type='search' placeholder="Buscar" />
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
                Contacto
              </a>
              <a href="#" className="separacion">
                Carrito
              </a>
            </nav>
          </div>
          <div className="txtSugerencias">
            Sugerencias
              <Switch>
                <Route path="/" exact>
                  <ProductList products={mockProducts} />
                </Route>
                {/* Ruta para los detalles del producto */}
                <Route path="/product/:id" component={ProductDetail} />
              </Switch>
          </div>
        </div>
    )
  }
  export default InicioClientes