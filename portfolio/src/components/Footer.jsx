import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-3 mt-15 ">

      <div className="max-w-7xl mx-auto px-5 ">

        <h2 className="text-2xl font-bold text-cyan-400 flex justify-center ">
          Nirav
        </h2>

        <p className="text-gray-400 mt-2 flex justify-center">
          React Developer
        </p>

        <div className="mt-4 flex justify-around">

          <button className="bg-cyan-300 text-black rounded py-0.5 px-0.5 hover:-translate-y-1 transition-transform"><NavLink to="https://github.com/niravhingu" target="_blank" rel="noopener noreferrer">GitHub</NavLink>
          </button>

          <button className="bg-cyan-300 text-black rounded py-0.5 px-0.5 hover:-translate-y-1 transition-transform"><NavLink to="https://www.linkedin.com/in/nirav-hingu" target="_blank" rel="noopener noreferrer">LinkedIn</NavLink>
          </button>

          <button className="bg-cyan-300 text-black rounded py-0.5 px-0.5 hover:-translate-y-1 transition-transform"><NavLink to="mailto:hingunirav4307@gmail.com">Email</NavLink>
          </button>

        </div>

        <p className="text-gray-500 mt-6 flex justify-center">
          © 2026 All Rights Reserved
        </p>

      </div>

    </footer>
  )
}

export default Footer