"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COLORS = ["#2563EB", "#3B82F6", "#38BDF8", "#06B6D4", "#60A5FA"];

function CrystalShard({
  position,
  scale,
  color,
  rotSpeed,
  delay,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  rotSpeed: number;
  delay: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() + delay;
    meshRef.current.rotation.x = Math.sin(t * rotSpeed * 0.6) * 0.3;
    meshRef.current.rotation.y = t * rotSpeed * 0.4;
    meshRef.current.rotation.z = Math.cos(t * rotSpeed * 0.5) * 0.2;
  });

  const geo = useMemo(() => {
    const g = new THREE.OctahedronGeometry(1, 0);
    const pos = g.attributes.position;
    for (let i = 0; i < pos.array.length; i += 3) {
      pos.array[i] += (Math.random() - 0.5) * 0.15;
      pos.array[i + 1] += (Math.random() - 0.5) * 0.15;
      pos.array[i + 2] += (Math.random() - 0.5) * 0.15;
    }
    g.computeVertexNormals();
    return g;
  }, []);

  return (
    <mesh ref={meshRef} geometry={geo} position={position} scale={scale}>
      <meshPhysicalMaterial
        color={color}
        metalness={0.1}
        roughness={0.05}
        clearcoat={1}
        clearcoatRoughness={0.05}
        transparent
        opacity={0.65}
        envMapIntensity={1.2}
        emissive={color}
        emissiveIntensity={0.04}
        flatShading
      />
    </mesh>
  );
}

const SHARDS = Array.from({ length: 6 }, (_, i) => {
  const angle = (i / 6) * Math.PI * 2;
  const radius = 1.8 + Math.random() * 1.2;
  return {
    position: [
      Math.cos(angle) * radius,
      (Math.random() - 0.5) * 2.5,
      Math.sin(angle) * radius,
    ] as [number, number, number],
    scale: 0.2 + Math.random() * 0.35,
    color: COLORS[i % COLORS.length],
    rotSpeed: 0.3 + Math.random() * 0.4,
    delay: Math.random() * Math.PI * 2,
  };
});

export function CrystalCluster() {
  const groupRef = useRef<THREE.Group>(null);
  const mainRef = useRef<THREE.Mesh>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 2);
      setMouseY((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const mainGeo = useMemo(() => {
    const g = new THREE.IcosahedronGeometry(1.4, 0);
    const pos = g.attributes.position;
    for (let i = 0; i < pos.array.length; i += 3) {
      pos.array[i] += (Math.random() - 0.5) * 0.08;
      pos.array[i + 1] += (Math.random() - 0.5) * 0.08;
      pos.array[i + 2] += (Math.random() - 0.5) * 0.08;
    }
    g.computeVertexNormals();
    return g;
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current || !mainRef.current) return;

    const t = clock.getElapsedTime();

    groupRef.current.rotation.y = t * 0.08;

    mainRef.current.rotation.x += (mouseY * 0.2 - mainRef.current.rotation.x) * 0.02;
    mainRef.current.rotation.y += (mouseX * 0.2 - mainRef.current.rotation.y) * 0.02;

    const hueShift = Math.sin(t * 0.15) * 0.05;
    const mat = mainRef.current.material as THREE.MeshPhysicalMaterial;
    const base = new THREE.Color("#2563EB");
    const shift = new THREE.Color("#3B82F6");
    mat.color.lerpColors(base, shift, (Math.sin(t * 0.3) + 1) / 2);
    mat.emissive.lerpColors(base, shift, (Math.sin(t * 0.3) + 1) / 2);
  });

  return (
    <group ref={groupRef}>
      <mesh ref={mainRef} geometry={mainGeo} scale={1.2}>
        <meshPhysicalMaterial
          color="#2563EB"
          metalness={0.15}
          roughness={0.0}
          clearcoat={1}
          clearcoatRoughness={0.05}
          transparent
          opacity={0.75}
          envMapIntensity={1.5}
          emissive="#2563EB"
          emissiveIntensity={0.08}
          flatShading
        />
      </mesh>
      {SHARDS.map((shard, i) => (
        <CrystalShard key={i} {...shard} />
      ))}
    </group>
  );
}
