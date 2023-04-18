import React from 'react'

// * componente de card para movie individual
// * recibe props, pero se puede desescructurar con { } para no usar props.poster props.title props.sinopsis

/* !
function MovieCard(props){
  console.log(props.poster)
}
*/

function MovieCard ({ poster, title, sinopsis, price }) {
  return (
    <div className='flex justify-center flex-wrap bg-slate-700 w-[450px] m-5'>
      <div className='p-3'>

        {/* en alt se usar backtick (comilla invertida) para combinar variables y texto en JS */}
        <img className='w-[150px]' src={poster} alt={`image of ${title}`} />
      </div>
      <p>Sinopsis: {sinopsis}</p>
      <p className='text-white'>Precio: {price}</p>
    </div>
  )
}

export default MovieCard
