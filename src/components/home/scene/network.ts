// Geometria da "rede Trotta" em unidades de cena (1u ≈ 1 tile).
// Mesma topologia do HeroArt (SVG): hub central + 9 tiles, tubos com cotovelos.
import * as THREE from "three";

export type TileDef = { id: string; x: number; z: number; icon: IconName };
export type IconName =
  | "team" | "monitor" | "share" | "cloud" | "shield" | "history" | "flask" | "network" | "database";

export const TILE = 1.0; // lado do tile
export const HUB = 1.6; // lado do hub
export const TUBE_R = 0.11;

// plano XZ (x = horizontal, z = "para baixo" na tela)
export const TILES: TileDef[] = [
  { id: "time", x: -4.0, z: -2.0, icon: "team" },
  { id: "produto", x: -2.6, z: -0.5, icon: "monitor" },
  { id: "integra", x: -4.0, z: 1.4, icon: "share" },
  { id: "cloud", x: 4.0, z: -2.0, icon: "cloud" },
  { id: "auditoria", x: 2.6, z: -0.5, icon: "shield" },
  { id: "evolucao", x: 4.0, z: 1.4, icon: "history" },
  { id: "lab", x: -2.3, z: 3.2, icon: "flask" },
  { id: "arquit", x: 0, z: 3.4, icon: "network" },
  { id: "dados", x: 2.3, z: 3.2, icon: "database" },
];

/** Curva do tubo: sai do hub (lado ou frente), cotovelos suaves, chega no tile. y = altura do tubo. */
export function tubeCurve(t: TileDef, y = 0.12): THREE.CatmullRomCurve3 {
  const hs = HUB / 2;
  const pts: THREE.Vector3[] = [];
  const dx = t.x, dz = t.z;
  if (Math.abs(dx) > Math.abs(dz)) {
    const sx = Math.sign(dx) * hs;
    const sz = THREE.MathUtils.clamp(dz * 0.15, -0.4, 0.4);
    const ex = t.x - Math.sign(dx) * TILE / 2;
    const mx = sx + (ex - sx) * 0.5;
    pts.push(new THREE.Vector3(sx, y, sz), new THREE.Vector3(mx - Math.sign(dx) * 0.25, y, sz),
      new THREE.Vector3(mx, y, sz + Math.sign(dz - sz) * 0.25), new THREE.Vector3(mx, y, dz - Math.sign(dz - sz) * 0.25),
      new THREE.Vector3(mx + Math.sign(dx) * 0.25, y, dz), new THREE.Vector3(ex, y, dz));
  } else {
    const sx = THREE.MathUtils.clamp(dx * 0.25, -0.45, 0.45);
    const sz = hs;
    const ez = t.z - TILE / 2;
    const mz = sz + (ez - sz) * 0.5;
    if (Math.abs(dx) < 0.05) pts.push(new THREE.Vector3(sx, y, sz), new THREE.Vector3(sx, y, ez));
    else pts.push(new THREE.Vector3(sx, y, sz), new THREE.Vector3(sx, y, mz - 0.25),
      new THREE.Vector3(sx + Math.sign(dx) * 0.25, y, mz), new THREE.Vector3(dx - Math.sign(dx) * 0.25, y, mz),
      new THREE.Vector3(dx, y, mz + 0.25), new THREE.Vector3(dx, y, ez));
  }
  const c = new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.35);
  return c;
}

/** Forma .cut (quadrado com dois cantos opostos chanfrados), centrada na origem. */
export function cutShape(size: number, cut = size * 0.18): THREE.Shape {
  const h = size / 2;
  const s = new THREE.Shape();
  s.moveTo(-h + cut, -h);
  s.lineTo(h, -h);
  s.lineTo(h, h - cut);
  s.lineTo(h - cut, h);
  s.lineTo(-h, h);
  s.lineTo(-h, -h + cut);
  s.closePath();
  return s;
}

