import { useParams, useLocation } from "react-router-dom";

function Saludar() {
  const search = useLocation().search;

  const params = new URLSearchParams(search);
  const nombre = params.get("nombre");
  const apellido = params.get("apellido");

  const { id } = useParams();

  return (
    <div>
      <h1>Saludar</h1>
      <p>
        usuario {id} - nombre{" "}
        {nombre && apellido ? `${nombre} ${apellido}` : "Anonimo"}
      </p>
    </div>
  );
}

export default Saludar;
