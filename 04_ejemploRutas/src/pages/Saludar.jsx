import { useParams, useLocation } from "react-router-dom";

function Saludar() {
  const search = useLocation().search;

  // * -> parametros en la URL: id
  const params = new URLSearchParams(search);
  // * obtenemos {id} de params porque asi lo declaramos en las rutas (App.jsx)
  const { id } = useParams();

  // * -> queries, pueden existir o no
  // (ejemplo) -> http:localhost:5173/saludar/1?nombre=Luis&apellido=Vasquez
  const nombre = params.get("nombre");
  const apellido = params.get("apellido");

  return (
    <div>
      <h1>Saludar</h1>
      <p>usuario {id}</p>
      <p>
        {/* operador ternario -> expresion ? then : else */}
        {/* El operador ternario revisa si nombre y apellido existen para imprimirlos, de los contrario imprime 'Anonimo' */}
        {/* backtick -> `` (comillas invertidas ⤵) se usa para combinar texto normal y, variables o expresiones */}
        Nombre: {nombre && apellido ? `${nombre} ${apellido}` : "Anonimo"}
      </p>
    </div>
  );
}

export default Saludar;
