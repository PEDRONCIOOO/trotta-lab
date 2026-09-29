import styles from "./HeroArt.module.scss";

/**
 * Ilustração do hero — "rede Trotta": hub central com a marca ligado por tubos a 9 tiles (serviços);
 * pulsos de luz percorrem os tubos em loop (CSS puro, sem JS em runtime).
 * Geometria gerada a partir de design/hero/network.proto.html. Ícones: 28×28, traço 2px.
 */
export function HeroArt() {
  return (
    <svg viewBox="0 0 640 480" fill="none" aria-hidden="true" className={styles.art}>
      <defs>
        <filter id="hn-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.5" /></filter>
        <filter id="hn-glow2" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8" /></filter>
        <filter id="hn-hubglow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="14" /></filter>
        <pattern id="hn-dots" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r=".7" fill="#0a0a0a" fillOpacity=".14" /></pattern>
        <pattern id="hn-bgdots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r="1" fill="#fff" fillOpacity=".07" /></pattern>
      </defs>
      <rect width="640" height="480" fill="url(#hn-bgdots)" />

      {/* tubos: corpo, miolo, brilho */}
      <path className={styles.tube} d="M261 171.1 L200.5 171.1 Q182.5 171.1 182.5 153.1 L182.5 82 Q182.5 64 164.5 64 L104 64" />
      <path className={styles.tube} d="M261 185.5 L242.5 185.5 Q224.5 185.5 224.5 167.5 L224.5 178 Q224.5 160 206.5 160 L188 160" />
      <path className={styles.tube} d="M261 203.5 L200.5 203.5 Q182.5 203.5 182.5 221.5 L182.5 262 Q182.5 280 164.5 280 L104 280" />
      <path className={styles.tube} d="M379 171.1 L439.5 171.1 Q457.5 171.1 457.5 153.1 L457.5 82 Q457.5 64 475.5 64 L536 64" />
      <path className={styles.tube} d="M379 185.5 L397.5 185.5 Q415.5 185.5 415.5 167.5 L415.5 178 Q415.5 160 433.5 160 L452 160" />
      <path className={styles.tube} d="M379 203.5 L439.5 203.5 Q457.5 203.5 457.5 221.5 L457.5 262 Q457.5 280 475.5 280 L536 280" />
      <path className={styles.tube} d="M286 249 L286 290.5 Q286 308.5 268 308.5 L188 308.5 Q170 308.5 170 326.5 L170 368" />
      <path className={styles.tube} d="M320 249 L320 372" />
      <path className={styles.tube} d="M354 249 L354 290.5 Q354 308.5 372 308.5 L452 308.5 Q470 308.5 470 326.5 L470 368" />
      <path className={styles.tubeIn} d="M261 171.1 L200.5 171.1 Q182.5 171.1 182.5 153.1 L182.5 82 Q182.5 64 164.5 64 L104 64" />
      <path className={styles.tubeIn} d="M261 185.5 L242.5 185.5 Q224.5 185.5 224.5 167.5 L224.5 178 Q224.5 160 206.5 160 L188 160" />
      <path className={styles.tubeIn} d="M261 203.5 L200.5 203.5 Q182.5 203.5 182.5 221.5 L182.5 262 Q182.5 280 164.5 280 L104 280" />
      <path className={styles.tubeIn} d="M379 171.1 L439.5 171.1 Q457.5 171.1 457.5 153.1 L457.5 82 Q457.5 64 475.5 64 L536 64" />
      <path className={styles.tubeIn} d="M379 185.5 L397.5 185.5 Q415.5 185.5 415.5 167.5 L415.5 178 Q415.5 160 433.5 160 L452 160" />
      <path className={styles.tubeIn} d="M379 203.5 L439.5 203.5 Q457.5 203.5 457.5 221.5 L457.5 262 Q457.5 280 475.5 280 L536 280" />
      <path className={styles.tubeIn} d="M286 249 L286 290.5 Q286 308.5 268 308.5 L188 308.5 Q170 308.5 170 326.5 L170 368" />
      <path className={styles.tubeIn} d="M320 249 L320 372" />
      <path className={styles.tubeIn} d="M354 249 L354 290.5 Q354 308.5 372 308.5 L452 308.5 Q470 308.5 470 326.5 L470 368" />
      <path className={styles.tubeHl} d="M261 171.1 L200.5 171.1 Q182.5 171.1 182.5 153.1 L182.5 82 Q182.5 64 164.5 64 L104 64" />
      <path className={styles.tubeHl} d="M261 185.5 L242.5 185.5 Q224.5 185.5 224.5 167.5 L224.5 178 Q224.5 160 206.5 160 L188 160" />
      <path className={styles.tubeHl} d="M261 203.5 L200.5 203.5 Q182.5 203.5 182.5 221.5 L182.5 262 Q182.5 280 164.5 280 L104 280" />
      <path className={styles.tubeHl} d="M379 171.1 L439.5 171.1 Q457.5 171.1 457.5 153.1 L457.5 82 Q457.5 64 475.5 64 L536 64" />
      <path className={styles.tubeHl} d="M379 185.5 L397.5 185.5 Q415.5 185.5 415.5 167.5 L415.5 178 Q415.5 160 433.5 160 L452 160" />
      <path className={styles.tubeHl} d="M379 203.5 L439.5 203.5 Q457.5 203.5 457.5 221.5 L457.5 262 Q457.5 280 475.5 280 L536 280" />
      <path className={styles.tubeHl} d="M286 249 L286 290.5 Q286 308.5 268 308.5 L188 308.5 Q170 308.5 170 326.5 L170 368" />
      <path className={styles.tubeHl} d="M320 249 L320 372" />
      <path className={styles.tubeHl} d="M354 249 L354 290.5 Q354 308.5 372 308.5 L452 308.5 Q470 308.5 470 326.5 L470 368" />

      {/* pulsos (difuso + núcleo), um por tubo, escalonados */}
      <path className={`${styles.pulse} ${styles.soft}`} d="M261 171.1 L200.5 171.1 Q182.5 171.1 182.5 153.1 L182.5 82 Q182.5 64 164.5 64 L104 64" pathLength={100} style={{ animationDelay: "0.00s" }} />
      <path className={styles.pulse} d="M261 171.1 L200.5 171.1 Q182.5 171.1 182.5 153.1 L182.5 82 Q182.5 64 164.5 64 L104 64" pathLength={100} style={{ animationDelay: "0.00s" }} />
      <path className={`${styles.pulse} ${styles.soft}`} d="M261 185.5 L242.5 185.5 Q224.5 185.5 224.5 167.5 L224.5 178 Q224.5 160 206.5 160 L188 160" pathLength={100} style={{ animationDelay: "0.35s" }} />
      <path className={styles.pulse} d="M261 185.5 L242.5 185.5 Q224.5 185.5 224.5 167.5 L224.5 178 Q224.5 160 206.5 160 L188 160" pathLength={100} style={{ animationDelay: "0.35s" }} />
      <path className={`${styles.pulse} ${styles.soft}`} d="M261 203.5 L200.5 203.5 Q182.5 203.5 182.5 221.5 L182.5 262 Q182.5 280 164.5 280 L104 280" pathLength={100} style={{ animationDelay: "0.70s" }} />
      <path className={styles.pulse} d="M261 203.5 L200.5 203.5 Q182.5 203.5 182.5 221.5 L182.5 262 Q182.5 280 164.5 280 L104 280" pathLength={100} style={{ animationDelay: "0.70s" }} />
      <path className={`${styles.pulse} ${styles.soft}`} d="M379 171.1 L439.5 171.1 Q457.5 171.1 457.5 153.1 L457.5 82 Q457.5 64 475.5 64 L536 64" pathLength={100} style={{ animationDelay: "1.05s" }} />
      <path className={styles.pulse} d="M379 171.1 L439.5 171.1 Q457.5 171.1 457.5 153.1 L457.5 82 Q457.5 64 475.5 64 L536 64" pathLength={100} style={{ animationDelay: "1.05s" }} />
      <path className={`${styles.pulse} ${styles.soft}`} d="M379 185.5 L397.5 185.5 Q415.5 185.5 415.5 167.5 L415.5 178 Q415.5 160 433.5 160 L452 160" pathLength={100} style={{ animationDelay: "1.40s" }} />
      <path className={styles.pulse} d="M379 185.5 L397.5 185.5 Q415.5 185.5 415.5 167.5 L415.5 178 Q415.5 160 433.5 160 L452 160" pathLength={100} style={{ animationDelay: "1.40s" }} />
      <path className={`${styles.pulse} ${styles.soft}`} d="M379 203.5 L439.5 203.5 Q457.5 203.5 457.5 221.5 L457.5 262 Q457.5 280 475.5 280 L536 280" pathLength={100} style={{ animationDelay: "1.75s" }} />
      <path className={styles.pulse} d="M379 203.5 L439.5 203.5 Q457.5 203.5 457.5 221.5 L457.5 262 Q457.5 280 475.5 280 L536 280" pathLength={100} style={{ animationDelay: "1.75s" }} />
      <path className={`${styles.pulse} ${styles.soft}`} d="M286 249 L286 290.5 Q286 308.5 268 308.5 L188 308.5 Q170 308.5 170 326.5 L170 368" pathLength={100} style={{ animationDelay: "2.10s" }} />
      <path className={styles.pulse} d="M286 249 L286 290.5 Q286 308.5 268 308.5 L188 308.5 Q170 308.5 170 326.5 L170 368" pathLength={100} style={{ animationDelay: "2.10s" }} />
      <path className={`${styles.pulse} ${styles.soft}`} d="M320 249 L320 372" pathLength={100} style={{ animationDelay: "2.45s" }} />
      <path className={styles.pulse} d="M320 249 L320 372" pathLength={100} style={{ animationDelay: "2.45s" }} />
      <path className={`${styles.pulse} ${styles.soft}`} d="M354 249 L354 290.5 Q354 308.5 372 308.5 L452 308.5 Q470 308.5 470 326.5 L470 368" pathLength={100} style={{ animationDelay: "2.80s" }} />
      <path className={styles.pulse} d="M354 249 L354 290.5 Q354 308.5 372 308.5 L452 308.5 Q470 308.5 470 326.5 L470 368" pathLength={100} style={{ animationDelay: "2.80s" }} />

      {/* hub com a marca */}
      <g>
        <path className={styles.hubRing} d="M272.88 124 H392 V243.12 L367.12 268 H248 V148.88 Z" fill="#fff" fillOpacity=".9" filter="url(#hn-hubglow)" />
        <path d="M279.88 143 H379 V242.12 L360.12 261 H261 V161.88 Z" fill="#0f0f0f" />
        <path d="M279.88 137 H379 V236.12 L360.12 255 H261 V155.88 Z" fill="#2a2a2a" />
        <path d="M279.88 131 H379 V230.12 L360.12 249 H261 V149.88 Z" fill="#3a3a3a" />
        <path d="M279.88 131 H379 V230.12 L360.12 249 H261 V149.88 Z" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="1.5" />
        <path d="M287.904 138.8 H367.2 V218.096 L352.096 233.2 H272.8 V153.904 Z" fill="#f7f7f7" />
        <path d="M287.904 138.8 H367.2 V218.096 L352.096 233.2 H272.8 V153.904 Z" fill="url(#hn-dots)" />
        <g transform="translate(288 154) rotate(-8 32 32)">
          <path d="M12 12h34l6 6v5H37.5v23l-6 6h-5V23H12z" fill="#0a0a0a" />
        </g>
      </g>

      {/* time */}
      <g className={styles.tile}>
        <path d="M41.68 33 H104 V95.32 L90.32 109 H28 V46.68 Z" fill="#0f0f0f" />
        <path d="M41.68 29 H104 V91.32 L90.32 105 H28 V42.68 Z" fill="#2a2a2a" />
        <path d="M41.68 26 H104 V88.32 L90.32 102 H28 V39.68 Z" fill="#3a3a3a" />
        <path d="M45.784000000000006 29.840000000000003 H97.16 V81.216 L86.216 92.16 H34.84 V40.784000000000006 Z" fill="#f2f2f2" />
        <path d="M45.784000000000006 29.840000000000003 H97.16 V81.216 L86.216 92.16 H34.84 V40.784000000000006 Z" fill="url(#hn-dots)" />
        <g transform="translate(52 47)" stroke="#0a0a0a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="10" r="4" /><circle cx="19" cy="9" r="3.2" /><path d="M3 23c0-5 3-8 7-8s7 3 7 8M16 22c0-4 2-6.5 5-6.5s5 2.5 5 6.5" />
        </g>
      </g>

      {/* produto */}
      <g className={styles.tile}>
        <path d="M125.68 129 H188 V191.32 L174.32 205 H112 V142.68 Z" fill="#0f0f0f" />
        <path d="M125.68 125 H188 V187.32 L174.32 201 H112 V138.68 Z" fill="#2a2a2a" />
        <path d="M125.68 122 H188 V184.32 L174.32 198 H112 V135.68 Z" fill="#3a3a3a" />
        <path d="M129.784 125.84 H181.16 V177.216 L170.216 188.16 H118.84 V136.784 Z" fill="#f2f2f2" />
        <path d="M129.784 125.84 H181.16 V177.216 L170.216 188.16 H118.84 V136.784 Z" fill="url(#hn-dots)" />
        <g transform="translate(136 143)" stroke="#0a0a0a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="22" height="14" rx="1.5" /><path d="M9 24h10M14 19v5M8 12l3 2.5L8 17M13 17h5" />
        </g>
      </g>

      {/* integra */}
      <g className={styles.tile}>
        <path d="M41.68 249 H104 V311.32 L90.32 325 H28 V262.68 Z" fill="#0f0f0f" />
        <path d="M41.68 245 H104 V307.32 L90.32 321 H28 V258.68 Z" fill="#2a2a2a" />
        <path d="M41.68 242 H104 V304.32 L90.32 318 H28 V255.68 Z" fill="#3a3a3a" />
        <path d="M45.784000000000006 245.84 H97.16 V297.21599999999995 L86.216 308.15999999999997 H34.84 V256.784 Z" fill="#f2f2f2" />
        <path d="M45.784000000000006 245.84 H97.16 V297.21599999999995 L86.216 308.15999999999997 H34.84 V256.784 Z" fill="url(#hn-dots)" />
        <g transform="translate(52 263)" stroke="#0a0a0a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="21" cy="6" r="3" /><circle cx="7" cy="14" r="3" /><circle cx="21" cy="22" r="3" /><path d="M9.6 12.6l8.8-5.2M9.6 15.4l8.8 5.2" />
        </g>
      </g>

      {/* cloud */}
      <g className={styles.tile}>
        <path d="M549.68 33 H612 V95.32 L598.32 109 H536 V46.68 Z" fill="#0f0f0f" />
        <path d="M549.68 29 H612 V91.32 L598.32 105 H536 V42.68 Z" fill="#2a2a2a" />
        <path d="M549.68 26 H612 V88.32 L598.32 102 H536 V39.68 Z" fill="#3a3a3a" />
        <path d="M553.784 29.840000000000003 H605.16 V81.216 L594.216 92.16 H542.84 V40.784000000000006 Z" fill="#f2f2f2" />
        <path d="M553.784 29.840000000000003 H605.16 V81.216 L594.216 92.16 H542.84 V40.784000000000006 Z" fill="url(#hn-dots)" />
        <g transform="translate(560 47)" stroke="#0a0a0a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 21h12a5 5 0 0 0 .8-9.9A7 7 0 0 0 7.3 12.6 4.5 4.5 0 0 0 8 21z" />
        </g>
      </g>

      {/* auditoria */}
      <g className={styles.tile}>
        <path d="M465.68 129 H528 V191.32 L514.32 205 H452 V142.68 Z" fill="#0f0f0f" />
        <path d="M465.68 125 H528 V187.32 L514.32 201 H452 V138.68 Z" fill="#2a2a2a" />
        <path d="M465.68 122 H528 V184.32 L514.32 198 H452 V135.68 Z" fill="#3a3a3a" />
        <path d="M469.78400000000005 125.84 H521.16 V177.216 L510.21599999999995 188.16 H458.84000000000003 V136.784 Z" fill="#f2f2f2" />
        <path d="M469.78400000000005 125.84 H521.16 V177.216 L510.21599999999995 188.16 H458.84000000000003 V136.784 Z" fill="url(#hn-dots)" />
        <g transform="translate(476 143)" stroke="#0a0a0a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 3l9 3.5v7c0 5.5-3.8 9.6-9 11.5-5.2-1.9-9-6-9-11.5v-7z" /><path d="M9.5 14l3 3 6-6" />
        </g>
      </g>

      {/* evolucao */}
      <g className={styles.tile}>
        <path d="M549.68 249 H612 V311.32 L598.32 325 H536 V262.68 Z" fill="#0f0f0f" />
        <path d="M549.68 245 H612 V307.32 L598.32 321 H536 V258.68 Z" fill="#2a2a2a" />
        <path d="M549.68 242 H612 V304.32 L598.32 318 H536 V255.68 Z" fill="#3a3a3a" />
        <path d="M553.784 245.84 H605.16 V297.21599999999995 L594.216 308.15999999999997 H542.84 V256.784 Z" fill="#f2f2f2" />
        <path d="M553.784 245.84 H605.16 V297.21599999999995 L594.216 308.15999999999997 H542.84 V256.784 Z" fill="url(#hn-dots)" />
        <g transform="translate(560 263)" stroke="#0a0a0a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 14a9 9 0 1 0 2.6-6.4" /><path d="M5 4v5h5M14 9v5.5l3.5 2" />
        </g>
      </g>

      {/* lab */}
      <g className={styles.tile}>
        <path d="M145.68 375 H208 V437.32 L194.32 451 H132 V388.68 Z" fill="#0f0f0f" />
        <path d="M145.68 371 H208 V433.32 L194.32 447 H132 V384.68 Z" fill="#2a2a2a" />
        <path d="M145.68 368 H208 V430.32 L194.32 444 H132 V381.68 Z" fill="#3a3a3a" />
        <path d="M149.784 371.84000000000003 H201.16 V423.21599999999995 L190.216 434.15999999999997 H138.84 V382.78400000000005 Z" fill="#f2f2f2" />
        <path d="M149.784 371.84000000000003 H201.16 V423.21599999999995 L190.216 434.15999999999997 H138.84 V382.78400000000005 Z" fill="url(#hn-dots)" />
        <g transform="translate(156 389)" stroke="#0a0a0a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 3h6M12 3v7l-6.5 11a2 2 0 0 0 1.7 3h13.6a2 2 0 0 0 1.7-3L16 10V3" /><path d="M8.5 18h11" />
        </g>
      </g>

      {/* arquit */}
      <g className={styles.tile}>
        <path d="M295.68 379 H358 V441.32 L344.32 455 H282 V392.68 Z" fill="#0f0f0f" />
        <path d="M295.68 375 H358 V437.32 L344.32 451 H282 V388.68 Z" fill="#2a2a2a" />
        <path d="M295.68 372 H358 V434.32 L344.32 448 H282 V385.68 Z" fill="#3a3a3a" />
        <path d="M299.78400000000005 375.84000000000003 H351.15999999999997 V427.21599999999995 L340.21599999999995 438.15999999999997 H288.84000000000003 V386.78400000000005 Z" fill="#f2f2f2" />
        <path d="M299.78400000000005 375.84000000000003 H351.15999999999997 V427.21599999999995 L340.21599999999995 438.15999999999997 H288.84000000000003 V386.78400000000005 Z" fill="url(#hn-dots)" />
        <g transform="translate(306 393)" stroke="#0a0a0a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="3" width="8" height="6" rx="1" /><rect x="2" y="18" width="8" height="6" rx="1" /><rect x="18" y="18" width="8" height="6" rx="1" /><path d="M14 9v4M6 18v-5h16v5" />
        </g>
      </g>

      {/* dados */}
      <g className={styles.tile}>
        <path d="M445.68 375 H508 V437.32 L494.32 451 H432 V388.68 Z" fill="#0f0f0f" />
        <path d="M445.68 371 H508 V433.32 L494.32 447 H432 V384.68 Z" fill="#2a2a2a" />
        <path d="M445.68 368 H508 V430.32 L494.32 444 H432 V381.68 Z" fill="#3a3a3a" />
        <path d="M449.78400000000005 371.84000000000003 H501.15999999999997 V423.21599999999995 L490.21599999999995 434.15999999999997 H438.84000000000003 V382.78400000000005 Z" fill="#f2f2f2" />
        <path d="M449.78400000000005 371.84000000000003 H501.15999999999997 V423.21599999999995 L490.21599999999995 434.15999999999997 H438.84000000000003 V382.78400000000005 Z" fill="url(#hn-dots)" />
        <g transform="translate(456 389)" stroke="#0a0a0a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="14" cy="7" rx="9" ry="3.5" /><path d="M5 7v14c0 2 4 3.5 9 3.5s9-1.5 9-3.5V7M5 14c0 2 4 3.5 9 3.5s9-1.5 9-3.5" />
        </g>
      </g>
    </svg>
  );
}
