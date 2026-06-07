function Projects() {

  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern portfolio built using React and Tailwind CSS.",
      tech: "React, Tailwind CSS",
      github:"https://github.com/niravhingu",
      demo:"http://localhost:5173/contact"
    },

    {
      title: "Todo App",
      description: "Task management application.",
      tech: "React, useState",
      github:"https://github.com/niravhingu",
      demo: ""
    },

    {
      title: "Weather App",
      description: "Weather information using API.",
      tech: "React, API",
      github:"https://github.com/niravhingu",
      demo:""
    },
  ]
    
  return (
    <section className="text-white px-10 py-20">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-5">
          My Projects
        </h1>

        <div className="w-28 h-1 bg-cyan-400 mb-10"></div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="bg-gray-900 border border-white rounded-xl p-6 hover:-translate-y-2 transition"
            >

              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                {project.title}
              </h2>

              <p className="text-gray-400 mb-5">
                {project.description}
              </p>

              <p className="text-cyan-400 mb-5">
                {project.tech}
              </p>
              <div className="flex gap-3">

                 <a href={project.demo}
                 className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold">
                  Live Demo
                </a>
                

                <a href={project.github} className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg">
                  GitHub
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects 