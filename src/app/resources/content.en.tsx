// All landing page content (en-US). Mirrors content.tsx structure exactly.
import type { ReactNode } from "react";
import type {
  ServiceItem,
  Step,
  Offer,
  Testimonial,
  Project,
  FooterLink,
  NavItem,
  ServiceDetail as ServiceDetailType,
  Milestone,
  TeamMember,
  CommunityEvent,
  LegalSection,
  LegalDoc,
} from "./content";

const brand = {
  name: "Trotta",
  tagline: "Your software development boutique",
  description:
    "Vetted engineers, product build, technical audits, and an AI-first lab that turns ideas and MVPs into real software.",
};

const nav = {
  topbar: { text: "You're viewing the", region: "World", switchLabel: "Switch to:", switchTo: "Brasil" },
  items: [
    { label: "Lab", href: "/en#lab" },
    { label: "Services", href: "/en/services" },
    { label: "Process", href: "/en#processo" },
    { label: "About", href: "/en/about" },
  ] as NavItem[],
  cta: { label: "Let's talk", href: "/en#contato" },
};

const hero = {
  eyebrow: "Software Development Boutique · AI-First Lab",
  headline: "Scale your team with vetted engineers. Turn ideas into real software.",
  cta: { label: "Let's talk", href: "#contato" },
  stats: [
    { value: "80+", label: "Vetted engineers" },
    { value: "150+", label: "Companies served" },
    { value: "14 years", label: "Supporting tech teams" },
  ],
};

const sectors = {
  eyebrow: "Industries we serve",
  items: [
    "Artificial Intelligence", "Fintech", "Health Tech", "Education", "E-commerce", "HR Tech", "SaaS",
    "Consumer Electronics", "Aviation", "Retail", "Financial Services", "Cloud", "Digital Marketing",
    "Media & Entertainment", "eSports", "Real Estate", "Nonprofit",
  ],
};

const services = {
  title: "Our services",
  description:
    "End-to-end engineering solutions — from technical audits to full product development. We bring more than technical expertise: we bring an obsession with turning your ideas into reality.",
  cta: { label: "More details", href: "/en/services" },
  detailsLabel: "What's included & ideal for",
  includedLabel: "What's included",
  idealLabel: "Ideal for",
  featured: {
    title: "We provide vetted engineers",
    summary:
      "Scale your team with pre-screened, highly qualified engineers who integrate seamlessly into your workflow. Need on-demand expertise or long-term contributors? We connect you with engineers with proven technical and interpersonal skills.",
    included: [
      "Access to a pool of senior engineers in Ruby, JavaScript, TypeScript, Go, AWS, and more.",
      "Onboarding support for a smooth integration with your team.",
      "Flexible allocation tailored to project duration and goals.",
    ],
    idealFor: [
      "Companies with an immediate talent shortage.",
      "Teams scaling for product launches.",
      "Companies struggling to find experienced engineers.",
    ],
    icon: "engineers",
  } satisfies ServiceItem,
  items: [
    {
      title: "We build your product",
      summary:
        "From ideation to deploy: full-stack development so your software is scalable, reliable, and future-proof. UX/UI design, backend, frontend, and QA in a single cycle.",
      included: [
        "Full-cycle development: UX/UI, backend, frontend, and testing.",
        "Experience in e-commerce, health tech, fintech, and more.",
        "Modern stack for long-term performance and maintainability.",
      ],
      idealFor: [
        "Startups bringing their MVP to market quickly.",
        "Companies undergoing digital transformation or modernizing tools.",
      ],
      icon: "product",
    },
    {
      title: "Technical Audits & Team Assessment",
      summary:
        "Deep audits that ensure robust and scalable systems. We identify performance bottlenecks, security risks, and optimization opportunities — and deliver an actionable roadmap.",
      included: [
        "Codebase review: bottlenecks and code quality.",
        "Engineering team assessment: workflow and productivity.",
        "Recommendations for best practices and modern tooling.",
      ],
      idealFor: ["Companies preparing to scale rapidly.", "Teams optimizing legacy systems."],
      icon: "audit",
    },
    {
      title: "Contract to Hire",
      summary:
        "Build your dream team with confidence: work with our vetted engineers before bringing them on full-time. Flexibility now, long-term team growth.",
      included: [
        "A trial period to evaluate technical skill, cultural fit, and potential.",
        "Support throughout the entire transition.",
        "Flexible timelines aligned with your hiring needs and project.",
      ],
      idealFor: [
        "Companies looking to minimize hiring risk.",
        "Growing internal teams that need immediate reinforcement.",
      ],
      icon: "hire",
    },
  ] satisfies ServiceItem[],
};

