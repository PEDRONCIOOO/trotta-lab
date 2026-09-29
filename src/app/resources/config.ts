// Configuração global do site (equivalente ao config.js do portfólio)
const baseURL = "trotta.com.br";

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
  email: "pedrojava1911@hotmail.com", // exibido no site (mailto)
  endpoint: "/api/contact", // POST do formulário → e-mail (src/app/api/contact/route.ts)
};

const consent = {
  cookieName: "trotta_consent",
  maxAgeDays: 180,
};

const social = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/pedro-trotta-853b17323/" },
  { name: "Instagram", link: "https://instagram.com/devtrotta" },
  { name: "GitHub", link: "https://github.com/PEDRONCIOOO" },
  { name: "X", link: "https://x.com/pedronkiooo" },
];

export { baseURL, routes, style, display, contact, consent, social };
