import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  

  // let counter = 15

  

  const addValue = () => {
    
    // counter = counter + 1;
    // console.log("clicked", counter); 
      if(counter < 20){
        setCounter(counter + 1)
      }
      else {
        alert("Counter reached maximum value!");
      }
  }

  const removeValue = () => {
    if(counter>0){
      setCounter (counter - 1 )
    }
    else {
      alert("Counter reached minimum value!");
    }
    
  }

  return (
    <>
      <h1>chai aur react</h1>
       <h2>counter value : {counter}</h2>

       <button
        onClick={addValue}>Add Value {counter}</button>

        <br/>
       <button
       onClick={removeValue}>Remove value{counter}</button>
    </>
  )
}

export default App
