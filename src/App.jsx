import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState (0);
  const handleClick = () => {
    setCount(count + 1)
  }

  

  return (
    <>
    <div className='bg-gray-300 flex flex-col flecol'>
      <h1 className='text-blue-500'>HELLO</h1>
      <h2 className='text-blue-800'>Hello Down Here</h2>
      <h4>hi</h4>
      <h1>h1</h1>
    </div>
    </>
  )
}

export default App
