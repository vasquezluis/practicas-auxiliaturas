import './Saludar.css'
import { useState } from 'react'

function Saludar () {
  const [nombre, setNombre] = useState('')

  const submitData = (event) => {
    event.preventDefault()

    console.log(event.target.nombre.value)
  }

  return (
    <div>

      <form onSubmit={submitData}>
        <label htmlFor='nombre' style={{ marginRight: '2px' }}>Ingresa tu nombre</label>
        <input type='text' name='nombre' className='inputRight' onChange={(event) => setNombre(event.target.value)} />
        <button>Enviar</button>
      </form>

      <div>
        <h1 style={{ fontWeight: 'normal' }}>Hola <span style={{ fontWeight: 'bold' }}>{nombre}</span></h1>
      </div>

    </div>
  )
}

export default Saludar
