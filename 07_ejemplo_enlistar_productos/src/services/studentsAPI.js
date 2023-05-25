// usamos axios para hacer las peticiones a la API, alternativa a fetch
import axios from 'axios'

// creamos una instancia de axios con la URL base de la API
const studentsAPI = axios.create({
  baseURL: 'http://localhost:3000/students'
})

// exportamos una funcion que hace la peticion a la API
export const getAllStudents = async () => {
  const response = await studentsAPI.get('/')

  // obtenemos los datos de la respuesta
  // axios obtiene headers, status, statusText, data
  const data = await response.data

  // retornamos data.data.students porque la API devuelve
  // { message: 'Students', data: students }
  return data.data.students
}
