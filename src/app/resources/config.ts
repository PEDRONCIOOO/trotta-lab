// Configuração global do site (equivalente ao config.js do portfólio)
const baseURL = "lab.trotta.dev";

const routes = {
  "/": true,
  "/servicos": true,
  "/sobre": true,
  "/privacidade": true,
  "/cookies": true,
};

const style = {
  theme: "mono", // mono (preto/branco) — tokens em src/ui/tokens/tokens.scss
  cut: 18, // chanfro padrão (px)
  container: 1280,
};

const display = {
  topbar: true, // barra "Você está vendo a versão Brasil"
  regionToggle: true, // toggle Mundo/Brasil no footer
  newsletter: true,
  hero3d: true, // cena Three.js no hero; false = SVG estático (HeroArt)
};

const contact = {
  email: "contato@trotta.dev", // exibido no site (mailto) — encaminhado via Cloudflare Email Routing
  endpoint: "/api/contact", // POST do formulário → e-mail (src/app/api/contact/route.ts)
  thankYouPath: "/obrigado", // página de confirmação (conversão do Google Ads)
};

const consent = {
  cookieName: "trotta_consent",
  maxAgeDays: 180,
};

const social = [
  { name: "LinkedIn", link: "https://www.linkedin.com/company/trotta-lab/" },
];

export { baseURL, routes, style, display, contact, consent, social };
