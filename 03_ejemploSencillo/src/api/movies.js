import axios from 'axios'

// * funcion para llamar a la API
// * async y await para funcionamiento asincrono -> buscar asincronismo en JS
// * se usa axios porque es facil de usar -> alternativa: fetch
// * axios.get para obtener datos -> para crear: axios.post -> actualizar: axios.put -> eliminar axios.delete
// * la constante data obtene la data de response, porque axios devuelve metadata que no sirve en este ejemplo
// * se retorna data.body porque data contiene {message, body} (respuesta del Backend), solo nos interesa body de momento

export const getMovies = async () => {
  const response = await axios.get('https://backendmoviesexample.onrender.com/api/v1/movies')
  const data = response.data

  return data.body
}
