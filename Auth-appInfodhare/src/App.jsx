import { useState } from 'react'
import './App.css'
import {Students} from './components/students'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <Students></Students>
    </div>
  )
}

export default App
