import { motion } from "framer-motion";
import Homepage from "../assets/images/Homepage.png"
import portfolio from "../assets/images/portfolio.png"
import temp from "../assets/images/temp.png"
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio built with React, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: portfolio,
    github: "#",
    live: "#",
  },
  {
    title: "Temperature converter",
    description:
      "Temperature Converter is a simple and responsive web application that converts temperatures between Celsius and Fahrenheit instantly.",
    tech: ["HTML","JAVASCRIPT", "CSS"],
    image: temp,
    github: "https://github.com/parthnai21/Temperature-converter-project",
    live: "#",
  },
  {
    title: "SoundWave E-commerce",
    description:
      "A responsive e-commerce website for premium headphones built using HTML, CSS, JavaScript, and Bootstrap.",
    tech: ["React", "Bootstrap", "JavaScript"],
    image: Homepage,
    github: "https://github.com/parthnai21/soundwave-ecommerce",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 uppercase tracking-widest">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4">
            Some of the projects I've built while learning frontend development.
          </p>
        </motion.div>

       
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800"
            >
             
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-zinc-800 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="border border-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-500 transition"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;