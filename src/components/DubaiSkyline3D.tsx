import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

const Building = ({ position, height, color }: { position: [number, number, number], height: number, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Box
      ref={meshRef}
      position={position}
      args={[1, height, 1]}
    >
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
    </Box>
  );
};

const BurjKhalifa = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <Cylinder
      ref={meshRef}
      position={[0, 4, 0]}
      args={[0.3, 0.5, 8, 8]}
    >
      <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
    </Cylinder>
  );
};

const DubaiSkyline = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#FFD700" />
      <pointLight position={[-10, 10, -10]} intensity={0.5} color="#00BFFF" />
      
      {/* Burj Khalifa - Center piece */}
      <BurjKhalifa />
      
      {/* Other buildings */}
      <Building position={[-3, 1.5, 0]} height={3} color="#1a1a2e" />
      <Building position={[-5, 1, 1]} height={2} color="#16213e" />
      <Building position={[3, 2, 0]} height={4} color="#0f3460" />
      <Building position={[5, 1.25, -1]} height={2.5} color="#e94560" />
      <Building position={[-2, 0.75, 2]} height={1.5} color="#f5f5f5" />
      <Building position={[2, 0.5, -2]} height={1} color="#533483" />
      <Building position={[-6, 0.75, -2]} height={1.5} color="#f39c12" />
      <Building position={[6, 1, 1]} height={2} color="#2c3e50" />
      
      {/* Ground plane */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.8} />
      </mesh>
    </>
  );
};

const DubaiSkyline3D = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas
        camera={{ position: [0, 5, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <DubaiSkyline />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default DubaiSkyline3D;
