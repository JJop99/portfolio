"use client";

import { useKineticAnimations } from "@/app/hooks/useKineticAnimations";

export default function KineticBootstrap() {
  useKineticAnimations();

  return (
    <>
      <div className="cursor-ring" id="cursorRing" />
      <div className="cursor-dot" id="cursorDot" />
      <div className="scroll-progress" id="scrollProgress" />
    </>
  );
}
