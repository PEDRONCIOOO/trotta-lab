import type { ServiceDetail } from "@/app/resources/content";

/** Ilustrações monocromáticas em linha (placeholders coerentes com o hero) */
export function ServiceIllustration({ name }: { name: ServiceDetail["icon"] }) {
  const c = { viewBox: "0 0 220 200", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinejoin: "round" as const };
  switch (name) {
    case "engineers":
      return (
        <svg {...c}>
          <path d="M20 170h180M50 170v-40h30v40M140 170v-55h30v55" fill="currentColor" fillOpacity=".08" />
          <path d="M65 130l-20-40h40zM110 150l-22-44h44zM155 115l-20-40h40z" fill="currentColor" fillOpacity=".15" />
          <circle cx="185" cy="40" r="8" /><circle cx="35" cy="55" r="4" />
        </svg>
      );
    case "product":
      return (
        <svg {...c}>
          <rect x="30" y="40" width="160" height="110" rx="2" fill="currentColor" fillOpacity=".06" />
          <path d="M30 66h160M70 170h80M110 150v20" />
          <path d="M70 100l14 12-14 12M96 124h30" strokeLinecap="round" />
          <path d="M150 88l18 18-18 18" fill="currentColor" fillOpacity=".15" />
        </svg>
      );
    case "audit":
      return (
        <svg {...c}>
          <circle cx="95" cy="90" r="50" fill="currentColor" fillOpacity=".06" />
          <path d="M132 127l48 48" strokeLinecap="round" strokeWidth="6" />
          <path d="M72 90l16 16 30-32" strokeLinecap="round" strokeWidth="4" />
          <path d="M20 40h30M20 55h50M20 70h20" strokeOpacity=".4" />
        </svg>
      );
    case "hire":
      return (
        <svg {...c}>
          <circle cx="80" cy="70" r="22" fill="currentColor" fillOpacity=".08" />
          <circle cx="145" cy="70" r="22" fill="currentColor" fillOpacity=".08" />
          <path d="M35 160c0-28 18-48 45-48s45 20 45 48M100 160c0-28 18-48 45-48s45 20 45 48" />
          <path d="M104 96l8 8 8-8" strokeLinecap="round" />
        </svg>
      );
    case "lab":
      return (
        <svg {...c}>
          <path d="M110 30l60 45-60 95-60-95z" fill="currentColor" fillOpacity=".08" />
          <path d="M50 75h120M110 30v140M80 75l30-45 30 45" strokeOpacity=".6" />
          <path d="M30 180h160" strokeOpacity=".4" />
        </svg>
      );
    default:
      return null;
  }
}
