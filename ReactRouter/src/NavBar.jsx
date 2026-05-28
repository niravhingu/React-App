import React from 'react'
import { Link,NavLink,Outlet } from 'react-router-dom'

function NavBar() {
    return (
        <>
        <div className='bg-yellow-300 flex justify-between p-2'>
            <div>
                <Link><h2>Logo</h2></Link>

            </div>
            <div>
                <ul className='flex space-x-8 mr-5 '>
                    <li><NavLink  to="/" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>Home</NavLink></li>
                    <li><NavLink  to="/About" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>About</NavLink></li>
                    <li><NavLink  to="/Login" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>Login</NavLink></li>
                    <li><NavLink  to="/College" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>College</NavLink></li>
                    <li><NavLink to="/Users" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>Users</NavLink> </li>
                    <li><NavLink to="/Github" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}>Github </NavLink></li>

                </ul>

            </div>
        </div>
               <div>
               <Outlet />

               </div>
               </>
    )
}

export default NavBar