const lab = {
  eyebrow: "Lab · Manifesto",
  title: (
    <>
      Building MVPs has become trivial. <em>Having real software is still hard.</em>
    </>
  ),
  manifesto: [
    <>
      Today, no-code tools, AI, templates, and prototypes dramatically speed up the creation of a
      first version. In just a few days, an idea can have screens, flows, and even a convincing demo.
    </>,
    <strong key="s1">But there&apos;s a huge gap between proving an idea and running a real product.</strong>,
    <>
      Quick prototypes and MVPs are almost never built with reliable integrations, proper security,
      governance, observability, or the robustness to scale. They help validate, but they rarely
      sustain an operation with real customers, critical processes, sensitive data, and live integrations.
    </>,
    <>
      That&apos;s the gap where many products stall: the idea has been validated, interest exists, but the
      foundation can&apos;t support the next step.{" "}
      <strong>The Lab steps in to make that upgrade.</strong>
    </>,
  ],
  ways: [
    {
      num: "01 · idea",
      title: "From idea to MVP",
      description:
        "For those with a clear opportunity, a market pain, or a product thesis, but still need to structure scope, experience, technology, and first version. We deliver clarity, a prototype, a roadmap, and an initial foundation to validate with real users.",
    },
    {
      num: "02 · mvp",
      title: "From MVP to real software",
      description:
        "For those who already have a first version, but feel the product needs more quality, stability, security, integrations, or room to evolve. We restructure the foundation to turn validation into operation.",
    },
    {
      num: "03 · product",
      title: "From product to scale",
      description:
        "For companies that already have a digital product in use, but need to improve architecture, experience, performance, integrations, or speed of evolution. We help the product grow without becoming a patchwork of tech debt.",
    },
  ],
};

const process = {
  title: "How an idea becomes a product.",
  description:
    "A straightforward process to reduce uncertainty, build what matters, and evolve based on real learning.",
  cta: { label: "Start with a conversation", href: "#contato" },
  steps: [
    { num: "01", title: "Conversation", time: "first call", description: "We understand the context, the opportunity, the current stage of the idea or product, and what needs to happen for the project to move forward." },
    { num: "02", title: "Diagnosis", time: "≤ 48h", description: "We map out the problem, audience, risks, constraints, integrations, and priorities. This is where we separate what's essential from what's anxiety disguised as a requirement." },
    { num: "03", title: "Discovery", time: "1–2 weeks", description: "We design the solution: journeys, flows, scope, initial architecture, and a build plan. The goal is to move from abstraction to a clear direction." },
    { num: "04", title: "Build", time: "varies", description: "We build the MVP, rebuild, or product evolution with a focus on technical quality, usability, integration, and delivery speed." },
    { num: "05", title: "Handoff", time: "included", description: "We deliver the product, documentation, learnings, and next steps so operations can continue with clarity." },
  ] satisfies Step[],
};

