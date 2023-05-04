import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState (0);
  const handleClick = () => {
    setCount(count + 1)
  }

  

  return (
    <>
    <h1>Hello World</h1>
    <button onClick={handleClick}>Click Here</button>
    <h2>{count}</h2>
      
       
    </>
  )
}

export default App
