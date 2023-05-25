import { useQuery } from 'react-query'
import { getAllStudents } from '../services/studentsAPI'

const ListStudents = () => {
  const { data: students, isLoading, isError, error } = useQuery({
    queryKey: 'students',
    queryFn: getAllStudents
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div>
        <h1 className='text-center'>Lista de estudiantes desde un backend</h1>
        <h3 className='text-center'>Usando react query</h3>
      </div>
      <div className='flex flex-wrap gap-2'>
        {students.map(student => (
          <div className='bg-green-700 p-3 rounded-lg' key={student.id}>
            <h2>nombre: {student.name}</h2>
            <p>grado: {student.grade}</p>
            <p>edad: {student.age}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListStudents
