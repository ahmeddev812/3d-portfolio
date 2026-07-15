"use client";

import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./SceneContent"), {
  ssr: false,
});

export function HeroScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 -z-10 bg-primary" />;
  }

  return (
    <Suspense fallback={<div className="fixed inset-0 -z-10 bg-primary" />}>
      <Scene />
    </Suspense>
  );
}
