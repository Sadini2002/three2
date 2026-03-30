import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Particles() {
  const ref = useRef();

  // Create random particles
  const particles = new Float32Array(5000 * 3);
  for (let i = 0; i < particles.length; i++) {
    particles[i] = (Math.random() - 0.5) * 10;
  }

  useFrame(() => {
    ref.current.rotation.y += 0.0005;
  });

  return (
    <Points ref={ref} positions={particles}>
      <PointMaterial size={0.02} color="#8b5cf6" />
    </Points>
  );
}

function FloatingSphere() {
  const ref = useRef();

  useFrame((state) => {
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#a78bfa" />
    </mesh>
  );
}

export default function AdvancedBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        zIndex: 0,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      <Particles />
      <FloatingSphere />
    </Canvas>
  );
}