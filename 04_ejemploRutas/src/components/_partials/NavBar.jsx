import "./NavBar.css"
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          {/* NavLink es la alternativa a '<a></a>' de React */}
          {/* NavLink puede recibir una funcion con 'isActive como parametro' */}
          {/* Usamos 'isActive' para saber si el usuario hizo click en el link */}
          {/* Se usa el operador ternario para aplicar la clase active o notActive */}
          {/* La clase 'active' y 'notActive' estan declaradas en ./NavBar.css */}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "notActive")}
            to="/"
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "notActive")}
            to="/contador"
          >
            Contador
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "notActive")}
            to="/saludar"
          >
            Saludar
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
