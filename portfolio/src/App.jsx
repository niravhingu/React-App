import Navbar from "./components/Navbar"

import Home from "./pagess/Home"
import About from "./pagess/About"
import Projects from "./pagess/Projects"
import Contact from "./pagess/Contact"
import Footer from "./components/Footer"

import {Routes,Route,} from "react-router-dom"

function App() {
  return (

    <div className="bg-black min-h-screen">

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>
    <Footer/>
    </div>

  )
}

export default App