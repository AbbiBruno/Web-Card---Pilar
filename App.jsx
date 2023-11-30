import { useState } from 'react'
import './App.css'
import Countdown from './api/CountDown'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
 <Countdown/>
    </>
  )
}

export default App
