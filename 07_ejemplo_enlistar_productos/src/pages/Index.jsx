import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Link to='/products' className='bg-slate-600 p-3 rounded-lg hover:bg-slate-400 cursor-pointer text-white mx-2'>Products List</Link>
      <Link to='/students' className='bg-slate-600 p-3 rounded-lg hover:bg-slate-400 cursor-pointer text-white mx-2'>Students List</Link>
    </div>
  )
}

export default Index
