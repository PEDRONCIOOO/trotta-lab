/** Marca Trotta — "T" torto com chanfros opostos (regra .cut). Fonte: design/logo/cut/04a-cut-8.svg */
export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g transform="rotate(-8 32 32)">
        <path d="M12 12h34l6 6v5H37.5v23l-6 6h-5V23H12z" fill="currentColor" />
      </g>
    </svg>
  );
}
