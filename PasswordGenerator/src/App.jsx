import { useState , useCallback, useEffect, useRef} from 'react'
import './index.css'

function App() {

  const [length, setLength] = useState(8)
  const [numbersallowed, setNumbersAllowed] = useState(false)
  const [charallowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbersallowed) str += "0123456789"
    if(charallowed) str += "!@#$%^&*()_+"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numbersallowed, charallowed, setPassword])

  useEffect(() => {passwordGenerator()}, [length , numbersallowed , charallowed])

  const copypasswordtoclipboard = useCallback(() => {
    passwordref.current.select()
    window.navigator.clipboard.writeText(password)
    
  }, [password]) 
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-50 text-black-500 bg-white'>
     <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-2'> 
      <input type="text" 
      value={password}
      className='outline-none w-full px-2 py-3 mb-3 text-white bg-black'
      placeholder='Your Password' readOnly
      ref={passwordref}
      />
      <button 
      onClick={copypasswordtoclipboard}
      className='outline-none bg-orange-500 text-white px-4 py-3 mb-3 cursor-pointer ' >Copy</button>
       </div>
       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 mb-6'>
          <input type="Range"
          min={8}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1 mb-6'>
          <input type="checkbox"
          defaultChecked={numbersallowed}
          id='Numberinput'
          onChange={() => {setNumbersAllowed((prev) => !prev)

          }}
          />
          <label htmlFor='Numberinput'>Numbers</label>

</div>
   <div className='flex items-center gap-x-1 mb-6'>
          <input type="checkbox"
          defaultChecked={charallowed}
          id='charinput'
          onChange={() => {setCharAllowed((prev) => !prev)

          }}
          />
          <label htmlFor='charinput'>Special Characters</label>
       </div>
       </div>
    </div>
    
    </>
  )
}

export default App
