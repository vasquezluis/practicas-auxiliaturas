import { useState } from 'react'

const TALLERES1 = [
  { id: 1, nombre: 'Taller de autoaprendizaje', disponibles: 0 },
  { id: 2, nombre: 'Taller de programación', disponibles: 5 },
  { id: 3, nombre: 'Taller de diseño', disponibles: 3 },
  { id: 4, nombre: 'Taller de emprendimiento', disponibles: 3 },
  { id: 5, nombre: 'Taller de marketing', disponibles: 0 }
]

const TALLERES2 = [
  { id: 6, nombre: 'Taller de videojuegos', disponibles: 10 },
  { id: 7, nombre: 'Taller de vision artificial', disponibles: 5 },
  { id: 8, nombre: 'Taller de IA', disponibles: 7 },
  { id: 9, nombre: 'Taller de logica', disponibles: 5 },
  { id: 10, nombre: 'Taller de estadistica', disponibles: 2 }
]

function Preguntas () {
  const [question, setQuestion] = useState('')
  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      pregunta: question,
      fruta: option1,
      fruto: option2
    }

    console.log(userData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <label
            className='text-gray-700 text-sm font-bold mb-2'
            htmlFor='pregunta'
          >
            Pregunta
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='pregunta'
            type='text'
            placeholder='Pregunta'
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        <div className='flex flex-col mt-2'>
          <select
            name=''
            id=''
            className='mt-2'
            onChange={(e) => setOption1(e.target.value)}
          >
            <option value=''>Elije un taller</option>
            {TALLERES1.map((taller) => {
              if (taller.disponibles > 0) {
                return (
                  <option className='text-gray-900' key={taller.id} value={taller.nombre}>
                    {taller.nombre}
                  </option>
                )
              } else {
                return (
                  <option className='text-gray-300' key={taller.id} disabled value={taller.nombre}>
                    {taller.nombre}
                  </option>
                )
              }
            })}
          </select>

          <select
            name=''
            id=''
            className='mt-2'
            onChange={(e) => setOption2(e.target.value)}
          >
            <option value=''>Elije un taller</option>
            {TALLERES2.map((taller) => (
              <option key={taller.id} value={taller.nombre}>
                {taller.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='flex justify-center mt-4'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default Preguntas
