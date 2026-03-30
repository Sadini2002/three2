import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function FloatingBox() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  );
}

export default function Background() {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        zIndex: 0,
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} />

      <FloatingBox />
    </Canvas>
  );
}