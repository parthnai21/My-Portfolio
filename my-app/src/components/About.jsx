import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-widest">
            Get To Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Frontend Developer
            </h3>

            <p className="text-gray-300 leading-8 mb-5">
              I'm a Frontend Developer with a strong foundation in HTML, CSS,
              JavaScript, React, Tailwind CSS. I enjoy
              building responsive, accessible, and visually engaging web
              applications that provide a smooth user experience across
              devices.
            </p>

            <p className="text-gray-300 leading-8">
              I continuously improve my skills by creating real-world projects,
              exploring modern frontend technologies, and following industry
              best practices. Through hands-on development, I've gained
              experience with component-based architecture, responsive design,
              API integration, Git, and version control.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Career Goal
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              I'm currently seeking opportunities where I can contribute to
              meaningful projects, collaborate with experienced developers, and
              continue growing as a frontend engineer. My goal is to write
              clean, maintainable code while building fast, user-focused web
              experiences.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-cyan-400 font-semibold">Location</h4>
                <p className="text-gray-400">India</p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">Experience</h4>
                <p className="text-gray-400">Frontend Projects</p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">Focus</h4>
                <p className="text-gray-400">React Development</p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">Status</h4>
                <p className="text-gray-400">Open to Opportunities</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;