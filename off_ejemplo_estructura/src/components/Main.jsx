/* eslint-disable react/prop-types */
function Main ({ count }) {
  return (
    <main
      className='flex-1 bg-gray-200 dark:bg-[#343541] overflow-y-auto mb-4'
    >
      <h1>Contador: {count}</h1>
    </main>
  )
}

export default Main
