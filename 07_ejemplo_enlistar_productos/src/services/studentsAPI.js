import axios from 'axios'

const studentsAPI = axios.create({
  baseURL: 'http://localhost:3000/students'
})

export const getAllStudents = async () => {
  const response = await studentsAPI.get('/')

  const data = await response.data

  return data.data.students
}
