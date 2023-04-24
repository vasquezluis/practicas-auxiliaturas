import { useState } from "react";

import Navbar from "./components/_partials/Navbar";
import Footer from "./components/_partials/Footer";
import ProductCard from "./components/ProductCard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="w-screen h-full bg-white dark:bg-slate-900 pt-5">
        <div className="flex flex-col text-center">
          <h1 className="block text-2xl font-bold dark:text-white">Listado de productos</h1>
          <p className="block text-xl dark:text-white">Productos que manejamos</p>
        </div>

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
