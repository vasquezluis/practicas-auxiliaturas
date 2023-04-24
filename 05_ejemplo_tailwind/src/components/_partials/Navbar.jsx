import { BsFillMoonStarsFill } from "react-icons/bs";

// recibimos el estado actual del modo oscuro y la funcion que cambia ese estado
function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between items-center p-5 bg-slate-800 dark:bg-stone-800">
      <div className="flex flex-row items-center text-white text-2xl font-bold uppercase">
        <p className="block mr-4">Sition web</p>
        {/* usando iconos de react-icons podemos crear un boton para cambiar el modo oscuro */}
        {/* usamos un onClick para cambiar el estado del modo oscuro */}
        <BsFillMoonStarsFill className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}/>
      </div>
      <ul className="flex list-none m-0 p-0">
        <li className="">
          <a className="ml-5 text-slate-300 hover:text-white" href="#">
            Inicio
          </a>
        </li>
        <li className="">
          <a className="ml-5 text-slate-300 hover:text-white" href="#">
            Servicios
          </a>
        </li>
        <li className="">
          <a className="ml-5 text-slate-300 hover:text-white" href="#">
            Tienda
          </a>
        </li>
        <li className="">
          <a className="ml-5 text-slate-300 hover:text-white" href="#">
            Acerca de
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
