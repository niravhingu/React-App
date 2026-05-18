import './index.css'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <div className={"w-full h-screen duration-200"} style={{ backgroundColor: color}}>
      {/* <div className="fixed flex flex-wrap justify-left bottom-12 insert-x-0 px-2"> */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg">
          <div className="w-12 h-12 bg-red-500 rounded-full cursor-pointer" onClick={() => setColor("red")}></div>
          <div className="w-12 h-12 bg-blue-500 rounded-full cursor-pointer" onClick={() => setColor("blue")}></div>
          <div className="w-12 h-12 bg-green-500 rounded-full cursor-pointer" onClick={() => setColor("green")}></div>
        </div>
      </div>
    // </div>p
  )
}

export default App
