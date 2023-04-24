import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between items-center p-5 bg-slate-800 dark:bg-stone-800">
      <div className="flex flex-row items-center text-white text-2xl font-bold uppercase">
        <p className="block mr-4">Sition web</p>
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
