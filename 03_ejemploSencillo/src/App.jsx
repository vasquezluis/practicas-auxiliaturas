import './App.css'
import Navbar from './components/Navbar'
import UsersList from './components/UsersList'

function App () {
  return (
    <>
      <Navbar />

      <div className='p-2'>
        <UsersList />
      </div>

    </>

  )
}

export default App
