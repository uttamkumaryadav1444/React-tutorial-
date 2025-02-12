import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Define a function called App
function App() {
  let [counter, setCount] = useState(0)
  // Declare a variable called counter and set it to 15
  //let counter = 15
  const addValue = ()=>{
    //console.log("Add Value", Math.random());
    console.log("Clicked", counter);

    // Increment the counter by 1
    counter = counter + 1
    setCount(counter)
  
  }
  const removeValue = ()=>{
    //console.log("remove Value", Math.random());
    console.log("Clicked", counter);

    // Decrement the counter by 1
    counter = counter - 1
    setCount(counter)
  }

  return (
    <>
      <h1>Mr.Uttam Yadav</h1>
      <h1>Counter Value : {counter}</h1>
      <br />
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <button
        onClick={removeValue}
      >remove value {counter}</button>
      <p>footer : {counter}  </p>
    </>
  )
}

export default App
