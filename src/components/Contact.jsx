import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/mdkwkqgk", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        //alert("Message sent Successfully")
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        toast.error("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong.");
    }
  };

  return (
    <section id="contact" className="section min-h-screen flex items-center bg-mesh-gradient">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <motion.h2
          className="text-3xl md:text-4xl font-display mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none backdrop-blur focus:border-neon-pink"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none backdrop-blur focus:border-neon-blue"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            required
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none backdrop-blur focus:border-neon-purple"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue hover:opacity-90 transition rounded-xl border border-white/10 bg-white/5 p-6 text-center font-semibold backdrop-blur hover:bg-white/10 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
