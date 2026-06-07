import React from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

if(count > 10){
  alert("Counter cannot be greater than 10")
  setCount(10)
}

if(count < -10){
  alert("Counter cannot be less than -10")
  setCount(-10)
}
 
  return (
<>
    <div className='text-center mt-20 '>

      <h1 className='text-4xl text-blue-500 mb-10 '>
        Counter App
        </h1>

        <h2 className='text-2xl text-green-500 mb-10 '>
          Count: {count}
          </h2>
        <button onClick={() => setCount(count + 1)} className='bg-green-500 text-white px-4 py-2 rounded mr-4'>
          Increment
          </button>
        <button onClick={() => setCount(count - 1)} className='bg-red-500 text-white px-4 py-2 rounded mr-4'>
          Decrement
          </button>
          <button onClick={() => setCount(0)} className='bg-gray-500 text-white px-4 py-2 rounded'>
          Reset
          </button>

          

{count > 0 && <p className='text-green-500'>Count is Positive</p>}

{count < 0 && <p className='text-red-500'>Count is Negative</p>}

{count === 0 && <p className='text-gray-500'>Count is Zero</p>}
        </div>


</>
   )
}

export default App  