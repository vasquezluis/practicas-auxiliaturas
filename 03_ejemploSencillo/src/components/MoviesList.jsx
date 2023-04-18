import { useState, useEffect } from 'react'
import { getMovies } from '../api/movies'
import MovieCard from './MovieCard'

// * Lista de peliculas
function MoviesList () {
  // * estado basico
  // * movies => estado
  // * setMovies => funcion que permite modificar el estado
  // * usestate([]) => valor inicial del estado (un array vacio en este ejemplo)
  const [movies, setMovies] = useState([])

  // * efecto basico -> se ejecuta segun la dependecia
  // * recibe una funcion de tipo flecha que se ejecuta cada vez que cambie la dependencia
  useEffect(() => {
    // * se ejecuta la llamada a la funcion que recibe los datos de la API

    // ! async y await hacen mencion al asincronismo en JS -> buscar
    const getResponse = async () => {
      const response = await getMovies()

      // * setMovies modifica el estado -> ahora tiene los datos de response
      setMovies(response)
    }

    // * se ejecuta la funcion
    getResponse()
  }, []) /* -> [] <- como dependencia significa que lo de dentro del useEffect se va a ejecutar una sola vez al montar el componente / recargar la pagina  */

  return (
    // * retorna un frament -> alternativa a div
    <>
      {/*  lo de dentro del className son clases de Tailwind -> se instala por aparte */}
      <h1 className='font-bold text-2xl block text-center'>Movies list</h1>

      <div className='flex flex-wrap justify-center'>
        {/* la forma de ejecutar codigo de JS dentro del return de un componente es con { } */}
        {/* movies contiene los datos de la respuesta de la API */}
        {/* se puede usar map para recorrer los elementos del array de movies, pero se puede usar forEach o for */}

        {movies.map((movie) => (
          // * movie es cada objeto individual del array de movies
          // * se llama al componente MovieCard y se le pasan props(parametros)
          <MovieCard
            key={movie._id}
            poster={movie.poster}
            title={movie.title}
            sinopsis={movie.sinopsis}
            price={movie.price}
          />
        ))}
      </div>
    </>
  )
}

export default MoviesList
