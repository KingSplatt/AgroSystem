import "../Estilos/InicioClientes.css";
import Menu from "../Componentes/MenuProductos.jsx";
import ProductList from '../Componentes/ProductList.jsx';

const mockProducts = [
  { id: 1, name: 'Herbicida Faena Fuerte', price: 390.00, image: 'https://avotools.com/cdn/shop/products/herbicida-faena-fuerte-360-1-litro-811830_800x.jpg?v=1606359467' },
  { id: 2, name: 'Herbicida Amina', price: 249.99, image: 'https://interagro.mx/wp-content/uploads/2020/03/AMINA-1L.jpg' },
  { id: 3, name: 'Herbicida Centella', price: 499.00, image: 'https://interagro.mx/wp-content/uploads/2020/03/CENTELLA-1L.jpg' },
  // Se añaden productos según sea necesario.
];

const Herbicidas =() =>
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
          <div className="txtSugerencias">
            Herbicidas
                <ProductList products={mockProducts} />
          </div>
        </div>
    )
  }
  export default Herbicidas