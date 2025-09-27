import { motion } from "framer-motion";

export default function Technologies() {
  const techs = [
    "HTML","Javascript","Java","React", "Node.js", "Express", "MongoDB",
    "TailwindCSS", "Three.js", "Socket.IO", "Firebase", "MySQL"
  ];

  return (
    <section id="technologies" className="section min-h-screen flex items-center bg-mesh-gradient">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <motion.h2
          className="text-3xl md:text-4xl font-display mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technologies
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techs.map((tech, i) => (
            <motion.div
              key={tech}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center font-semibold backdrop-blur hover:bg-white/10 transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
