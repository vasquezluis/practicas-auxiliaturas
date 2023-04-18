import './App.css'
import Navbar from './components/Navbar'
import MoviesList from './components/MoviesList'

// * componente basico de React
function App () {
  return (
    //  <> y </> son fragment -> remplazo de div
    <>

      {/* Llamar al navbar por componentes */}
      <Navbar />

      {/* Llamar a la lista de peliculas (componente) */}
      {/* p-2 dentro de className pertenece al framework de CSS -> Tailwind (se instala por aparte) */}
      <div className='p-2'>
        <MoviesList />
      </div>

      {/* crear componentes de footer o section por componentes y llamarlos en App */}

      {/* <Section /> */}

      {/* <LoginUsuario /> */}

      {/* <Footer /> */}

    </>

  )
}

export default App
