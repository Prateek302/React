import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-text mb-4'>Tailwind Test</h1>
      <Card username = "prateek" btnText='click me'/>
      <Card username= "huzaifa" btnText='see here'/>
    </>
  )
}

export default App
