"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export function OrganicMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 2);
      setMouseY((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2, 2);
    const pos = geo.attributes.position;
    if (!pos) return geo;
    const positions = pos.array;
    for (let i = 0; i < positions.length; i++) {
      positions[i] += (Math.random() - 0.5) * 0.2;
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const posAttr = meshRef.current.geometry.attributes.position;
    if (!posAttr) return;
    const time = clock.getElapsedTime();
    const positions = posAttr.array as Float32Array;
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]!;
      const y = positions[i + 1]!;
      const z = positions[i + 2]!;
      const wave =
        Math.sin(x * 1.5 + time * 0.8) * 0.1 +
        Math.cos(y * 1.5 + time * 0.6) * 0.1 +
        Math.sin(z * 1.5 + time * 0.7) * 0.1;
      positions[i] = x + wave * 0.2;
      positions[i + 1] = y + wave * 0.2;
      positions[i + 2] = z + wave * 0.2;
    }
    posAttr.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();

    meshRef.current.rotation.x += (mouseY * 0.3 - meshRef.current.rotation.x) * 0.03;
    meshRef.current.rotation.y += (mouseX * 0.3 - meshRef.current.rotation.y) * 0.03;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} scale={1.3}>
      <MeshDistortMaterial
        color="#2563EB"
        metalness={0.1}
        roughness={0.2}
        clearcoat={0.9}
        clearcoatRoughness={0.1}
        emissive="#2563EB"
        emissiveIntensity={0.08}
        transparent
        opacity={0.78}
        distort={0.2}
        speed={1.5}
      />
    </mesh>
  );
}
