import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ComponentB from './ComponentB'

// other component
export function ComponentA(){
  return (  
    <>
    <p>This is the demo component to atttatch in one file.</p>
    </>
  )
}



function App() {
  const [counter, setCounter] = useState(0); 
  const [name, setName] = useState(0);   


// let counter= 5
const addvalue=()=>{
  setCounter(counter+1)
  console.log("add value",counter)
}

const removevalue=()=>{
  setName(name-1)
  console.log("remove value",name)
  }
  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addvalue}
    >Add value: {counter}</button>
    <br></br>
    <button
    onClick={removevalue}
    >remove Button: {name}</button>
    <p>Footer : {counter}</p>
    <ComponentA/>
    <ComponentB/>
    </>

  )

}



export default App