const offers = {
  title: "Choose the right path for your product's stage.",
  description:
    "Not every project starts in the same place. We tailor the path to the maturity level of your idea, MVP, or operation.",
  items: [
    { num: "01 · discovery", title: "Discovery", description: "To turn a promising idea into a product plan. We organize the problem, audience, value proposition, features, risks, and priorities to define what should be built first.", ideal: "Ideal for moving from \"I have an idea\" to a clear product vision." },
    { num: "02 · build", title: "MVP Build", description: "To build the first version on a solid foundation. We develop the MVP with a lean scope, clear experience, and enough technical structure to test with real users.", ideal: "Ideal for validating a market without building an ocean liner to cross a swimming pool." },
    { num: "03 · rebuild", title: "MVP Rebuild", description: "To turn a fragile MVP into reliable software. We review the experience, architecture, code, integrations, and critical flows to fix the limitations of the first version.", ideal: "Ideal for products that validated an opportunity but need stability to grow." },
    { num: "04 · evolution", title: "Product Evolution", description: "To improve a product that's already in operation. We evolve features, performance, integrations, usability, and architecture to keep up with new business demands.", ideal: "Ideal for growing without accumulating tech debt with every release." },
    { num: "05 · partnership", title: "Strategic Partnership", description: "For projects with co-building potential. In selected cases, we structure partnership models to combine business vision, product, and technology in a shared journey.", ideal: "Ideal for opportunities with a strong thesis, clear market, and significant growth potential.", featured: true },
    { num: "06 · team", title: "Staff Augmentation & Contract to Hire", description: "For those who need senior hands now. Vetted engineers integrated into your team, with an option to hire full-time after a trial period.", ideal: "Ideal for teams that need to scale with minimal hiring risk." },
  ] satisfies Offer[],
};

const testimonials = {
  eyebrow: "What our clients say",
  featured: {
    quote: "The team's contributions were decisive to the success of our projects. They are exceptional engineers, and we look forward to continuing and expanding the partnership.",
    name: "Gabriel Fernando Santos",
    role: "Head of Platform",
  },
  items: [
    { brand: "axiadigitalsolutions.com.br", quote: "The partnership was a game changer for our engineering team. The developers integrated seamlessly and made meaningful contributions from day one.", name: "Mateus Santos", role: "Director of Engineering" },
    { brand: "hobbo.ai", quote: "The differentiator is the ability to scale teams with tailored talent, understanding our business and adapting quickly to roadmap changes.", name: "Jane Silva", role: "CDO" },
    { brand: "devforge.com", quote: "We strongly recommend the entire team — from sales to engineering — for companies seeking a solid, reliable, and highly qualified partner.", name: "Sara Miller", role: "CTO" },
    { brand: "scaleup.com.br", quote: "We went from a fragile MVP to a product operating with real customers in weeks, without losing what had already been validated.", name: "Ann", role: "Director" },
  ] satisfies Testimonial[],
  disclaimer: "* Illustrative testimonials — to be replaced with authorized real quotes.",
};

const expertise = {
  eyebrow: "Our expertise",
  items: [
    { label: "Ruby" }, { label: "TypeScript" }, { label: "React" }, { label: "JavaScript" },
    { label: "Node.js", chip: "Collaborator" }, { label: "Ruby on Rails" }, { label: "Heroku" },
    { label: "AWS", chip: "Certified" }, { label: "Next.js" }, { label: "Vue.js" }, { label: "React Native" },
    { label: "Angular" }, { label: "Python" }, { label: "Go" }, { label: "Android" }, { label: "Swift" },
    { label: "C# / .NET" }, { label: "PostgreSQL" }, { label: "Kubernetes" }, { label: "AI Coding", dim: true },
  ],
};

const about = {
  eyebrow: "About",
  title: (
    <>
      A lab connected to those who build <em>real software.</em>
    </>
  ),
  paragraphs: [
    <>
      We were born to unite the speed of experimentation with technical maturity. That means
      getting ideas off the ground quickly, without compromising on architecture, security,
      quality, and the ability to evolve.
    </>,
    <>
      We work where many projects tend to stall: between the promising idea, the polished
      prototype, and the product that needs to work every single day.
    </>,
    <>
      <strong>Our role is to refine that potential.</strong> To transform hypotheses, MVPs, and
      first versions into digital products that are clearer, more robust, and ready to operate in
      the real world.
    </>,
  ],
};

