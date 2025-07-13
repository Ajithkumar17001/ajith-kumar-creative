import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D } from "@react-three/drei";
import { motion } from "framer-motion";

const Laptop3D = () => {
  return (
    <motion.div
      className="w-64 h-64 mx-auto"
      initial={{ scale: 0, rotateY: -180 }}
      animate={{ scale: 1, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            {/* Laptop Base */}
            <mesh position={[0, -0.5, 0]}>
              <boxGeometry args={[3, 0.2, 2]} />
              <meshStandardMaterial 
                color="#1a1a1a" 
                metalness={0.7} 
                roughness={0.3} 
              />
            </mesh>
            
            {/* Laptop Screen */}
            <mesh position={[0, 0.5, -1]} rotation={[-0.2, 0, 0]}>
              <boxGeometry args={[2.8, 1.8, 0.1]} />
              <meshStandardMaterial 
                color="#000000" 
                metalness={0.8} 
                roughness={0.2} 
              />
            </mesh>
            
            {/* Screen Content */}
            <mesh position={[0, 0.5, -0.95]} rotation={[-0.2, 0, 0]}>
              <planeGeometry args={[2.6, 1.6]} />
              <meshStandardMaterial 
                color="#8B5CF6" 
                emissive="#8B5CF6" 
                emissiveIntensity={0.3} 
              />
            </mesh>
            
            {/* Keyboard */}
            <mesh position={[0, -0.35, 0.2]}>
              <boxGeometry args={[2.6, 0.05, 1.6]} />
              <meshStandardMaterial 
                color="#2a2a2a" 
                metalness={0.5} 
                roughness={0.4} 
              />
            </mesh>
            
            {/* Book/Learning Symbol */}
            <mesh position={[-1.5, 0.8, 0.5]} rotation={[0, 0.3, 0]}>
              <boxGeometry args={[0.6, 0.8, 0.1]} />
              <meshStandardMaterial 
                color="#D946EF" 
                metalness={0.3} 
                roughness={0.7} 
              />
            </mesh>
            
            <mesh position={[-1.3, 0.8, 0.55]} rotation={[0, 0.3, 0]}>
              <boxGeometry args={[0.6, 0.8, 0.05]} />
              <meshStandardMaterial 
                color="#ffffff" 
                metalness={0.1} 
                roughness={0.9} 
              />
            </mesh>
          </Float>
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default Laptop3D;