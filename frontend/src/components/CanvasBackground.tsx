"use client"; // Critical: 3D rendering happens in the browser GPU, not the server

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// The actual 3D object that rotates
function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  // Rotate the sphere slowly on every frame
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.5}>
      <MeshDistortMaterial
        color="#0a84ff"
        attach="material"
        distort={0.4}
        speed={1.5}
        wireframe={true}
        opacity={0.15}
        transparent={true}
      />
    </Sphere>
  );
}

// The wrapper component we will import into our pages
export function CanvasBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
