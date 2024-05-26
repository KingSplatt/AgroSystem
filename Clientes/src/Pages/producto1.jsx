import React from 'react'
import "../Estilos/InicioClientes.css";

const cardContainerClasses = 'flex flex-col md:flex-row bg-white p-4 rounded-lg shadow-lg'
const imageClasses = ''
const buttonClasses = 'ml-auto bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600'

const producto1 = () => {
  const handleAddToCart = () => {
    alert('Selecciona exitosa')
    // Add code here to handle adding the product to the cart
  }

  return (
    <div className="container">
      <div className="element01">
        <img
          src="https://avotools.com/cdn/shop/products/herbicida-faena-fuerte-360-1-litro-811830_800x.jpg?v=1606359467"
          alt="Herbicida"
          className="element02"
        />
        <p className="">Herbicida</p>
      </div>
      <div className="elemnt03">
        <div>
          <h2 className="element04"> Faena Fuerte</h2>
          <p className="element05">
            <strong>Precio:</strong> $ 49.99
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
  )
}

export default producto1
