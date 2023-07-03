// eslint-disable-next-line react/prop-types
import './styles.css'
export function Topbar ({ count, setCount }) {
  // -> donde van los hooks

  return (
    <div className='bg-gray-200 dark:bg-[#343541] h-12 mb-4 flex justify-end items-center'>
      <button
        className='topButton'
        onClick={() => setCount(count + 1)}
      >incrementar
      </button>
    </div>
  )
}