const projects = {
  title: "Ideas that became real products.",
  description: "A sample of what we've built on the workbench: from MVP to product in operation.",
  cta: { label: "See more projects", href: "#contato" },
  items: [
    { tag: "developer tools", title: "Comprehension Gates", description: "A platform integrated with GitHub that creates comprehension checkpoints in AI-generated pull requests, so developers understand every line before deploying.", status: "Live" },
    { tag: "hr tech", title: "ATS for Engineering", description: "A lightweight recruitment platform for engineering teams of 10 to 500 people, organizing the hiring pipeline without depending on spreadsheets.", status: "Live" },
    { tag: "gamification", title: "Goals as a Game", description: "Turn any recurring goal into a game. A white-label platform where companies, clubs, and communities reward real progress with badges.", status: "Live" },
    { tag: "ai video", title: "Auto Promo", description: "Enter your product's URL and receive a promotional video ready to launch. The AI navigates the site on its own, narrates scene by scene, and adds a soundtrack.", status: "Live" },
  ] satisfies Project[],
};

const contactSection = {
  eyebrow: "Let's talk",
  title: "Ready to build real software?",
  lead: "Tell us about the stage of your idea, product, or team. We'll assess the context and get back to you with the best path forward — whether it's an allocated engineer, an audit, or an MVP on the workbench.",
  altPrefix: "Prefer email? Write directly to",
  fields: {
    name: "What's your name?*",
    email: "What's your email?*",
    company: "What's your company?*",
    source: "How did you hear about us?",
    stage: "Project stage*",
    need: "Type of need*",
    budget: "What's your budget?*",
    message: "What would you like to talk about?*",
    placeholder: "Select...",
  },
  stages: ["Idea", "Prototype", "MVP", "Product in operation", "I need engineers on my team"],
  needs: [
    "Vetted engineers (staff augmentation)", "Contract to Hire", "Product build",
    "Technical audit / team assessment", "Discovery", "MVP Build", "MVP Rebuild",
    "Product Evolution", "Strategic Partnership",
  ],
  budgets: ["Up to $10k", "$10k – $50k", "$50k – $150k", "$150k – $250k", "Over $250k", "To be defined"],
  submit: "Take my product to the workbench",
  status: {
    sending: "Sending...",
    success: "Message sent! We've received your contact and will get back to you shortly.",
    error: "Unable to send right now. Please try again or write directly to the email beside.",
    rateLimited: "Too many attempts in a short time. Please wait a few minutes and try again.",
  },
  fine: "After you reach out, someone from our team will get back to you to schedule a call. We'll assess the context and respond with the most suitable path for your stage.",
};

