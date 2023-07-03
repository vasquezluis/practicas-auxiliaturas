import './App.css'
import { useState } from 'react'

import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { Topbar } from './components/Topbar'
import Formulario from './components/pregunta/Formulario'

function App () {
  const [count, setCount] = useState(0)
  const [cantidadPreguntas, setCantidadPreguntas] = useState(0)

  return (
    <div className='flex h-screen max-h-screen py-2 sm:py-5 px-1 sm:px-28 bg-gray-200'>
      {/* <button
        onClick={() => setCantidadPreguntas(cantidadPreguntas + 1)}
      >
        agregar pregunta
      </button>
      <button
        onClick={() => setCantidadPreguntas(cantidadPreguntas - 1)}
      >
        quitar pregunta
      </button>

      {
        Array.from({ length: cantidadPreguntas }).map((_, index) => (
          // <div key={index}>
          //   <input
          //     type='text'
          //     placeholder='Titulo de pregunta'
          //   />
          // </div>
          <Formulario
            key={index}
          />

        ))
      } */}

      <Sidebar
        count={count}
        setCount={setCount}
      />
      <div className='flex flex-col flex-1 px-3'>
        <Topbar
          count={count}
          setCount={setCount}
        />
        <Main
          count={count}
        />
      </div>
    </div>
  )
}

export default App
