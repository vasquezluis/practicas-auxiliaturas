import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// #### -> En este ejemplo no se usa codigo de React, solo se usa para probar el test unitario
// ### -> se llama test unitario porque se prueban pequeñas partes del codigo
// ### -> se llama test de integracion cuando se prueban varias partes del codigo
// ### -> se llama test de aceptacion cuando se prueba todo el codigo
// ### -> se llama test de humo cuando se prueba que el codigo se ejecute
// ### -> se llama test de regresion cuando se prueba que el codigo no se rompa
// ### -> se llama test de carga cuando se prueba que el codigo soporte la carga

// ### -> podemos usar la propiedad data-testid en algunos componentes para identificar un elemento en el test

// -> este es el codigo que crea vite por defecto
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} data-testid='react-logo' className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