// ---------------------------------------------------------------------------
// /services page (EN: /en/services)
// ---------------------------------------------------------------------------
const servicesPage = {
  meta: {
    title: "Software development and consulting services",
    description:
      "Vetted engineers, product build, technical audits, contract to hire, and the AI-first Lab — end-to-end engineering solutions.",
  },
  hero: {
    title: "Building scalable solutions for your business",
    subtitle:
      "End-to-end engineering solutions — from technical audits to full product development.",
    cta: { label: "Talk to us", href: "#contato" },
  },
  labels: { included: "What's included:", ideal: "Ideal for:" },
  items: [
    {
      slug: "vetted-engineers",
      title: "We provide vetted engineers",
      tagline: "Hire experienced developers to scale your team and accelerate your projects.",
      description:
        "Scale your team with pre-screened, highly qualified engineers who integrate seamlessly into your workflow. Need on-demand expertise or long-term contributors? We connect you with engineers with proven technical and interpersonal skills.",
      included: [
        "Access to a pool of senior engineers in TypeScript, React, Angular, Node.js, .NET, AWS, and more.",
        "Onboarding support for a smooth integration with your team.",
        "Flexible allocation tailored to project duration and goals.",
      ],
      idealFor: [
        "Companies with an immediate talent shortage.",
        "Teams scaling for product launches.",
        "Companies struggling to find experienced engineers.",
      ],
      icon: "engineers",
    },
    {
      slug: "product-build",
      title: "We build your product",
      tagline: "From ideation to deploy, we ensure your product is scalable, reliable, and future-proof.",
      description:
        "Bring your vision to life with full-stack product development. Our team collaborates with you from ideation to delivery, ensuring the software is easy to use, scalable, and reliable.",
      included: [
        "Full-cycle development: UX/UI design, backend, frontend, and QA testing.",
        "Experience in sectors like fintech, digital banking, e-commerce, and health tech.",
        "Modern stack for high performance and long-term maintainability.",
      ],
      idealFor: [
        "Startups that need to bring their MVP to market quickly.",
        "Companies undergoing digital transformation or modernizing internal tools.",
      ],
      icon: "product",
    },
    {
      slug: "technical-audits",
      title: "Technical Audits & Team Assessment",
      tagline: "Optimize your systems and ensure engineering excellence with deep audits and reviews.",
      description:
        "Identify gaps and opportunities in your systems and processes with comprehensive technical audits. We deliver actionable insights to improve efficiency, scalability, and performance.",
      included: [
        "Codebase review to identify performance bottlenecks and quality issues.",
        "Engineering team assessment to improve workflows and productivity.",
        "Recommendations for best practices and modern tooling.",
      ],
      idealFor: [
        "Companies preparing to scale rapidly.",
        "Teams looking to optimize legacy systems.",
      ],
      icon: "audit",
    },
    {
      slug: "contract-to-hire",
      title: "Contract to Hire",
      tagline: "Build your dream team with confidence through flexible hiring.",
      description:
        "Take the guesswork out of hiring. With Contract to Hire, you work with our vetted engineers before bringing them on full-time. The ideal solution for those seeking flexibility and long-term team growth.",
      included: [
        "A trial period to evaluate technical skill, cultural fit, and long-term potential.",
        "Support throughout the entire transition process.",
        "Flexible timelines aligned with your hiring needs and project.",
      ],
      idealFor: [
        "Companies looking to minimize risk when hiring new talent.",
        "Growing businesses that need immediate team reinforcement.",
      ],
      icon: "hire",
    },
    {
      slug: "lab",
      title: "Lab: from idea to real software",
      tagline: "We turn ideas, prototypes, and MVPs into products ready to operate, integrate, measure, and scale.",
      description:
        "Our AI-first lab steps in at the gap where many products stall: between the prototype that validates and the product that needs to work every day. Discovery, MVP Build, Rebuild, Product Evolution, and Strategic Partnership.",
      included: [
        "Diagnosis in up to 48h and Discovery in 1–2 weeks.",
        "Build focused on technical quality, usability, and real integrations.",
        "Handoff with documentation, learnings, and next steps.",
      ],
      idealFor: [
        "Those with an idea who need a clear product vision.",
        "Validated MVPs that need stability to grow.",
      ],
      icon: "lab",
    },
  ] satisfies ServiceDetailType[],
  industries: {
    title: "Expertise across industries",
    items: [
      "Artificial Intelligence", "Fintech", "Digital Banking", "Health Tech", "Education", "E-commerce",
      "HR Tech", "SaaS", "Retail", "Financial Services", "Cloud", "Digital Marketing",
      "Media & Entertainment", "Real Estate", "Distribution & Logistics", "Nonprofit",
    ],
  },
  contact: {
    title: "Let's talk about how we can help you and your team",
    lead: "After you reach out, someone from our team will get back to you to schedule a call.",
  },
};

