import axios from 'axios'

export const getUsers = async () => {
  const response = await axios.get('https://reqres.in/api/users')
  const data = response.data

  return data.data
}
