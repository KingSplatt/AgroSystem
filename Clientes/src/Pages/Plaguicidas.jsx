import "../Estilos/InicioClientes.css";
import Menu from "../Componentes/MenuProductos.jsx";
import ProductList from '../Componentes/ProductList.jsx';

const mockProducts = [
  { id: 4, name: 'Plaguicida Cipermetrina', price: 797.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfQFpAQfKmDNrCIADSfBWeNVEjKfeDJsmCQ&s' },
  { id: 5, name: 'Plaguicida Plagus', price: 4140.00, image: 'https://soporte4.jlmarketing.com.mx/wp-content/uploads/2023/10/VIGOR-PRODUCTOS_palgus-1.jpg' },
  { id: 6, name: 'Plaguicida It Enzym', price: 326.00, image: 'https://bioaplicaciones.com/cdn/shop/products/ITEnzym1080x1080.png?v=1650337734' },
];

const Plaguicidas =() =>
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
          <div className="txtSugerencias">
            Plaguicidas
                <ProductList products={mockProducts} />
          </div>
        </div>
    )
  }
  export default Plaguicidas