// Ícones 28×28 (traço) — mesmos paths do HeroArt SVG, desenhados em canvas para textura.
export const ICON_PATHS: Record<IconName, string[]> = {
  team: ["M10 6a4 4 0 1 0 0 8 4 4 0 1 0 0-8", "M19 5.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 1 0 0-6.4", "M3 23c0-5 3-8 7-8s7 3 7 8", "M16 22c0-4 2-6.5 5-6.5s5 2.5 5 6.5"],
  monitor: ["M4.5 5h19a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 3 17.5v-11A1.5 1.5 0 0 1 4.5 5z", "M9 24h10", "M14 19v5", "M8 12l3 2.5L8 17", "M13 17h5"],
  share: ["M21 3a3 3 0 1 0 0 6 3 3 0 1 0 0-6", "M7 11a3 3 0 1 0 0 6 3 3 0 1 0 0-6", "M21 19a3 3 0 1 0 0 6 3 3 0 1 0 0-6", "M9.6 12.6l8.8-5.2", "M9.6 15.4l8.8 5.2"],
  cloud: ["M8 21h12a5 5 0 0 0 .8-9.9A7 7 0 0 0 7.3 12.6 4.5 4.5 0 0 0 8 21z"],
  shield: ["M14 3l9 3.5v7c0 5.5-3.8 9.6-9 11.5-5.2-1.9-9-6-9-11.5v-7z", "M9.5 14l3 3 6-6"],
  history: ["M5 14a9 9 0 1 0 2.6-6.4", "M5 4v5h5", "M14 9v5.5l3.5 2"],
  flask: ["M11 3h6", "M12 3v7l-6.5 11a2 2 0 0 0 1.7 3h13.6a2 2 0 0 0 1.7-3L16 10V3", "M8.5 18h11"],
  network: ["M11 3h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z", "M3 18h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z", "M19 18h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z", "M14 9v4", "M6 18v-5h16v5"],
  database: ["M14 3.5c5 0 9 1.6 9 3.5s-4 3.5-9 3.5-9-1.6-9-3.5 4-3.5 9-3.5z", "M5 7v14c0 2 4 3.5 9 3.5s9-1.5 9-3.5V7", "M5 14c0 2 4 3.5 9 3.5s9-1.5 9-3.5"],
};

export const T_LOGO = "M12 12h34l6 6v5H37.5v23l-6 6h-5V23H12z";

/** Textura da tampa: fundo branco com pontilhado + ícone (ou logo) em preto. */
export function capTexture(kind: IconName | "logo", px = 256): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = px;
  const g = c.getContext("2d") as CanvasRenderingContext2D;
  g.fillStyle = "#f4f4f4";
  g.fillRect(0, 0, px, px);
  g.fillStyle = "rgba(10,10,10,.10)";
  for (let y = 8; y < px; y += 12) for (let x = 8; x < px; x += 12) { g.beginPath(); g.arc(x, y, 1.1, 0, Math.PI * 2); g.fill(); }
  g.strokeStyle = "#0a0a0a";
  g.fillStyle = "#0a0a0a";
  g.lineCap = "round";
  g.lineJoin = "round";
  if (kind === "logo") {
    g.save();
    g.translate(px / 2, px / 2);
    g.rotate((-8 * Math.PI) / 180);
    const s = (px * 0.62) / 64;
    g.scale(s, s);
    g.translate(-32, -32);
    g.fill(new Path2D(T_LOGO));
    g.restore();
  } else {
    g.save();
    const s = (px * 0.5) / 28;
    g.translate(px / 2 - 14 * s, px / 2 - 14 * s);
    g.scale(s, s);
    g.lineWidth = 2.1;
    for (const d of ICON_PATHS[kind]) g.stroke(new Path2D(d));
    g.restore();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/** Sprite de brilho: gradiente radial branco → transparente. */
export function glowTexture(px = 128): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = px;
  const g = c.getContext("2d") as CanvasRenderingContext2D;
  const r = g.createRadialGradient(px / 2, px / 2, 0, px / 2, px / 2, px / 2);
  r.addColorStop(0, "rgba(255,255,255,1)");
  r.addColorStop(0.35, "rgba(255,255,255,.35)");
  r.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = r;
  g.fillRect(0, 0, px, px);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