// ---------------------------------------------------------------------------
// /about page (EN: /en/about)
// ---------------------------------------------------------------------------
const aboutPage = {
  meta: {
    title: "About Trotta — software engineering partner",
    description:
      "Technical excellence and close collaboration to deliver exceptional engineering solutions. Meet our mission, values, journey, and team.",
  },
  hero: {
    title: "Empowering teams, scaling innovation",
    subtitle:
      "We combine technical excellence and close collaboration to deliver exceptional engineering solutions.",
  },
  mission: {
    title: "Our mission & values",
    text: "Help companies scale with top-tier engineering talent and foster a culture of innovation and continuous learning.",
    values: [
      { title: "Excellence", text: "Pursuing the highest standard in every project." },
      { title: "Collaboration", text: "Close partnership with clients to achieve shared goals." },
      { title: "Innovation", text: "Adopting cutting-edge technologies to solve complex challenges." },
      { title: "Integrity", text: "Transparency and honesty in every interaction." },
    ],
  },
  journey: {
    title: "Our journey",
    start: "2019",
    end: "Today",
    milestones: [
      { text: "Founded Trotta as a software boutique, focused on web products and custom systems." },
      { text: "Opened the first office in Florianópolis and expanded the engineering team." },
      { text: "New office in Campinas to serve clients in the São Paulo–interior corridor." },
      { text: "International expansion with operations in the United States." },
      { text: "Launched the AI-first Lab: proprietary products with applied artificial intelligence." },
      { text: "Established as a reference in AI projects, delivering across multiple sectors." },
    ] as Milestone[],
    cta: { label: "Be part of our story", href: "/en#contato" },
  },
  team: {
    title: "Our team",
    description: "Engineers who love solving real problems.",
    members: [
      { name: "Pedro Trotta", role: "Founder & Software Engineer", quote: "Real software, no patchwork.", avatar: "/images/team/pedro.jpg" },
      { name: "Lucas Konkiewitz", role: "Software Engineer", quote: "Each piece only comes when it's needed.", avatar: "/images/team/lucasmauricio.png" },
      { name: "Gildácio Lopes", role: "Software Engineer", quote: "8 hours is a half day.", avatar: "/images/team/gildacio.png" },
      { name: "Raphael Titan", role: "Game Developer", quote: "I'm a game dev by the day", avatar: "/images/team/titan.png" },
      { name: "Lucas Forte", role: "Marketing", quote: "Making the best companies' eyes shine!", avatar: "/images/team/lucasforte.png" },
      { name: "Vitoria Petek", role: "3D/VFX/UI Artist", quote: "Working...", avatar: "/images/team/vitoriapetek.png" },
      { name: "Douglas Dias", role: "Software Engineer", quote: "May our work reach millions.", avatar: "/images/team/douglasdias.png" },
      {
        name: "Bernardo Micol Righi", role: "Software Engineer", quote: "Revenge only brings pain and suffering. Even if you succeed, all that's left is emptiness.", avatar: "/images/team/righi.png" },
      { name: "Cleverton Jaber", role: "Software Engineer", quote: "Real software for real change.", avatar: "/images/team/cleverton.jpg" },
      { name: "Marco Galdino Dias", role: "Software Engineer", quote: "O simples bem feito vale mais bem mais que mil linhas de código...", avatar: "/images/team/mago.jpg" },
      { name: "Fernando Rollemberg", role: "Software Engineer", quote: "From Belford Roxo to the world, brick by brick.", avatar: "/images/team/fernando.jpg" },
      { name: "Carlos Daniel Beling de Paula", role: "Software Engineer", quote: "The best way to predict the future is inventing.", avatar: "/images/team/carlosdaniel.png" },
    ] satisfies TeamMember[],
    showMore: "See more",
    cta: { label: "Work with us", href: "/en#contato" },
  },
  impact: {
    title: "Social impact program",
    description:
      "Our ProBono program puts engineers on real challenges while developing free, quality software for nonprofit organizations. We unite innovation and purpose — code for a fairer future.",
    cta: { label: "Learn more", href: "/en#contato" },
    missionTitle: "Our mission",
    mission: [
      "Give social organizations cutting-edge digital tools to amplify their impact.",
      "Give our engineers opportunities to grow by contributing to projects that matter.",
      "Build a culture of collaboration, empathy, and lasting social value.",
    ],
    highlightsTitle: "Results",
    highlights: [] as { value: string; label: string }[],
  },
  community: {
    title: "Community is in our DNA",
    description: "Events we've had the honor of participating in.",
    events: [] as CommunityEvent[],
  },
};

