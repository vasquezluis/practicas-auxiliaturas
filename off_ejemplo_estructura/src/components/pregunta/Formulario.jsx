/* eslint-disable react/prop-types */
import { useState } from 'react'

/**
 * function Formulario que crea formularios independientes
 * @param {number} formularioId el id del formulario
 * @returns {JSX.Element}
 */
function Formulario ({ formularioId }) {
  const [tipoFormulario, setTipoFormulario] = useState(1)
  const [input, setInput] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState(false)
  const [input4, setInput4] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const pregunta = {
      id: formularioId, // ejemplo: sa2234-234sdf-234sdf
      formularioId,
      values: {
        titulo: input,
        pregunta: tipoFormulario === 1 ? input2 : [input3, input4]
      }
    }

    // enviar al backend

    console.log(pregunta)
    setInput('')
    tipoFormulario === 1 && setInput2('')
    tipoFormulario === 2 && setInput3(false)
    tipoFormulario === 2 && setInput4(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Titulo</h1>
        <label>Titulo de pregunta</label>
        <input
          type='text'
          placeholder='Titulo de pregunta'
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type='submit'>
          Enviar
        </button>
        <button
          type='button'
          onClick={() => setTipoFormulario(() => tipoFormulario === 1 ? 2 : 1)}
        >cambiar tipo
        </button>
        <p>{tipoFormulario}</p>

        {tipoFormulario === 1
          ? (
            <>
              <input
                type='text'
                value={input2}
                onChange={(event) => setInput2(event.target.value)}
              />
            </>
            )
          : (
            <>
              <label>check 1</label>
              <input
                type='checkbox'
                value={input3}
                onChange={(event) => setInput3(event.target.value)}
              />
              <label>check 2</label>
              <input
                type='checkbox'
                value={input4}
                onChange={(event) => setInput4(event.target.value)}
              />
            </>
            )}
      </form>
    </>
  )
}

export default Formulario
