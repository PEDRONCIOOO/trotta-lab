"use client";

import dynamic from "next/dynamic";
import { HeroArt } from "../HeroArt";

/** Carrega a cena 3D só no cliente; enquanto isso (e sem WebGL) mostra o SVG. */
const HeroScene = dynamic(() => import("./HeroScene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => <HeroArt />,
});

export function HeroSceneLoader() {
  return (
    <div style={{ width: "100%", aspectRatio: "4 / 3", position: "relative" }}>
      <HeroScene />
    </div>
  );
}
