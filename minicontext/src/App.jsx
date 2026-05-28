import React from 'react'
import College from './College'
import Classcomponent from './Classcomponent'
import { Subjectcontext } from './Contextdata'
import { useState } from 'react'

function App() {
  const [Subject,setSubject]=useState("English")
  return (
    <div style={{ backgroundColor: 'red', padding: '20px' }}>
      <Subjectcontext.Provider value={Subject}>
        <select value={Subject} onChange={(event)=>setSubject(event.target.value)}>
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select>
        <h1>Context API</h1>
        <button onClick={()=>setSubject("")}>Clear Subject</button>
        <College/>
      </Subjectcontext.Provider>
 
    </div>
  )
}

export default App
