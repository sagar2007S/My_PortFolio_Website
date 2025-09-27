import { motion } from "framer-motion";

export default function Others() {
  const items = [
    "Open to freelance & collaborations",
    "Love for UI micro-interactions",
    "Deployed on Render & Vercel",
  ];

  return (
    <section id="others" className="section min-h-screen flex items-center bg-mesh-gradient">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <motion.h2
          className="text-3xl md:text-4xl font-display mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Others
        </motion.h2>

        <ul className="space-y-4">
          {items.map((item, i) => (
            <motion.li
              key={item}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
