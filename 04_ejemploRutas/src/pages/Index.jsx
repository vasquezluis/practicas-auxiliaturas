import { Link } from "react-router-dom";

function Index() {
  const userId = 1;
  const userName = "Juana";
  const userLastName = "Hernandez";

  return (
    <div>
      <p>Inicio</p>

      {/* Link se usa para direccionar a otra pagina (HTML -> <a></a>) */}
      {/* En este ejemplo se apunta a la ruta '/saludar' con el parametro 1, y las queries Juana Hernandez */}
      {/* ej. /saludar/1?nombre=Juana&apellido=Hernandez */}
      <Link
        to={`/saludar/${userId}?nombre=${userName}&apellido=${userLastName}`}
      >
        Saludar a usuario
      </Link>
    </div>
  );
}

export default Index;
