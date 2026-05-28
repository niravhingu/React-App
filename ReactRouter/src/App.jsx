import { useState } from 'react'
import './index.css'
import { Routes, Route ,Navigate, useLoaderData } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Login from "./Login.jsx";
import Navbar from './NavBar.jsx'
import PagenotFound from './PagenotFound.jsx'
import College from './College.jsx'
import Student from './Student.jsx' 
import Department from './Department.jsx'
import Details from './Details.jsx'
import Users from './Users.jsx'
import Userdetail from './Userdetail.jsx'
import Github from './Github.jsx'





 

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar /> */}
     <Routes>
    <Route element={<Navbar />} >
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Users" element={<Users />} />
      <Route path='/Users/:id' element={<Userdetail />} />
          <Route
          path="Github"
          element={<Github />}
          />
      </Route>

      <Route path="/College" element={<College />}>

          <Route index element={<Student />} />

          <Route path="Department" element={<Department />} />

          <Route path="Details" element={<Details />} />


        </Route>
      
      <Route path="/*" element={<PagenotFound to="/" />} />
     </Routes>
    </>
  )
}

export default App
