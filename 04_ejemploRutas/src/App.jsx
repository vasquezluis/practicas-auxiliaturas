import "./App.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// * COMPONENTS <- importar comonentes generales para cualquier pagina
import NavBar from "./components/_partials/NavBar";
import Footer from "./components/_partials/Footer";

// * PAGES <- importar paginas a usar (tambien son componentes)
import Saludos from "./pages/Saludos";
import Saludar from "./pages/Saludar";
import Contador from "./pages/Contador";
import Index from "./pages/Index";

function App() {
  return (
    // * -> se usa BrowserRouter como componentes y envolver a todas las rutas
    <BrowserRouter>
      {/* Navbar que se muestra en cualquier pagina */}
      <NavBar />

      {/* conjunto de rutas -> paginas */}
      <Routes>
        {/* rutas de la aplicacion */}
        <Route path="/" element={<Index />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/saludar" element={<Saludos />} />
        {/* Esta ruta puede recibir un parametro (id), si lo recibe, usa otra pagina*/}
        <Route path="/saludar/:id" element={<Saludar />} />

        {/* esta pagina redirecciona la URL (/counter -> /contador) */}
        <Route
          path="/counter"
          element={<Navigate replace to="/contador"></Navigate>}
        ></Route>

        {/* cualquier otra URL que no coincida con las anteriores va a imprimir un 'Not Found' */}
        <Route path="*" element={<p>Not Found</p>} />

      </Routes>
 

      {/* footer que se muestra en todas las paginas */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
