import React from 'react'
import { useContext } from 'react'
import { Subjectcontext } from './Contextdata'

function Subject1() {
    const Subject=useContext(Subjectcontext)
  return (
    <div style={{backgroundColor: 'Green' , padding:10}}>
        <h2>Subject is : {Subject}</h2>
    </div>
  )
}

export default Subject1  