// ---------------------------------------------------------------------------
// Legal pages — /en/privacy and /en/cookies
// ---------------------------------------------------------------------------
const legal = {
  lastUpdatedLabel: "Last updated",
  controller: {
    name: "Trotta [Razão Social Ltda.]",
    cnpj: "[53.198.666/0001-62]",
    address: "[Florianópolis - Santa Catarina, Brazil]",
    dpoEmail: "privacy@trotta.dev",
  },
  privacy: {
    meta: { title: "Privacy Policy", description: "How Trotta collects, uses, and protects personal data, in accordance with the LGPD (Law 13,709/2018)." },
    title: "Privacy Policy",
    updated: "September 27, 2026",
    intro:
      "This Policy describes how Trotta (\u201Cwe\u201D) processes personal data of website visitors and people who contact us, in accordance with the Brazilian General Data Protection Law \u2014 LGPD (Law 13,709/2018).",
    sections: [
      { title: "1. Who we are (data controller)", paragraphs: ["Trotta [Razão Social Ltda.], CNPJ [53.198.666/0001-62], based in Florianópolis, Santa Catarina, Brazil. Data Protection Officer (DPO): privacy@trotta.dev."] },
      { title: "2. What data we collect", bullets: [
        "Data you provide: name, email, company, how you found us, project stage, type of need, budget range, and message submitted through the contact form; email for the newsletter.",
        "Data collected automatically: IP address, browser and device type, pages visited, date and time of access, and cookie identifiers (see Cookie Policy).",
        "We do not intentionally collect sensitive data or data from children and adolescents.",
      ] },
      { title: "3. How we use your data (purposes and legal bases)", bullets: [
        "Respond to your inquiry and present proposals — performance of pre-contractual procedures (art. 7, V) and legitimate interest (art. 7, IX).",
        "Send the newsletter when you subscribe — consent (art. 7, I), revocable at any time via the unsubscribe link.",
        "Measure audience and improve the site, only with analytical cookies you have accepted — consent (art. 7, I).",
        "Ensure website security and prevent fraud — legitimate interest (art. 7, IX).",
        "Comply with legal and regulatory obligations (art. 7, II).",
      ] },
      { title: "4. Who we share data with", paragraphs: ["We do not sell personal data. We share only with service providers (hosting, email, forms, analytics), under contract and our instructions, and with authorities when required by law. Some providers may be located outside Brazil; in those cases, we adopt contractual clauses and safeguards provided by the LGPD for international data transfers."] },
      { title: "5. How long we keep data", bullets: [
        "Business contacts: up to 24 months after the last interaction, unless a contractual relationship follows.",
        "Newsletter: as long as your subscription is active.",
        "Access logs: 6 months, as required by the Brazilian Civil Rights Framework for the Internet (Law 12,965/2014, art. 15).",
        "Cookie consent record: 180 days, in your browser.",
      ] },
      { title: "6. Your rights", paragraphs: ["You may, at any time, request: confirmation of data processing; access to your data; correction of incomplete or outdated data; anonymization, blocking, or deletion; portability; information about sharing; withdrawal of consent; and objection to unlawful processing (art. 18 of the LGPD). To exercise your rights, write to privacy@trotta.dev. We respond within 15 days."] },
      { title: "7. Security", paragraphs: ["We adopt technical and administrative measures to protect data against unauthorized access, loss, alteration, or destruction, such as in-transit encryption (HTTPS), access control, and data minimization. No system is infallible; in the event of a significant incident, we will notify you and the ANPD as required by law."] },
      { title: "8. Cookies", paragraphs: ["Cookie usage is detailed in our Cookie Policy. Non-essential cookies are only activated with your consent, which can be changed at any time in \"Cookie preferences\" in the site footer."] },
      { title: "9. Changes", paragraphs: ["We may update this Policy to reflect legal or operational changes. The current version will always be available on this page, with the update date at the top."] },
      { title: "10. Contact", paragraphs: ["Questions or requests: privacy@trotta.dev."] },
    ],
  } satisfies LegalDoc,
  cookies: {
    meta: { title: "Cookie Policy", description: "Which cookies the Trotta website uses, why, and how to manage your consent." },
    title: "Cookie Policy",
    updated: "September 27, 2026",
    intro:
      "Cookies are small text files stored in your browser when you visit a website. This page explains which cookies we use, why, and how you can control them.",
    sections: [
      { title: "1. Strictly necessary cookies (always active)", bullets: [
        "trotta_consent — stores your cookie choice (accept/reject) for 180 days, so we don't ask again on every visit. Without it, the banner would reappear every time.",
        "Security and session cookies for the contact form, when applicable.",
      ] },
      { title: "2. Analytical cookies (only with your consent)", paragraphs: ["Used to understand how the site is used (most visited pages, traffic source, reading time) and improve it. They remain disabled until you click \"Accept\". Tool: [Vercel Analytics / Plausible / GA4 — to be filled]. Retention: [up to 14 months]."] },
      { title: "3. What we do NOT use", bullets: ["Advertising or cross-site tracking cookies.", "Sale or sharing of data with ad networks."] },
      { title: "4. How to manage", bullets: [
        "On our site: click \"Cookie preferences\" in the footer to change your choice at any time.",
        "In your browser: you can block or delete cookies in your settings (Chrome, Firefox, Safari, Edge). Blocking necessary cookies may affect site functionality.",
      ] },
      { title: "5. Legal basis", paragraphs: ["Necessary cookies: legitimate interest (LGPD, art. 7, IX). Analytical cookies: consent (art. 7, I), freely given, informed, and revocable."] },
      { title: "6. Contact", paragraphs: ["privacy@trotta.dev. Also see our Privacy Policy."] },
    ],
  } satisfies LegalDoc,
};

