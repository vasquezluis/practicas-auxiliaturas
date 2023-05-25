import './styles.css'
import { useState, useEffect } from 'react'
import { products } from '../database/products'
import { useNavigate } from 'react-router-dom'

const ListProducts = () => {
  // estado para guardar los productos
  const [prods, setProds] = useState([])

  const navigate = useNavigate()

  // navegar a un producto individual cuando se haga click en un producto enlistado
  const handleClick = (id) => {
    navigate(`/products/${id}`)
  }

  // efecto para guardar los productos en el estado
  useEffect(() => {
    setProds(products)
  }, [])

  return (
    <div className='main'>
      <div>
        <h1 className='title-h1'>Lista de productos</h1>
      </div>
      <div className='grid grid-cols-4 gap-2 w-3/4'>
        {/* // recorrer los productos y enlistarlos */}
        {prods.map((prod) => (
          <div
            className='card cursor-pointer hover:bg-slate-500'
            key={prod.id}
            // evento para navegar a un producto individual
            onClick={() => handleClick(prod.id)}
          >
            <div className='card-body'>
              <h5 className='card-title'>Producto: {prod.name}</h5>
              <p className='card-text'>Descripcion: {prod.description}</p>
              <p className='card-text'>Precio: {prod.price}</p>
              <p className='card-text'>Stock: {prod.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListProducts
