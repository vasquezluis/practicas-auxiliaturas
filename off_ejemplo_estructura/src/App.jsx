import './App.css'
import Preguntas from './components/Preguntas'
import Carousel from 'react-multi-carousel'
// import { useState } from 'react'

// import Main from './components/Main'
// import Sidebar from './components/Sidebar'
// import { Topbar } from './components/Topbar'
// import Formulario from './components/pregunta/Formulario'

function App () {
  // const [count, setCount] = useState(0)
  // const [cantidadPreguntas, setCantidadPreguntas] = useState(0)

  return (
    <div className='flex h-screen max-h-screen py-2 sm:py-5 px-1 sm:px-28 bg-gray-200'>

      <Preguntas />
      <Carousel />
    </div>
  )
}

export default App
