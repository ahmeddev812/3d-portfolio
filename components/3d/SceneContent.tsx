"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Sparkles } from "@react-three/drei";
import { CrystalCluster } from "./CrystalCluster";
import { FloatingShapes } from "./FloatingShapes";
import { TechGrid } from "./TechGrid";
import { useTheme } from "@/components/ThemeProvider";

function SceneLights() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <ambientLight intensity={isDark ? 0.4 : 0.6} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={isDark ? 0.8 : 1.2}
      />
      <pointLight position={[-10, -10, -10]} intensity={isDark ? 0.5 : 0.8} />
      <pointLight position={[5, -5, 5]} intensity={isDark ? 0.3 : 0.5} color="#3B82F6" />
      <Environment preset={isDark ? "night" : "city"} />
    </>
  );
}

export default function SceneContent() {
  return (
    <div className="fixed inset-0 -z-10 w-screen h-screen bg-primary">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <SceneLights />

        <CrystalCluster />
        <FloatingShapes />
        <TechGrid />

        <Sparkles
          count={2000}
          scale={10}
          size={0.04}
          speed={0.2}
          opacity={0.3}
          color="#60A5FA"
        />
      </Canvas>
    </div>
  );
}
