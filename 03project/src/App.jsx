import { useState } from 'react'
import './App.css'
import Hello from './components/card.jsx'



function App() {
 

  return (
    <>

    <h1 className='bg-blue-500 text-white p-4 rounded  '>Tailwind Test</h1>
    <Hello username="John Doe" />
    <Hello username1="Jane Smith" />
    </>
  )
}

export default App
