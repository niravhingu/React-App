import { useState ,useEffect, use} from 'react'
import './index.css'


function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState("hello")

const increment = () => {
  if(count < 20){
    setCount(count + 1)
  }
  else{
    alert("Counter cannot be greater than 20")
  }
}

const decrement = () => {
  if(count > 0){
    setCount(count - 1)
  }
  else{
    alert("Counter cannot be less than 0")
  }
}
const reset = () => {
  setCount(0)
}

useEffect(() => {
  console.log("Counter value has been updated to : ", inputValue)
}, [inputValue])

  return (
    <>
    <div>

    <h1 className='text-4xl text-red-500 ml-90 mt-20'>{count}
    </h1>
    <div className='flex gap-x-4 mt-10 ml-50'>

      <button onClick={increment} className='bg-green-500 text-white px-4 py-2 rounded'>Increment</button>
      <br />
      <button onClick={decrement} className='bg-red-500 text-white px-4 py-2 rounded'>Decrement</button>
      <br />
      <button onClick={reset} className='bg-blue-500 text-white px-4 py-2 rounded'>Reset</button>
    </div>
    <div className='mt-10 ml-50'>
    <input type='text'
    value={inputValue}
    onChange={(a)=> setInputValue(a.target.value)}
    />

    <h1 className='text-2xl text-green-500 mt-5'>You have entered :{inputValue}</h1>
    
    </div>

    </div>
    </>
  )
}

export default App
