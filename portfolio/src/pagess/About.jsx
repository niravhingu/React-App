function About() {
    const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "API",
  "Python",
  "Node.js",
  "SQL",
  "MongoDB",
  "GitHub",
  "Git",


  
  
]
  return (
    

    <section className="text-white px-5 md:px-10  py-20">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <h1 className="text-3xl md:text-5xl font-bold mb-5">
          About Me
        </h1>

        <div className="w-28 h-1 bg-cyan-400 mb-10"></div>

        {/* CONTENT */}

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="text-gray-400 text-lg leading-8 mb-6">
              I am a passionate React Developer who loves building
              modern and responsive web applications.
            </p>

            <p className="text-gray-400 text-lg leading-8 mb-6">
              I enjoy learning new technologies and improving
              my frontend development skills every day.
            </p>

            <p className="text-gray-400 text-lg leading-8 md:text-lg">
              My focus is creating clean UI, responsive layouts
              and smooth user experience.
            </p>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

              <h2 className="text-4xl font-bold text-cyan-400 mb-2">
                1+
              </h2>

              <p className="text-gray-400">
                Years Learning
              </p>

            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

              <h2 className="text-4xl font-bold text-cyan-400 mb-2">
                10+
              </h2>

              <p className="text-gray-400">
                Projects
              </p>

            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

              <h2 className="text-4xl font-bold text-cyan-400 mb-2">
                React
              </h2>

              <p className="text-gray-400">
                Frontend
              </p>

            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

              <h2 className="text-4xl font-bold text-cyan-400 mb-2">
                UI
              </h2>

              <p className="text-gray-400">
                Design
              </p>

            </div>

          </div>

        </div>

      </div>
    {/* SKILLS */}

<div className="mt-24">

  <h2 className="text-2xl md:text-4xl font-bold mb-5">
    My Skills
  </h2>

  <div className="w-24 h-1 bg-cyan-400 mb-10"></div>

  <div className="grid grid-cols-3 md:grid-cols-4 gap-6">

    {
      skills.map((skill) => (

        <div
          key={skill}
          className="bg-gray-900 border border-gray-800 p-6 rounded-xl text-center hover:-translate-y-2 transition duration-350"
        >

          <h3 className="text-xl font-semibold text-cyan-400">
            {skill}
          </h3>

        </div>

      ))
    }

  </div>

</div>
    </section>

  )
}

export default About