import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ListProducts from './pages/ListProducts'
import ListStudents from './pages/ListStudents'
import Product from './pages/Product'
import Index from './pages/Index'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/products' element={<ListProducts />} />
        <Route path='/products/:id' element={<Product />} />

        <Route path='/students' element={<ListStudents />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
