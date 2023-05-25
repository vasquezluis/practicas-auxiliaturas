import "./App.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// * COMPONENTS
import NavBar from "./components/_partials/NavBar";
import Footer from "./components/_partials/Footer";

// * PAGES
import Saludos from "./pages/Saludos";
import Saludar from "./pages/Saludar";
import Contador from "./pages/Contador";
import Index from "./pages/Index";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/saludar" element={<Saludos />} />
        <Route path="/saludar/:id" element={<Saludar />} />

        <Route
          path="/counter"
          element={<Navigate replace to="/contador"></Navigate>}
        ></Route>

        <Route path="*" element={<p>Not Found</p>} />

      </Routes>
 

      <Footer />
    </BrowserRouter>
  );
}

export default App;
