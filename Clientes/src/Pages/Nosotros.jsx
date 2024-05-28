import "../Estilos/InicioClientes.css";
import Menu from "../Componentes/MenuProductos.jsx";

const Nosotros =() =>
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
                    <a href="/" className="separacion"> Inicio </a>
                    <Menu />
                    <a href="#" className="separacion"> Nosotros </a>
                    <a href="#" className="separacion"> Carrito </a>
                    <a href="/Registrarse" className="separacion"> Registrarse </a>
                    <a href="/Login" className="separacion"> Iniciar sesion </a>
                </nav>
            </div>
            
            <h2 className="element04"> Nosotros </h2>

            <h3 className="subtitulo"> ¿Quienes somos? </h3>
            <p className="texto">
            En El Gallo Giro, somos una empresa líder en el sector de agroquímicos, dedicada a proporcionar 
            soluciones innovadoras y sostenibles para la agricultura. Desde nuestros inicios, nos hemos 
            comprometido a apoyar a los agricultores con productos de alta calidad que optimizan la 
            productividad de los cultivos y promueven prácticas agrícolas responsables.
            </p>
        
            <h3 className="subtitulo"> Misión. </h3>
            <p className="texto">
            Nuestra misión es impulsar el desarrollo agrícola mediante la entrega de productos agroquímicos 
            seguros y eficaces, que ayuden a los agricultores a maximizar sus cosechas y garantizar la 
            seguridad alimentaria. Trabajamos con pasión y dedicación para contribuir al bienestar de las 
            comunidades agrícolas y la preservación del medio ambiente.
            </p>

            <h3 className="subtitulo"> Visión. </h3>
            <p className="texto">
            En El Gallo Giro, visualizamos un futuro donde la agricultura sea sostenible y eficiente, 
            beneficiando tanto a los productores como al medio ambiente. Aspiramos a ser un referente 
            global en el suministro de soluciones agroquímicas, innovando continuamente para enfrentar 
            los desafíos del sector agrícola y promover una agricultura más verde y productiva.
            </p>
        </div>
    )
}
export default Nosotros;