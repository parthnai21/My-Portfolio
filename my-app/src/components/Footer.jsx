import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold"
          >
            Parth<span className="text-cyan-400">.</span>
          </motion.h2>

          <ul className="flex flex-wrap justify-center gap-6 text-gray-400">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
          </ul>

          <div className="flex gap-5 text-2xl">

            <a
              href="https://github.com/parthnai21"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/parthnai07/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="Hero.jsx"
              className="hover:text-cyan-400 transition"
            >
              <FaArrowUp />
            </a>

          </div>

        </div>

       
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-zinc-800 mt-8 pt-6 text-center text-gray-500"
        >
          © {new Date().getFullYear()} Parth Nai. All rights reserved.
        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;