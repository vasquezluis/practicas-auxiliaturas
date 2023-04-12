import { useState, useEffect } from 'react'
import { getUsers } from '../api/users'

function UsersList () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getResponse = async () => {
      const response = await getUsers()

      setUsers(response)
    }

    getResponse()
  }, [])

  return (
    <>
      <h1 className='font-bold text-2xl'>Users list</h1>

      <div>
        {
          users.map((user) => (
            <div key={user.id}>
              <img src={user.avatar} alt={`image of ${user.first_name}`} />
              <p>Email: {user.email}</p>
              <p>Name: {user.first_name} {user.last_name}</p>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default UsersList
