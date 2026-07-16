import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

      
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[4px]">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, freelance work,
            or collaborating on exciting frontend projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-6">
              Let's Connect 👋
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              Whether you have a project idea, internship opportunity,
              or just want to connect, feel free to reach out.
              I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span>pnai2526@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-cyan-400 text-2xl" />
                <a
                  href="https://github.com/parthnai21"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                 github.com/parthnai21
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-cyan-400 text-2xl" />
                <a
                  href="https://www.linkedin.com/in/parthnai07/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  linkedin.com/in/parthnai07/
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-zinc-800 rounded-lg p-4 outline-none border border-zinc-700 focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-zinc-800 rounded-lg p-4 outline-none border border-zinc-700 focus:border-cyan-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-zinc-800 rounded-lg p-4 outline-none border border-zinc-700 focus:border-cyan-400 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;