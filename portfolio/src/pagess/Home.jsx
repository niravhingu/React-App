import vite from "../assets/vite.svg"

function Home() {
  return (

    <section className="text-white min-h-[90vh] flex items-center px-5 md:px-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 md:gap-16">

        {/* LEFT SIDE */}

        <div>

          <p className="text-cyan-400 text-xl mb-4">
            Hello, My Name Is
          </p>

          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            Nirav
          </h1>

         <h2 className="text-2xl md:text-5xl font-semibold text-gray-400 mb-6">
            React Developer
          </h2>

         <p className="text-gray-500 text-base md:text-lg leading-8 mb-8">
            I build modern, responsive and user friendly web
            applications using React and Tailwind CSS.
          </p>

          <div className="flex flex-col md:flex-row gap-5">

            <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              View Projects
            </button>

            <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              Contact Me
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center">

          <img
            src={vite}
            alt="profile"
           className="w-55 md:w-87.5 rounded-full border-4 border-cyan-400 shadow-lg hover:-translate-y-2 transition duration-350"
          />

        </div>

    
      </div>

    </section>
    
  )
}

export default Home