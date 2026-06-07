
  import { useEffect, useState } from 'react'
  import { Themeprovider } from './Context/Theme'
  import './index.css'

  function App() {
    const [themeMode,setThemeMode]=useState("Light")
  
    const Lighttheme=()=>{
      setThemeMode("Light")

    }

    const darktheme =()=>{
      setThemeMode("dark")
    }

    // actual change in theme

    useEffect(()=>{
  document.querySelector('html').classList.remove("Light","dark")
  document.querySelector('html').classList.add(themeMode)

    },[themeMode])

    return (
      <Themeprovider value={{themeMode,Lighttheme,darktheme}}>

      <div className='flex flex-wrap min-h-screen item-center '>
        <div className='w-full '>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4 bg-pink-500'>
          <button onChange={{darktheme}}>click</button>
          </div>
          <div className='w-full max-w-sm mx-auto bg-pink-500'>
      <h1>hello world</h1>
      
          {/* card */}

          </div>
        </div>
        </div>
      </Themeprovider>
      
    )
  }

  export default App
