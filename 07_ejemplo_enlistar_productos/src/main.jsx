import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// usamos los componentes de react-query
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

// IMPORTANTE
// para usar react query debemos envolver nuestra aplicacion con el componente QueryClientProvider

// MAS IMPORTANTE
// react query hace peticiones al backend cada vez que:
// -> se monta el componente
// -> se actualiza el componente
// -> se desmonta el componente
// -> cuando cambiamos de pestana en el navegador
// -> cuando cambiamos de programa en el computador
// -> cada 5 segundos (por defecto)
// -> cada vez que se actualiza la informacion en el backend
// -> 1 segundo para tratar de reconectarse al backend si se pierde la conexion

// -> podemos controlar cuando se hacen las peticiones al backend con el hook useQuery
// -> podemos cambiar el tiempo de reconexion con el hook useQueryClient
// -> podemos controlar desabilitar las peticiones al backend cuando cambiamos de pestana o programa con el hook useIsFetching
// -> podemos hacer solo una peticion cuando carga la pagina -> disminuye la carga en el backend

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* podemos usar este componente para controlar los datos que vienen del backend */}
      {/* es el icono de abajo a la izquierda */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
)
