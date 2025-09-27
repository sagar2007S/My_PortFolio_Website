import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Html } from '@react-three/drei';
import { useRef } from 'react';


function GlowIcosahedron() {
const ref = useRef();
useFrame((state) => {
const t = state.clock.getElapsedTime();
ref.current.rotation.x = t * 0.4;
ref.current.rotation.y = t * 0.6;
ref.current.position.y = Math.sin(t * 1.2) * 0.2;
});
return (
<group ref={ref}>
<mesh>
<icosahedronGeometry args={[1.3, 1]} />
<meshStandardMaterial emissive="#7a5cff" emissiveIntensity={1.5} metalness={0.2} roughness={0.3} />
</mesh>
<mesh>
<icosahedronGeometry args={[1.35, 1]} />
<meshBasicMaterial wireframe color="#00d4ff" />
</mesh>
</group>
);
}


export default function Hero3D() {
return (
<div className="w-full h-[70vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ boxShadow: 'var(--shadow-neon)' }}>
<Canvas camera={{ position: [0, 0, 4] }}>
<ambientLight intensity={0.4} />
<directionalLight position={[3, 3, 3]} intensity={1.2} />
<Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.6}>
<GlowIcosahedron />
</Float>
<Stars radius={80} depth={50} count={8000} factor={4} saturation={0} fade speed={1} />
<OrbitControls enablePan={false} enableZoom={false} />
<Html position={[0, -2.2, 0]} center>
<div className="text-center">
<h1 className="text-4xl md:text-6xl font-display font-bold  ">
  Hey, I&apos;m{" "}
 <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
  Sagar
</span>


</h1>

<p className=" mt-2 max-w-xl mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
 A MERN developer crafting delightful, interactive web experiences with a vibrant twist.
</p>
</div>
</Html>
</Canvas>
</div>
);
}