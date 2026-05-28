import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Userdetail() {
    const paramdata=useParams();
    console.log(paramdata);
    
  return (
    
    <div>
        <h1>Userdetail</h1>
        <p>User ID: {paramdata.id}</p>
        
        
        <h2><Link to="/Users" >Go Back</Link></h2>
    </div>
  )
}

export default Userdetail