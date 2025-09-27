<<<<<<< HEAD
import NavBar from './components/NavBar.jsx';
import Hero3D from './components/Hero3D.jsx';
import About from './components/About.jsx';
import Technologies from './components/Technologies.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Others from './components/Others.jsx';
import { Toaster } from "react-hot-toast";
import Socials from './components/Socials.jsx';

export default function App() {
  return (
    
    
    <div
      id="hero"
      className="min-h-screen bg-black text-white scroll-smooth"
    >
      <div className="fixed inset-0 -z-10 bg-mesh-gradient" aria-hidden="true" />
      <NavBar />

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
      {/**
       *   <footer className="py-16 text-center text-white/60">
    
      © {new Date().getFullYear()} Sagar — Built with React
    </div>
    <Socials />
  </footer>
       */}

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
=======

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pastes from './components/Pastes'
import ViewPaste from './components/ViewPaste'

function App() {


  const router = createBrowserRouter(
    [
      {path:"/",
        element: <>
        <Navbar/> 
        <Home/>
        </>
      },
      {
        path:"/pastes",
        element:<>
        <Navbar/>
        <Pastes/>
        </>
          
       
      },
      {

        path:"/pastes/:id",
        element: <>
          <Navbar/>
          <ViewPaste/>
        </>
      }
    ]
  )

  return (
   <div>
    
< RouterProvider router={router}/>

   </div>
  )
}

export default App
>>>>>>> 9fc7285bb19f73ba22a69e77e3be173836693507
