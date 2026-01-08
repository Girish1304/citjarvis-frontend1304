import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const TubeRibbon = ({ 
  color, 
  radius = 0.08, 
  speed = 0.3, 
  offset = 0 
}: { 
  color: string; 
  radius?: number; 
  speed?: number; 
  offset?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(offset);

  const curve = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 100; i++) {
      const t = (i / 100) * Math.PI * 4;
      const x = Math.sin(t * 0.5 + offset) * 3 + Math.cos(t * 0.3) * 2;
      const y = Math.cos(t * 0.7 + offset * 0.5) * 2 + Math.sin(t * 0.4) * 1.5;
      const z = Math.sin(t * 0.3 + offset) * 2 - 5 + (i / 100) * 4;
      points.push(new THREE.Vector3(x, y, z));
    }
    return new THREE.CatmullRomCurve3(points);
  }, [offset]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      time.current += delta * speed;
      meshRef.current.rotation.z = Math.sin(time.current * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.cos(time.current * 0.3) * 0.05;
    }
  });

  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 100, radius, 12, false);
  }, [curve, radius]);

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.4}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
};

const FloatingParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, 5]} intensity={0.8} color="#ff6600" />
      <pointLight position={[0, 5, -10]} intensity={0.6} color="#ff00ff" />
      
      <group ref={groupRef}>
        {/* Cyan ribbons */}
        <TubeRibbon color="#00ffff" speed={0.2} offset={0} radius={0.06} />
        <TubeRibbon color="#00cccc" speed={0.25} offset={2} radius={0.05} />
        
        {/* Orange/Yellow ribbons */}
        <TubeRibbon color="#ff6600" speed={0.18} offset={1} radius={0.07} />
        <TubeRibbon color="#ffaa00" speed={0.22} offset={3} radius={0.05} />
        
        {/* Purple/Magenta ribbons */}
        <TubeRibbon color="#cc00ff" speed={0.15} offset={1.5} radius={0.06} />
        <TubeRibbon color="#ff00aa" speed={0.2} offset={4} radius={0.04} />
        
        {/* Green accents */}
        <TubeRibbon color="#00ff66" speed={0.17} offset={2.5} radius={0.04} />
      </group>
      
      <FloatingParticles />
    </>
  );
};

const KikkBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Dark gradient base */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(260, 30%, 8%) 0%, hsl(220, 40%, 4%) 50%, hsl(200, 30%, 6%) 100%)",
        }}
      />
      
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ position: 'absolute', inset: 0 }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
      
      {/* Overlay gradient for text readability */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, hsl(220, 40%, 4%, 0.4) 100%)",
        }}
      />
    </div>
  );
};

export default KikkBackground;
