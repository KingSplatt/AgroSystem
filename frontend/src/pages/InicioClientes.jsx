import React from 'react';

const InicioClientes = () => {
    <div class="min-h-screen bg-zinc-100">
    <header class="bg-teal-600 p-4 flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <img src="https://placehold.co/100x50" alt="Logo" class="h-12" />
        <input type="text" placeholder="Buscar" class="p-2 rounded-md border border-zinc-300" />
      </div>
      <nav class="flex space-x-4 text-white">
        <a href="#" class="hover:underline">Inicio</a>
        <a href="#" class="hover:underline">Nosotros</a>
        <a href="#" class="hover:underline">Productos</a>
        <a href="#" class="hover:underline">Contacto</a>
      </nav>
      <div class="flex items-center space-x-4">
        <a href="#" class="text-white"><img src="https://placehold.co/24x24" alt="Cart" /></a>
        <a href="#" class="text-white">Ayuda</a>
      </div>
    </header>
  
    <section class="relative bg-white">
      <img src="https://placehold.co/1200x300" alt="Banner" class="w-full" />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <p class="text-4xl font-bold text-white">2.5% de descuento</p>
          <p class="text-xl text-yellow-300">Esta es una imagen de ejemplo</p>
          <button class="mt-4 bg-pink-500 text-white py-2 px-4 rounded-full">
            Explorar catálogo
          </button>
        </div>
      </div>
    </section>
  
    <section class="p-4">
      <h2 class="text-xl font-bold mb-4">Sugerencias</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div class="bg-white p-4 rounded-md shadow-md">
          <img
            src="https://placehold.co/150x150"
            alt="Producto"
            class="w-full h-40 object-cover mb-4"
          />
          <h3 class="text-lg font-semibold">Nombre</h3>
          <p class="text-zinc-500">$ XXXX.XX</p>
          <button class="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md">Ver producto</button>
        </div>
        <div class="bg-white p-4 rounded-md shadow-md">
          <img
            src="https://placehold.co/150x150"
            alt="Producto"
            class="w-full h-40 object-cover mb-4"
          />
          <h3 class="text-lg font-semibold">Nombre</h3>
          <p class="text-zinc-500">$ XXXX.XX</p>
          <button class="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md">Ver producto</button>
        </div>
        <div class="bg-white p-4 rounded-md shadow-md">
          <img
            src="https://placehold.co/150x150"
            alt="Producto"
            class="w-full h-40 object-cover mb-4"
          />
          <h3 class="text-lg font-semibold">Nombre</h3>
          <p class="text-zinc-500">$ XXXX.XX</p>
          <button class="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md">Ver producto</button>
        </div>
        <div class="bg-white p-4 rounded-md shadow-md">
          <img
            src="https://placehold.co/150x150"
            alt="Producto"
            class="w-full h-40 object-cover mb-4"
          />
          <h3 class="text-lg font-semibold">Nombre</h3>
          <p class="text-zinc-500">$ XXXX.XX</p>
          <button class="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md">Ver producto</button>
        </div>
        <div class="bg-white p-4 rounded-md shadow-md">
          <img
            src="https://placehold.co/150x150"
            alt="Producto"
            class="w-full h-40 object-cover mb-4"
          />
          <h3 class="text-lg font-semibold">Nombre</h3>
          <p class="text-zinc-500">$ XXXX.XX</p>
          <button class="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md">Ver producto</button>
        </div>
      </div>
    </section>
  </div>
}

export default InicioClientes();