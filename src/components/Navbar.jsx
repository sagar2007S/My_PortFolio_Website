import { motion } from 'framer-motion';
import myImage from "../assets/myImage.png"



const links = [
{ id: 'about', label: 'About' },
{ id: 'technologies', label: 'Technologies' },
{ id: 'projects', label: 'Projects' },
{ id: 'contact', label: 'Contact' },
{ id: 'others', label: 'Others' },
];


export default function NavBar() {
return (
<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/10 ">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between ">
<motion.a
href="#hero"
className="font-display text-xl tracking-wide"
initial={{ opacity: 0, y: -10 }}
animate={{ opacity: 1, y: 0 }}
>
    <div className='flex items-center gap-1'>
     <img
            src={myImage}
            alt="Logo"
            className="w-4 h-8 "
          />
<span className="text-neon-pink">S</span>
<span className="text-neon-purple">a</span>
<span className="text-neon-blue">g</span>
<span className="text-neon-lime">ar</span>
</div>
</motion.a>
<ul className="flex gap-5 text-sm">
{links.map((l) => (
<li key={l.id}>
<a
href={`#${l.id}`}
className="hover:text-neon-blue transition-colors"
>
{l.label}
</a>
</li>
))}
</ul>
</div>
</nav>
);
}