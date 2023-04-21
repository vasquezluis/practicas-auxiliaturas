import "./NavBar.css"
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
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
