import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white p-4 sticky top-0"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
      
        <h1 className="text-2xl font-bold">Parth</h1>

       
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#home" className="hover:text-cyan-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>

      
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

    
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center gap-4 mt-4"
        >
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </motion.ul>
      )}
    </motion.nav>
  );
}

export default Navbar;