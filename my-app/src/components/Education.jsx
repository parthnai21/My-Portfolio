import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      className="bg-gray-950 text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">

      
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 uppercase tracking-widest">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Education
          </h2>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400 transition"
        > 

           <p className="text-cyan-400 text-sm mb-2">
            2025 – 2026
           </p>
           
           <p className="text-2xl font-bold">
             FRONT END DEVELOPER (TRAINING)
           </p>
            <p className="text-gray-400 mt-2">
            TOPS Technologies
          </p> 
           <p className="text-gray-300 mt-6 leading-8">
          Certificate of Training – Front End Developer (TOPS Technologies)
          </p>
           <br />
          <p className="text-cyan-400 text-sm mb-2">
            2022 – 2025
          </p>
 
          <h3 className="text-2xl font-bold">
            Bachelor of Commerce (B.Com)
          </h3>

          <p className="text-gray-400 mt-2">
            C.C Sheth Collage Of Commerce
          </p>
          <p className="text-gray-300 mt-6 leading-8">
            Completed my Bachelor's degree while developing a strong interest
            in web development. Alongside academics, I learned HTML, CSS,
            JavaScript, React, Tailwind CSS, by building
            real-world frontend projects.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Education;