const cookieBanner = {
  title: "Cookies",
  text: "We use necessary cookies for the site to function and, with your permission, analytical cookies to understand how it's used. No advertising cookies.",
  accept: "Accept",
  reject: "Reject",
  more: { label: "Cookie Policy", href: "/en/cookies" },
  manage: "Cookie preferences",
};

// ---------------------------------------------------------------------------
// /en/thank-you page
// ---------------------------------------------------------------------------
const thanks = {
  meta: { title: "Message received", description: "We've received your contact. Someone from our team will get back to you shortly." },
  title: "Message received.",
  subtitle: "Thank you for reaching out. We'll assess the context and get back to you with the most suitable path for your stage.",
  nextTitle: "What happens now",
  steps: [
    { num: "01", title: "Read", text: "We read your message and assess the project stage." },
    { num: "02", title: "Reply", text: "We respond by email to schedule a call." },
    { num: "03", title: "Call", text: "First call to understand context, opportunity, and next steps." },
  ],
  primary: { label: "Back to home", href: "/en" },
  secondary: { label: "View services", href: "/en/services" },
};

const footer = {
  newsletter: {
    title: "Subscribe to our newsletter",
    description: "Get updates, insights, and event news straight to your inbox.",
    placeholder: "Email",
  },
  columns: [
    { title: "Company", links: [
      { label: "Contact", href: "/en#contato" }, { label: "Services", href: "/en/services" },
      { label: "About", href: "/en/about" },
      { label: "Blog", href: "#" },
    ] satisfies FooterLink[] },
    { title: "Follow", links: "social" as const },
    { title: "Legal", links: [
      { label: "Privacy Policy", href: "/en/privacy" }, { label: "Cookie Policy", href: "/en/cookies" },
    ] satisfies FooterLink[] },
  ],
  region: { label: "Site region", options: ["World", "Brasil"], active: "World" },
  copyright: `© ${new Date().getFullYear()} Trotta. All rights reserved.`,
};

export { brand, nav, hero, sectors, services, lab, process, offers, testimonials, expertise, about, projects, contactSection, servicesPage, aboutPage, legal, cookieBanner, thanks, footer };
