import React from 'react'

const HEADER_CLASSES = 'bg-teal-600 p-4 flex justify-between items-center'
const INPUT_CLASSES = 'p-2 rounded-md border border-zinc-300'
const NAV_LINK_CLASSES = 'hover:underline'
const BUTTON_CLASSES = 'bg-blue-500 text-white py-1 px-4 rounded-md'
const PRODUCT_CARD_CLASSES = 'bg-white p-4 rounded-md shadow-md'
const PRODUCT_IMAGE_CLASSES = 'w-full h-40 object-cover mb-4'
const PRODUCT_NAME_CLASSES = 'text-lg font-semibold'
const PRODUCT_PRICE_CLASSES = 'text-zinc-500'

const InicioClientes = () => {
  return (
    <div className="min-h-screen bg-zinc-100">
      <header className={HEADER_CLASSES}>
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/100x50" alt="Logo" className="h-12" />
          <input type="text" placeholder="Buscar" className={INPUT_CLASSES} />
        </div>
        <nav className="flex space-x-4 text-white">
          <a href="#" className={NAV_LINK_CLASSES}>
            Inicio
          </a>
          <a href="#" className={NAV_LINK_CLASSES}>
            Nosotros
          </a>
          <a href="#" className={NAV_LINK_CLASSES}>
            Productos
          </a>
          <a href="#" className={NAV_LINK_CLASSES}>
            Contacto
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white">
            <img src="https://placehold.co/24x24" alt="Cart" />
          </a>
          <a href="#" className="text-white">
            Ayuda
          </a>
        </div>
      </header>

      <section className="relative bg-white">
        <img src="https://placehold.co/1200x300" alt="Banner" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl font-bold text-white">2.5% de descuento</p>
            <p className="text-xl text-yellow-300">Esta es una imagen de ejemplo</p>
            <button className={BUTTON_CLASSES}>Explorar catálogo</button>
          </div>
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-xl font-bold mb-4">Sugerencias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className={PRODUCT_CARD_CLASSES}>
              <img
                src="https://placehold.co/150x150"
                alt="Producto"
                className={PRODUCT_IMAGE_CLASSES}
              />
              <h3 className={PRODUCT_NAME_CLASSES}>Nombre</h3>
              <p className={PRODUCT_PRICE_CLASSES}>$ XXXX.XX</p>
              <button className={BUTTON_CLASSES}>Ver producto</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default InicioClientes