import './Contador.css'
import { useState } from 'react'

function Contador () {
  const [numero, setNumero] = useState(0)

  const sumar = () => {
    setNumero(numero + 1)
  }
  const restar = () => {
    setNumero(numero - 1)
  }
  const restart = () => {
    setNumero(0)
  }

  let color
  if (numero < 0) {
    color = 'negativo'
  } else if (numero > 0) {
    color = 'positivo'
  } else {
    color = 'neutro'
  }

  return (
    <div>

      <button style={{ marginRight: '3px' }} onClick={restar}>Restar</button>
      <button style={{ marginRight: '3px' }} onClick={restart}>Reiniciar</button>
      <button style={{ marginRight: '3px' }} onClick={sumar}>Sumar</button>

      <h2
        style={{ display: 'inline-block' }} className={color}
      >
        {numero}
      </h2>

    </div>
  )
}

export default Contador
