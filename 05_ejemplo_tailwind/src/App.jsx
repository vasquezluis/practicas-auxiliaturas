import { useState } from "react";

import Navbar from "./components/_partials/Navbar";
import Footer from "./components/_partials/Footer";
import ProductCard from "./components/ProductCard";

function App() {
  // Estado para controlar el modo oscuro
  const [darkMode, setDarkMode] = useState(false);

  return (
    // en un contenedor general colocamos la clase dark
    // si el estado de darkMode es true, se activa el modo oscuro, de lo contrario, no se aplica el modo oscuro
    <div className={darkMode ? "dark" : ""}>
      {/* En el navbar pasamos el estado de modo oscuro y la funcion que cambia su estado */}
      {/* Se envian las props con esos atributos para poder usar un boton y controlar el estado */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* los estilos de modo oscuro deben empezar con dark: */}
      {/* ej. bg-white dark:bg-slate-700 */}
      <main className="w-screen h-full bg-white dark:bg-slate-900 pt-5">
        <div className="flex flex-col text-center">
<<<<<<< HEAD
          <h1 className="block text-2xl font-bold dark:text-white">
            Listado de productos
          </h1>
          <p className="block text-xl dark:text-white">
            Productos que manejamos
          </p>
=======
          <h1 className="block text-2xl font-bold dark:text-red-500">Listado de productos</h1>
          <p className="block text-xl dark:text-white">Productos que manejamos</p>
>>>>>>> main
        </div>

        {/* Los estilos en tailwind son los mismos que en css, pero resumidos */}
        {/* flex -> display: flex */}
        {/* pt-5 ->  padding-top: 20px */}
        {/* pb-5 -> padding-bottom: 20px */}
        <div className="flex flex-wrap justify-center gap-1 pt-5 pb-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
