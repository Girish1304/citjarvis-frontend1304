import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const HolographicMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerMeshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y = -state.clock.elapsedTime * 0.5;
      innerMeshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        {/* Outer icosahedron */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshBasicMaterial
            color="#00ffff"
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Inner glowing sphere */}
        <mesh ref={innerMeshRef} scale={0.6}>
          <octahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
            distort={0.2}
            speed={2}
          />
        </mesh>

        {/* Rotating ring */}
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.02, 16, 100]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.8} />
        </mesh>

        {/* Second ring */}
        <mesh rotation={[0, Math.PI / 2, Math.PI / 4]}>
          <torusGeometry args={[1.7, 0.015, 16, 100]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.4} />
        </mesh>

        {/* Core glow */}
        <mesh scale={0.3}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.9} />
        </mesh>

        {/* Outer glow sphere */}
        <mesh scale={2}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.05} />
        </mesh>
      </group>
    </Float>
  );
};

const HolographicLogo3D = () => {
  return (
    <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0088ff" />
        <HolographicMesh />
      </Canvas>
    </div>
  );
};

export default HolographicLogo3D;
