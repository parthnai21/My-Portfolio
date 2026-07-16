
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-5xl" /> },
 
];

function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

       
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 uppercase tracking-widest">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Technologies I Use
          </h2>

          <p className="text-gray-400 mt-4">
            Tools and technologies I use to build modern web applications.
          </p>
        </motion.div>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-cyan-400 transition-all duration-300"
            >
              {skill.icon}

              <h3 className="mt-5 text-lg font-semibold">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;