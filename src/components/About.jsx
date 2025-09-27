import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section min-h-screen flex items-center bg-mesh-gradient">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <motion.h2
          className="text-3xl md:text-4xl font-display mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h2>

        <motion.p
          className="text-white/85 leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
         I’m a passionate full-stack developer specializing in the <span className="text-neon-blue font-semibold">MERN</span> stack.
          My strength lies in translating business requirements into scalable, maintainable software solutions. <span className="text-neon-pink font-semibold">I focus on building applications that solve real problems—whether it’s streamlining workflows, improving customer engagement, or enabling data-driven decision making. By combining clean backend APIs with efficient front-end interfaces, I ensure that both technical and business needs are aligned.</span> I have experience designing RESTful APIs, authentication systems, state management solutions, and database schemas that reflect real-world entities and processes. On the frontend, I strive to create interfaces that make complex logic simple for end users while maintaining consistency and performance. <span className="text-neon-pink font-semibold">My approach emphasizes modularity, reusability, and clear architecture, so projects can grow without becoming tangled or difficult to maintain. I also pay close attention to data flow and validation, ensuring accuracy and reliability across the application.</span>
        </motion.p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { k: 'Focus', v: 'MERN + Java' },
            { k: 'Strengths', v: 'Performance, UI/UX,' },
            { k: 'Interests', v: 'Shaders, WebGL, Realtime' },
          ].map((item, i) => (
            <motion.div
              key={item.k}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.07 * i }}
            >
              <div className="text-white/60 text-sm">{item.k}</div>
              <div className="font-semibold">{item.v}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            href="#projects"
            className="px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue hover:opacity-90 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-3 rounded-xl font-semibold border border-white/15 bg-white/5 hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
