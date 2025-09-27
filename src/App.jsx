
import Hero3D from './components/Hero3D.jsx';
import About from './components/About.jsx';
import Technologies from './components/Technologies.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Others from './components/Others.jsx';
import { Toaster } from "react-hot-toast";
import Socials from './components/Socials.jsx';
import NavBar from './components/Navbar.jsx';

export default function App() {
  return (
    <div
      id="hero"
      className="min-h-screen bg-black text-white scroll-smooth"
    >
      <div className="fixed inset-0 -z-10 bg-mesh-gradient" aria-hidden="true" />
      <NavBar/>

      <main className="pt-20 space-y-24">
        <section className="max-w-6xl mx-auto px-6">
          <Hero3D />
        </section>
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Others />

        <div>
          <Toaster position="top-right" />
        </div>

        <footer className="py-16 text-center text-white/60">
          <div className="mb-4">
            © {new Date().getFullYear()} Sagar — Built with React & Three.js
          </div>
          <Socials />
        </footer>
      </main>
    </div>
  );
}
