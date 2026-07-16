import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white px-6"
    >
      <div className="text-center max-w-3xl">

      
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-cyan-400"
        >
          Hello, I'm
        </motion.h2>

  
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -8 }}
          className="text-5xl md:text-7xl font-bold mt-2"
        >
          Parth Nai
        </motion.h1>

      
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-2xl md:text-3xl text-gray-300 mt-4"
        >
          Frontend Developer
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-gray-400 mt-6 leading-7"
        >
          An Aspiring Frontend Developer who loves turning ideas into clean, interactive websites.
         I'm currently building my skills in React and modern web development — always learning, always building something new.
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
          >
            View Projects
          </a>

          <a
            href="Parth_Nai_Frontend-CV.pdf"
            download
            className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 transition"
          >
            Download CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;