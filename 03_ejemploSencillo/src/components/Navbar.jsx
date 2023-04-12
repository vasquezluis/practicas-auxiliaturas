function Navbar () {
  return (

    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2'>
        <div className='relative flex h-16 items-center'>
          <div className='flex flex-1 items-center justify-start'>

            {/* logo section */}
            <div className='flex flex-shrink-0 items-center'>
              <img className='block h-8 w-auto' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500' alt='LLC Restoration' />
            </div>

            {/* routes section */}
            <div className='ml-6 block'>
              <div className='flex space-x-4'>
                <a href='#' className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'>Inicio</a>

                <a href='#' className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Team</a>

                <a href='#' className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Projects</a>

                <a href='#' className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Calendar</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </nav>

  )
}

export default Navbar
