"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const SHAPES = [
  { type: "octahedron" as const, position: [4, 2.5, -5] as const, color: "#FF6B9D", scale: 0.5 },
  { type: "dodecahedron" as const, position: [-4, -2, -6] as const, color: "#00D4FF", scale: 0.55 },
  { type: "icosahedron" as const, position: [0, -3, -7] as const, color: "#FFD93D", scale: 0.45 },
  { type: "tetrahedron" as const, position: [-3, 3, -5] as const, color: "#7C3AED", scale: 0.5 },
];

function ShapeRenderer({ shape, index }: { shape: typeof SHAPES[number]; index: number }) {
  return (
    <Float
      speed={1.5 + index * 0.5}
      rotationIntensity={0.5 + index * 0.2}
      floatIntensity={0.5}
    >
      <mesh position={shape.position} scale={shape.scale}>
        {shape.type === "octahedron" && <octahedronGeometry args={[1]} />}
        {shape.type === "dodecahedron" && <dodecahedronGeometry args={[1]} />}
        {shape.type === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
        {shape.type === "tetrahedron" && <tetrahedronGeometry args={[1]} />}
        <meshPhysicalMaterial
          color={shape.color}
          metalness={0.05}
          roughness={0.0}
          clearcoat={1}
          clearcoatRoughness={0.05}
          transparent
          opacity={0.6}
          emissive={shape.color}
          emissiveIntensity={0.08}
          flatShading
        />
      </mesh>
    </Float>
  );
}

export function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {SHAPES.map((shape, i) => (
        <ShapeRenderer key={i} shape={shape} index={i} />
      ))}
    </group>
  );
}
