import { Link } from "react-router-dom"

function Index() {

  const userId = 1
  const userName = 'Juana'
  const userLastName = 'Hernandez'

  return (
    <div>
      <p>Inicio</p>

      <Link to={`/saludar/${userId}?nombre=${userName}&apellido=${userLastName}`}>Saludar a usuario</Link>
    </div>
  )
}

export default Index