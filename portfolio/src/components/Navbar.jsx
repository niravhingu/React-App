import { NavLink } from "react-router-dom"

function Navbar() {
  return (

    <nav className="bg-black text-white px-8 py-5">

      <div className="flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          Nirav
        </h1>

        <ul className="flex gap-8 text-lg">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-cyan-400" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-cyan-400" : ""
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-cyan-400" : ""
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-cyan-400" : ""
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>

      </div>

    </nav>

  )
}

export default Navbar