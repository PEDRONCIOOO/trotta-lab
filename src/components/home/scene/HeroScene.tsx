"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { HUB, type IconName, TILE, TILES, TUBE_R, type TileDef, capTexture, cutShape, glowTexture, tubeCurve } from "./network";

/* ---------- materiais compartilhados ---------- */
const capMat = new THREE.MeshPhysicalMaterial({ color: "#f4f4f4", roughness: 0.45, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.35 });
const bodyMat = new THREE.MeshStandardMaterial({ color: "#2b2b2b", roughness: 0.55, metalness: 0.15 });
const baseMat = new THREE.MeshStandardMaterial({ color: "#161616", roughness: 0.7, metalness: 0.1 });
const tubeMat = new THREE.MeshPhysicalMaterial({ color: "#1d1d1d", roughness: 0.28, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.15 });
const pulseMat = new THREE.MeshBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0.95, toneMapped: false });
let glowMat: THREE.SpriteMaterial | null = null;
const getGlowMat = () => {
  if (!glowMat) glowMat = new THREE.SpriteMaterial({ map: glowTexture(), color: "#ffffff", transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
  return glowMat;
};

const extrude = (size: number, depth: number, bevel = 0.04) =>
  new THREE.ExtrudeGeometry(cutShape(size), { depth, bevelEnabled: true, bevelSize: bevel, bevelThickness: bevel, bevelSegments: 3, curveSegments: 4 });

/* ---------- keycap = base + corpo + tampa (com textura) ---------- */
function Keycap({ size, height, kind, position, seed }: { size: number; height: number; kind: IconName | "logo"; position: [number, number, number]; seed: number }) {
  const cap = useRef<THREE.Group>(null);
  const geo = useMemo(() => ({
    base: extrude(size, height * 0.35, 0.03),
    body: extrude(size * 0.96, height * 0.45, 0.03),
    cap: extrude(size * 0.8, height * 0.35, 0.05),
  }), [size, height]);
  const tex = useMemo(() => {
    const t = capTexture(kind);
    const w = size * 0.8;
    t.repeat.set(-1 / w, 1 / w); // X invertido: a face fica espelhada após a rotação do grupo
    t.offset.set(0.5, 0.5);
    return t;
  }, [kind, size]);
  const topMat = useMemo(() => new THREE.MeshPhysicalMaterial({ map: tex, roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.35 }), [tex]);

  // Só a tampa branca flutua: sobe/desce em deriva lenta (dois senos) e inclina de leve,
  // abrindo um vão visível entre ela e o corpo preto. Base e corpo ficam fixos.
  const lift = size * 0.34;
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const el = cap.current;
    if (!el) return;
    const wave = (Math.sin(t * 0.45 + seed) + 1) * 0.5 * 0.7 + (Math.sin(t * 0.27 + seed * 1.7) + 1) * 0.5 * 0.3; // 0..1
    el.position.z = 0.02 + wave * lift; // z = altura (grupo rotacionado)
    el.rotation.x = Math.sin(t * 0.33 + seed * 0.9) * 0.05;
    el.rotation.y = Math.cos(t * 0.29 + seed * 1.3) * 0.05;
  });

  const h = height;
  return (
    <group position={position}>
      {/* geometrias extrudadas ao longo de +z → giramos para que a extrusão vire altura (y) */}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={geo.base} material={baseMat} castShadow receiveShadow />
        <mesh geometry={geo.body} material={bodyMat} position={[0, 0, h * 0.35]} castShadow receiveShadow />
        <group position={[0, 0, h * 0.8]}>
          <group ref={cap}>
            <mesh geometry={geo.cap} material={[topMat, capMat]} castShadow />
          </group>
        </group>
      </group>
    </group>
  );
}

/* ---------- tubo + pulso ---------- */
function Tube({ tile, index }: { tile: TileDef; index: number }) {
  const curve = useMemo(() => tubeCurve(tile), [tile]);
  const geo = useMemo(() => new THREE.TubeGeometry(curve, 64, TUBE_R, 14, false), [curve]);
  const pulse = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Sprite>(null);
  const len = useMemo(() => curve.getLength(), [curve]);
  const period = 4.8; // s por travessia (lento)
  const delay = index * 0.5;

  useFrame(({ clock }) => {
    const t = ((clock.elapsedTime - delay) / period) % 1;
    const u = t < 0 ? t + 1 : t;
    const p = curve.getPointAt(u);
    const tan = curve.getTangentAt(u);
    if (pulse.current) {
      pulse.current.position.copy(p);
      pulse.current.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan);
      // some suavemente nas pontas
      const fade = Math.min(1, u * 6, (1 - u) * 6);
      (pulse.current.material as THREE.MeshBasicMaterial).opacity = 0.95 * fade;
      if (glow.current) { glow.current.position.copy(p); glow.current.material.opacity = 0.5 * fade; }
    }
  });

  return (
    <group>
      <mesh geometry={geo} material={tubeMat} castShadow receiveShadow />
      <mesh ref={pulse} material={pulseMat}>
        <capsuleGeometry args={[TUBE_R * 0.55, Math.min(0.6, len * 0.18), 4, 8]} />
      </mesh>
      <sprite ref={glow} material={getGlowMat()} scale={[0.9, 0.9, 1]} />
    </group>
  );
}

/* ---------- hub com brilho pulsante ---------- */
function Hub() {
  const light = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    if (light.current) light.current.intensity = 0.45 + Math.sin(clock.elapsedTime * 1.3) * 0.25;
  });
  return (
    <group>
      <Keycap size={HUB} height={0.5} kind="logo" position={[0, 0, 0]} seed={0} />
      <pointLight ref={light} position={[0, 1.1, 0]} color="#ffffff" intensity={0.5} distance={3.5} decay={2} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <hemisphereLight args={["#726f6f", "#0a0a0a", 0.7]} />
      <directionalLight position={[4, 8, 5]} intensity={1.4} castShadow shadow-mapSize={[1024, 1024]} shadow-bias={-0.0005}>
        <orthographicCamera attach="shadow-camera" args={[-7, 7, 7, -7, 1, 20]} />
      </directionalLight>
      <directionalLight position={[-6, 4, -4]} intensity={0.5} color="#f9fcf6" />

      {TILES.map((t, i) => <Tube key={t.id} tile={t} index={i} />)}
      {TILES.map((t, i) => (
        <Keycap key={t.id} size={TILE} height={0.32} kind={t.icon} position={[t.x, 0, t.z]} seed={i * 1.37 + 1} />
      ))}
      <Hub />

      <ContactShadows position={[0, -0.02, 0.4]} opacity={0.7} scale={14} blur={2.2} far={3} resolution={512} color="#000" />
    </>
  );
}

/** Canvas do hero — fundo transparente sobre o .cave; câmera levemente inclinada (vista de cima). */
export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      shadows
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 10.5, 9.2], fov: 30, near: 0.1, far: 60 }}
      onCreated={({ camera }) => camera.lookAt(0, 0, 0.5)}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
}
