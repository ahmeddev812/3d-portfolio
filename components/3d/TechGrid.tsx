"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function TechGrid() {
  const gridRef = useRef<THREE.Group>(null);
  const matRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame(({ clock }) => {
    if (!gridRef.current) return;
    const t = clock.getElapsedTime();
    gridRef.current.position.y = -2.5 + Math.sin(t * 0.2) * 0.1;
    gridRef.current.rotation.x = -Math.PI / 2.6 + Math.sin(t * 0.15) * 0.02;
    if (matRef.current) {
      matRef.current.opacity = 0.15 + Math.sin(t * 0.3) * 0.05;
    }
  });

  return (
    <group ref={gridRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20, 30, 30]} />
        <meshBasicMaterial
          ref={matRef}
          color="#6C63FF"
          wireframe
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <planeGeometry args={[18, 18, 12, 12]} />
        <meshBasicMaterial
          color="#00D4FF"
          wireframe
          transparent
          opacity={0.06}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
