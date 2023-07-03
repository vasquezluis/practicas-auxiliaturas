import { useState, useEffect } from 'react'

const intensidades = {
  baja: 'bg-green-400',
  media: 'bg-yellow-400',
  alta: 'bg-red-400'
}

/* eslint-disable react/prop-types */
function Sidebar ({ count, setCount }) {
  const [intensidad, setIntensidad] = useState('')

  useEffect(() => {
    setIntensidad(intensidades.media)
  }, [])

  return (
    <aside
      className={`xl:w-1/5 2xl:w-1/6 ${intensidad} hidden xl:flex 2xl:flex flex-col justify-between rounded-lg p-2`}
      data-testid='sideBar'
    >
      <button
        onClick={() => setCount(count - 1)}
      >
        restar
      </button>

      <button
        onClick={() => setIntensidad(intensidades.baja)}
      >
        intensidad baja
      </button>
      <button
        onClick={() => setCount('media')}
      >
        intensidad media
      </button>
      <button
        onClick={() => setCount('alta')}
      >
        intensidad alta
      </button>
    </aside>
  )
}

export default Sidebar

// orden
// hidden xl:flex
