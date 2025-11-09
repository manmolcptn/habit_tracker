import { useState } from 'react'
import { Button } from './components'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  
  const countMethod = () => {
    setCount((count) => count + 1)
  }

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMethod} />
    </>
  )
}

export default App
