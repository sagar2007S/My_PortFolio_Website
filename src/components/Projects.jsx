import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "WhatsGram", desc: "MERN, Socket.IO, Cloudinary, Tailwind", link: "https://whatsgram-ktog.onrender.com/" },
    { title: "SmartScop News", desc: "HTML, CSS, Javascript, Api Handled", link: "https://github.com/sagar2007S/SmartScoop" },
    { title: "IMDB Clone", desc: "Movie data fetcher from OMDb API", link: "https://sagars2007.github.io/IMDB_CLONE/" },
      { title: "Pastebin", desc: "React, Router, Tailwind, Localstorage", link: "https://pastebin-jade.vercel.app/" },
  ];

  return (
    <section id="projects" className="section min-h-screen flex items-center bg-mesh-gradient">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <motion.h2
          className="text-3xl md:text-4xl font-display mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((proj, i) => (
            <motion.a
              key={proj.title}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-white/70">{proj.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
