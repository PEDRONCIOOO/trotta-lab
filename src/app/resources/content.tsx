// Todo o conteúdo da landing (pt-BR). Edite aqui; os componentes só renderizam.
import type { ReactNode } from "react";

export type ServiceItem = {
  title: string;
  summary: ReactNode;
  included: string[];
  idealFor: string[];
  icon: "engineers" | "product" | "audit" | "hire";
};

export type Step = { num: string; title: string; time: string; description: string };
export type Offer = { num: string; title: string; description: string; ideal: string; featured?: boolean };
export type Testimonial = { brand: string; quote: string; name: string; role: string };
export type Project = { tag: string; title: string; description: string; status: string };
export type FooterLink = { label: string; href: string; chip?: string };
export type NavItem = FooterLink;

const brand = {
  name: "Trotta",
  tagline: "Sua boutique de desenvolvimento de software",
  description:
    "Engenheiros vetados, construção de produto, auditorias técnicas e um laboratório AI-first que transforma ideias e MVPs em software de verdade.",
};

const nav = {
  topbar: { text: "Você está vendo a versão", region: "Brasil", switchLabel: "Alterar para:", switchTo: "Mundo" },
  items: [
    { label: "Lab", href: "/#lab" },
    { label: "Serviços", href: "/servicos" },
    { label: "Processo", href: "/#processo" },
    { label: "Sobre", href: "/sobre" },
  ] as NavItem[],
  cta: { label: "Vamos conversar", href: "/#contato" },
};

const hero = {
  eyebrow: "Boutique de Desenvolvimento de Software · Laboratório AI-first",
  headline: "Escale seu time com engenheiros vetados. Transforme ideias em software de verdade.",
  cta: { label: "Vamos conversar", href: "#contato" },
  stats: [
    { value: "80+", label: "Engenheiros vetados" },
    { value: "150+", label: "Empresas atendidas" },
    { value: "14 anos", label: "Apoiando times de tecnologia" },
  ],
};

const sectors = {
  eyebrow: "Setores que atendemos",
  items: [
    "Inteligência Artificial", "Fintech", "Health Tech", "Educação", "E-commerce", "HR Tech", "SaaS",
    "Eletrônicos de consumo", "Aviação", "Varejo", "Serviços financeiros", "Cloud", "Marketing digital",
    "Mídia & Entretenimento", "eSports", "Real Estate", "Terceiro setor",
  ],
};

const services = {
  title: "Nossos serviços",
  description:
    "Soluções de engenharia de ponta a ponta — de auditorias técnicas ao desenvolvimento completo de produto. Trazemos mais do que expertise técnica: trazemos a obsessão por transformar suas ideias em realidade.",
  cta: { label: "Mais detalhes", href: "/servicos" },
  detailsLabel: "O que inclui e ideal para",
  includedLabel: "O que inclui",
  idealLabel: "Ideal para",
  featured: {
    title: "Fornecemos engenheiros vetados",
    summary:
      "Amplie seu time com engenheiros pré-selecionados e altamente qualificados, que se integram naturalmente ao seu fluxo de trabalho. Precisa de expertise pontual ou de contribuidores de longo prazo? Conectamos você a engenheiros com habilidades técnicas e interpessoais comprovadas.",
    included: [
      "Acesso a um pool de engenheiros sênior em Ruby, JavaScript, TypeScript, Go, AWS e mais.",
      "Suporte de onboarding para uma integração suave ao seu time.",
      "Alocação flexível, ajustada à duração e aos objetivos do projeto.",
    ],
    idealFor: [
      "Empresas com escassez imediata de talento.",
      "Times escalando para lançamentos de produto.",
      "Empresas com dificuldade de encontrar engenheiros experientes.",
    ],
    icon: "engineers",
  } satisfies ServiceItem,
  items: [
    {
      title: "Construímos seu produto",
      summary:
        "Da ideação ao deploy: desenvolvimento full-stack para que seu software seja escalável, confiável e preparado para o futuro. Design UX/UI, backend, frontend e QA em um único ciclo.",
      included: [
        "Desenvolvimento de ciclo completo: UX/UI, backend, frontend e testes.",
        "Experiência em e-commerce, health tech, fintech e mais.",
        "Stack moderna para performance e manutenibilidade de longo prazo.",
      ],
      idealFor: [
        "Startups levando o MVP ao mercado rapidamente.",
        "Empresas em transformação digital ou modernização de ferramentas.",
      ],
      icon: "product",
    },
    {
      title: "Auditorias Técnicas & Avaliação de Times",
      summary:
        "Auditorias profundas que garantem sistemas robustos e escaláveis. Identificamos gargalos de performance, riscos de segurança e oportunidades de otimização — e entregamos um roadmap acionável.",
      included: [
        "Revisão de codebase: gargalos e qualidade de código.",
        "Avaliação do time de engenharia: fluxo e produtividade.",
        "Recomendações de boas práticas e ferramentas modernas.",
      ],
      idealFor: ["Empresas se preparando para escalar rápido.", "Times otimizando sistemas legados."],
      icon: "audit",
    },
    {
      title: "Contract to Hire",
      summary:
        "Monte o time dos sonhos com segurança: trabalhe com nossos engenheiros vetados antes de efetivá-los no seu quadro. Flexibilidade agora, crescimento de time no longo prazo.",
      included: [
        "Período para avaliar habilidade técnica, fit cultural e potencial.",
        "Suporte durante toda a transição.",
        "Prazos flexíveis conforme sua contratação e projeto.",
      ],
      idealFor: [
        "Empresas que querem minimizar risco ao contratar.",
        "Times internos em crescimento que precisam de reforço imediato.",
      ],
      icon: "hire",
    },
  ] satisfies ServiceItem[],
};

const lab = {
  eyebrow: "Lab · Manifesto",
  title: (
    <>
      Ficou trivial construir MVPs. <em>Continua difícil ter software de verdade.</em>
    </>
  ),
  manifesto: [
    <>
      Hoje, ferramentas no-code, IA, templates e protótipos aceleram muito a criação de uma primeira
      versão. Em poucos dias, uma ideia pode ganhar telas, fluxos e até uma demonstração convincente.
    </>,
    <strong key="s1">Mas existe uma distância grande entre provar uma ideia e operar um produto real.</strong>,
    <>
      Protótipos e MVPs rápidos quase nunca nascem com integrações confiáveis, segurança adequada,
      governança, observabilidade ou robustez para escalar. Eles ajudam a validar, mas raramente
      sustentam uma operação com clientes, processos críticos, dados sensíveis e integrações reais.
    </>,
    <>
      É nesse intervalo que muitos produtos travam: a ideia foi validada, o interesse existe, mas a
      base ainda não aguenta o próximo passo. <strong>O Lab entra para fazer esse upgrade.</strong>
    </>,
  ],
  ways: [
    {
      num: "01 · ideia",
      title: "Da ideia ao MVP",
      description:
        "Para quem tem uma oportunidade clara, uma dor de mercado ou uma tese de produto, mas ainda precisa estruturar escopo, experiência, tecnologia e primeira versão. Entregamos clareza, protótipo, roadmap e uma base inicial para validar com usuários reais.",
    },
    {
      num: "02 · mvp",
      title: "Do MVP ao software real",
      description:
        "Para quem já tem uma primeira versão, mas sente que o produto precisa de mais qualidade, estabilidade, segurança, integrações ou capacidade de evolução. Reestruturamos a base para transformar validação em operação.",
    },
    {
      num: "03 · produto",
      title: "Do produto à escala",
      description:
        "Para empresas que já têm um produto digital em uso, mas precisam melhorar arquitetura, experiência, performance, integrações ou velocidade de evolução. Ajudamos o produto a crescer sem virar uma colcha de retalhos tecnológica.",
    },
  ],
};

const process = {
  title: "Como uma ideia vira um produto.",
  description:
    "Um processo direto para reduzir incerteza, construir o essencial e evoluir com base em aprendizado real.",
  cta: { label: "Começar pela conversa", href: "#contato" },
  steps: [
    { num: "01", title: "Conversa", time: "primeira call", description: "Entendemos o contexto, a oportunidade, o estágio atual da ideia ou produto e o que precisa acontecer para o projeto avançar." },
    { num: "02", title: "Diagnóstico", time: "≤ 48h", description: "Mapeamos problema, público, riscos, restrições, integrações e prioridades. Aqui separamos o que é essencial do que é ansiedade fantasiada de requisito." },
    { num: "03", title: "Discovery", time: "1–2 semanas", description: "Desenhamos a solução: jornadas, fluxos, escopo, arquitetura inicial e plano de construção. O objetivo é sair da abstração e chegar em uma direção clara." },
    { num: "04", title: "Build", time: "variável", description: "Construímos o MVP, rebuild ou evolução do produto com foco em qualidade técnica, usabilidade, integração e velocidade de entrega." },
    { num: "05", title: "Handoff", time: "incluso", description: "Entregamos o produto, documentação, aprendizados e próximos passos para que a operação continue com clareza." },
  ] satisfies Step[],
};

const offers = {
  title: "Escolha a rota certa para o estágio do seu produto.",
  description:
    "Nem todo projeto começa no mesmo lugar. Adaptamos o caminho conforme o nível de maturidade da ideia, do MVP ou da operação.",
  items: [
    { num: "01 · discovery", title: "Discovery", description: "Para transformar uma ideia promissora em plano de produto. Organizamos problema, público, proposta de valor, funcionalidades, riscos e prioridades para definir o que deve ser construído primeiro.", ideal: "Ideal para sair do “tenho uma ideia” para uma visão clara de produto." },
    { num: "02 · build", title: "MVP Build", description: "Para construir a primeira versão com base sólida. Desenvolvemos o MVP com escopo enxuto, experiência clara e estrutura técnica suficiente para testar com usuários reais.", ideal: "Ideal para validar mercado sem construir um transatlântico para atravessar uma piscina." },
    { num: "03 · rebuild", title: "Rebuild de MVP", description: "Para transformar um MVP frágil em software confiável. Revisamos experiência, arquitetura, código, integrações e fluxos críticos para corrigir as limitações da primeira versão.", ideal: "Ideal para produtos que validaram uma oportunidade, mas precisam de estabilidade para crescer." },
    { num: "04 · evolução", title: "Evolução de Produto", description: "Para melhorar um produto que já está em operação. Evoluímos funcionalidades, performance, integrações, usabilidade e arquitetura para acompanhar novas demandas do negócio.", ideal: "Ideal para crescer sem acumular dívida técnica a cada entrega." },
    { num: "05 · parceria", title: "Parceria Estratégica", description: "Para projetos com potencial de construção conjunta. Em casos selecionados, estruturamos modelos de parceria para combinar visão de negócio, produto e tecnologia em uma jornada compartilhada.", ideal: "Ideal para oportunidades com tese forte, mercado claro e potencial de crescimento relevante.", featured: true },
    { num: "06 · time", title: "Staff Augmentation & Contract to Hire", description: "Para quem precisa de mãos sênior agora. Engenheiros vetados integrados ao seu time, com opção de efetivação após um período de avaliação.", ideal: "Ideal para times que precisam escalar com risco mínimo de contratação." },
  ] satisfies Offer[],
};

const testimonials = {
  eyebrow: "O que nossos clientes dizem",
  featured: {
    quote: "As contribuições do time foram decisivas para o sucesso dos nossos projetos. São engenheiros excepcionais, e queremos continuar a parceria e ampliar a colaboração.",
    name: "Gabriel Fernando Santos",
    role: "Head of Platform",
  },
  items: [
    { brand: "axiadigitalsolutions.com.br", quote: "A parceria mudou o jogo para o nosso time de engenharia. Os desenvolvedores se integraram sem atrito e contribuíram de forma relevante desde o primeiro dia.", name: "Mateus Santos", role: "Diretor de Engenharia" },
    { brand: "hobbo.ai", quote: "O diferencial é a capacidade de escalar times com talento sob medida, entendendo o nosso negócio e se adaptando rápido às mudanças de roadmap.", name: "Jane Silva", role: "CDO" },
    { brand: "devforge.com", quote: "Recomendamos fortemente o time inteiro — do comercial ao técnico — para empresas que buscam um parceiro sólido, confiável e altamente qualificado.", name: "Sara Miller", role: "CTO" },
    { brand: "scaleup.com.br", quote: "Saímos de um MVP frágil para um produto operando com clientes reais em semanas, sem perder o que já tinha sido validado.", name: "Ann", role: "Diretor" },
  ] satisfies Testimonial[],
  disclaimer: "* Depoimentos ilustrativos — substituir por citações reais autorizadas.",
};

const expertise = {
  eyebrow: "Nossa expertise",
  items: [
    { label: "Ruby" }, { label: "TypeScript" }, { label: "React" }, { label: "JavaScript" },
    { label: "Node.js", chip: "Collaborator" }, { label: "Ruby on Rails" }, { label: "Heroku" },
    { label: "AWS", chip: "Certified" }, { label: "Next.js" }, { label: "Vue.js" }, { label: "React Native" },
    { label: "Angular" }, { label: "Python" }, { label: "Go" }, { label: "Android" }, { label: "Swift" },
    { label: "C# / .NET" }, { label: "PostgreSQL" }, { label: "Kubernetes" }, { label: "AI Coding", dim: true },
  ],
};

const about = {
  eyebrow: "Sobre",
  title: (
    <>
      Um laboratório conectado a quem constrói <em>software de verdade.</em>
    </>
  ),
  paragraphs: [
    <>
      Nascemos para unir velocidade de experimentação com maturidade técnica. Isso significa tirar
      ideias do papel com agilidade, mas sem abrir mão de arquitetura, segurança, qualidade e capacidade
      de evolução.
    </>,
    <>
      A gente trabalha onde muitos projetos costumam travar: entre a ideia promissora, o protótipo
      bonito e o produto que precisa funcionar todos os dias.
    </>,
    <>
      <strong>Nosso papel é lapidar esse potencial.</strong> Transformar hipóteses, MVPs e primeiras
      versões em produtos digitais mais claros, robustos e preparados para operar no mundo real.
    </>,
  ],
};

const projects = {
  title: "Ideias que viraram produtos reais.",
  description: "Uma amostra do que construímos na bancada: do MVP ao produto em operação.",
  cta: { label: "Ver mais projetos", href: "#contato" },
  items: [
    { tag: "developer tools", title: "Comprehension Gates", description: "Plataforma integrada ao GitHub que cria checkpoints de compreensão em pull requests gerados por IA, para que os desenvolvedores entendam cada linha antes do deploy.", status: "Live" },
    { tag: "hr tech", title: "ATS para engenharia", description: "Plataforma de recrutamento leve para times de engenharia de 10 a 500 pessoas, que organiza o pipeline de contratação sem depender de planilhas.", status: "Live" },
    { tag: "gamification", title: "Metas em jogo", description: "Transforme qualquer meta recorrente em um jogo. Plataforma whitelabel onde empresas, clubes e comunidades recompensam o progresso real com badges.", status: "Live" },
    { tag: "ai video", title: "Promo automático", description: "Informe a URL do seu produto e receba um vídeo promocional pronto para lançar. A IA navega pelo site sozinha, narra cena a cena e adiciona trilha sonora.", status: "Live" },
  ] satisfies Project[],
};

const contactSection = {
  eyebrow: "Vamos conversar",
  title: "Pronto para construir software de verdade?",
  lead: "Conte em que estágio está sua ideia, produto ou time. Avaliamos o contexto e retornamos com a melhor rota — seja um engenheiro alocado, uma auditoria ou um MVP na bancada.",
  altPrefix: "Prefere e-mail? Escreva direto para",
  fields: {
    name: "Qual é o seu nome?*",
    email: "Qual é o seu e-mail?*",
    company: "Qual é a sua empresa?*",
    source: "Como nos conheceu?",
    stage: "Estágio do projeto*",
    need: "Tipo de necessidade*",
    budget: "Qual é o seu orçamento?*",
    message: "Sobre o que você quer conversar?*",
    placeholder: "Selecionar...",
  },
  stages: ["Ideia", "Protótipo", "MVP", "Produto em operação", "Preciso de engenheiros no time"],
  needs: [
    "Engenheiros vetados (staff augmentation)", "Contract to Hire", "Construção de produto",
    "Auditoria técnica / avaliação de time", "Discovery", "MVP Build", "Rebuild de MVP",
    "Evolução de Produto", "Parceria Estratégica",
  ],
  budgets: ["Até R$ 50 mil", "R$ 150 mil a R$ 500 mil", "R$ 750 mil a R$ 1,25 mi", "Acima de R$ 1,25 mi", "A definir"],
  submit: "Levar meu produto para a bancada",
  status: {
    sending: "Enviando...",
    success: "Mensagem enviada! Recebemos seu contato e retornamos em breve.",
    error: "Não foi possível enviar agora. Tente de novo ou escreva direto para o e-mail ao lado.",
    rateLimited: "Muitas tentativas em pouco tempo. Aguarde alguns minutos e tente novamente.",
  },
  fine: "Depois do contato, alguém do time retorna para agendar uma conversa. Vamos analisar o contexto e responder com o caminho mais adequado para o seu estágio.",
};

// ---------------------------------------------------------------------------
// Página /servicos — versão expandida dos serviços (modelo: codeminer42.com/services)
// ---------------------------------------------------------------------------
export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  included: string[];
  idealFor: string[];
  icon: "engineers" | "product" | "audit" | "hire" | "lab";
};

const servicesPage = {
  meta: {
    title: "Serviços de desenvolvimento e consultoria de software",
    description:
      "Engenheiros vetados, construção de produto, auditorias técnicas, contract to hire e o Lab AI-first — soluções de engenharia de ponta a ponta.",
  },
  hero: {
    title: "Construindo soluções escaláveis para o seu negócio",
    subtitle:
      "Soluções de engenharia de ponta a ponta — de auditorias técnicas ao desenvolvimento completo de produto.",
    cta: { label: "Fale com a gente", href: "#contato" },
  },
  labels: { included: "O que inclui:", ideal: "Ideal para:" },
  items: [
    {
      slug: "engenheiros-vetados",
      title: "Fornecemos engenheiros vetados",
      tagline: "Contrate desenvolvedores experientes para escalar seu time e acelerar seus projetos.",
      description:
        "Amplie seu time com engenheiros pré-selecionados e altamente qualificados, que se integram naturalmente ao seu fluxo de trabalho. Precisa de expertise pontual ou de contribuidores de longo prazo? Conectamos você ao nosso time de engenheiros com habilidades técnicas e interpessoais comprovadas.",
      included: [
        "Acesso a um pool de engenheiros sênior em TypeScript, React, Angular, Node.js, .NET, AWS e mais.",
        "Suporte de onboarding para uma integração suave ao seu time.",
        "Alocação flexível, ajustada à duração e aos objetivos do projeto.",
      ],
      idealFor: [
        "Empresas com escassez imediata de talento.",
        "Times escalando para lançamentos de produto.",
        "Empresas com dificuldade de encontrar engenheiros experientes.",
      ],
      icon: "engineers",
    },
    {
      slug: "construcao-de-produto",
      title: "Construímos seu produto",
      tagline: "Da ideação ao deploy, garantimos que seu produto seja escalável, confiável e preparado para o futuro.",
      description:
        "Tire sua visão do papel com desenvolvimento full-stack de produto. Nosso time colabora com você da ideação à entrega, garantindo que o software seja fácil de usar, escalável e confiável.",
      included: [
        "Desenvolvimento de ciclo completo: design UX/UI, backend, frontend e testes de QA.",
        "Experiência em setores como fintech, banking digital, e-commerce e health tech.",
        "Stack moderna para alta performance e manutenibilidade de longo prazo.",
      ],
      idealFor: [
        "Startups que precisam levar o MVP ao mercado rapidamente.",
        "Empresas em transformação digital ou modernizando ferramentas internas.",
      ],
      icon: "product",
    },
    {
      slug: "auditorias-tecnicas",
      title: "Auditorias Técnicas & Avaliação de Times",
      tagline: "Otimize seus sistemas e garanta excelência de engenharia com auditorias e revisões profundas.",
      description:
        "Identifique lacunas e oportunidades nos seus sistemas e processos com auditorias técnicas completas. Entregamos insights acionáveis para melhorar eficiência, escalabilidade e performance.",
      included: [
        "Revisão de codebase para identificar gargalos de performance e problemas de qualidade.",
        "Avaliação do time de engenharia para melhorar fluxos e produtividade.",
        "Recomendações de boas práticas e ferramentas modernas.",
      ],
      idealFor: [
        "Empresas se preparando para escalar rapidamente.",
        "Times que precisam otimizar sistemas legados.",
      ],
      icon: "audit",
    },
    {
      slug: "contract-to-hire",
      title: "Contract to Hire",
      tagline: "Monte o time dos sonhos com segurança por meio de contratação flexível.",
      description:
        "Tire a adivinhação da contratação. Com o Contract to Hire você trabalha com nossos engenheiros vetados antes de efetivá-los no seu time interno. A solução ideal para quem busca flexibilidade e crescimento de time no longo prazo.",
      included: [
        "Período para avaliar habilidade técnica, fit cultural e potencial de longo prazo.",
        "Suporte durante todo o processo de transição.",
        "Prazos flexíveis conforme suas necessidades de contratação e projeto.",
      ],
      idealFor: [
        "Empresas que querem minimizar o risco ao contratar novos talentos.",
        "Negócios crescendo o time interno que precisam de reforço imediato.",
      ],
      icon: "hire",
    },
    {
      slug: "lab",
      title: "Lab: da ideia ao software de verdade",
      tagline: "Transformamos ideias, protótipos e MVPs em produtos prontos para operar, integrar, medir e escalar.",
      description:
        "Nosso laboratório AI-first entra no intervalo onde muitos produtos travam: entre o protótipo que valida e o produto que precisa funcionar todos os dias. Discovery, MVP Build, Rebuild, Evolução de Produto e Parceria Estratégica.",
      included: [
        "Diagnóstico em até 48h e Discovery de 1–2 semanas.",
        "Build com foco em qualidade técnica, usabilidade e integrações reais.",
        "Handoff com documentação, aprendizados e próximos passos.",
      ],
      idealFor: [
        "Quem tem uma ideia e precisa de uma visão clara de produto.",
        "MVPs validados que precisam de estabilidade para crescer.",
      ],
      icon: "lab",
    },
  ] satisfies ServiceDetail[],
  industries: {
    title: "Expertise em diversos setores",
    items: [
      "Inteligência Artificial", "Fintech", "Banking digital", "Health Tech", "Educação", "E-commerce",
      "HR Tech", "SaaS", "Varejo", "Serviços financeiros", "Cloud", "Marketing digital",
      "Mídia & Entretenimento", "Real Estate", "Distribuição & Logística", "Terceiro setor",
    ],
  },
  contact: {
    title: "Vamos conversar sobre como podemos ajudar você e seu time",
    lead: "Depois do contato, alguém do time retorna para agendar uma conversa.",
  },
};

// ---------------------------------------------------------------------------
// Página /sobre
// Arrays vazios (team, events, impact.highlights) ocultam a seção correspondente.
// ---------------------------------------------------------------------------
export type Milestone = { year?: string; text: string };
export type TeamMember = { name: string; role: string; quote?: string; avatar?: string };
export type CommunityEvent = { name: string; year: string; roles: ("SPEAKER" | "SPONSOR" | "SUPPORTER")[] };

const aboutPage = {
  meta: {
    title: "Sobre a Trotta — parceiro de engenharia de software",
    description:
      "Excelência técnica e colaboração próxima para entregar soluções de engenharia excepcionais. Conheça missão, valores, jornada e time.",
  },
  hero: {
    title: "Fortalecendo times, escalando inovação",
    subtitle:
      "Unimos excelência técnica e colaboração próxima para entregar soluções de engenharia excepcionais.",
  },
  mission: {
    title: "Nossa missão & valores",
    text: "Ajudar empresas a escalar com talento de engenharia de alto nível e cultivar uma cultura de inovação e aprendizado contínuo.",
    values: [
      { title: "Excelência", text: "Buscar o mais alto padrão em cada projeto." },
      { title: "Colaboração", text: "Parceria próxima com o cliente para alcançar objetivos compartilhados." },
      { title: "Inovação", text: "Adotar tecnologias de ponta para resolver desafios complexos." },
      { title: "Integridade", text: "Transparência e honestidade em todas as interações." },
    ],
  },
  journey: {
    title: "Nossa jornada",
    start: "2019",
    end: "Hoje",
    milestones: [
      { text: "Fundação da Trotta como boutique de software, com foco em produtos web e sistemas sob medida." },
      { text: "Abertura do primeiro escritório em Florianópolis e expansão do time de engenharia." },
      { text: "Novo escritório em Campinas para atender clientes do eixo São Paulo–interior." },
      { text: "Expansão internacional com operação nos Estados Unidos." },
      { text: "Lançamento do Lab AI-first: produtos próprios com inteligência artificial aplicada." },
      { text: "Consolidação como referência em projetos de AI, com entregas em múltiplos setores." },
    ] as Milestone[],
    cta: { label: "Faça parte da nossa história", href: "/#contato" },
  },
  team: {
    title: "Nosso time",
    description: "Engenheiros que gostam de resolver problemas de verdade.",
    members: [
      { name: "Pedro Trotta", role: "Fundador & Engenheiro de Software", quote: "Software de verdade, sem colcha de retalhos.", avatar: "/images/team/pedro.jpg" },
      { name: "Lucas Konkiewitz", role: "Engenheiro de Software", quote: "Cada peça só vem quando é necessário.", avatar: "/images/team/lucasmauricio.png" },
    ] satisfies TeamMember[],
    cta: { label: "Trabalhe conosco", href: "/#contato" },
  },
  impact: {
    title: "Programa de impacto social",
    description:
      "Nosso programa ProBono coloca engenheiros em desafios reais enquanto desenvolvem software gratuito e de qualidade para organizações sem fins lucrativos. Unimos inovação e propósito — código para um futuro mais justo.",
    cta: { label: "Saiba mais", href: "/#contato" },
    missionTitle: "Nossa missão",
    mission: [
      "Dar a organizações sociais ferramentas digitais de ponta para ampliar seu impacto.",
      "Dar aos nossos engenheiros oportunidades de crescer contribuindo com projetos que importam.",
      "Construir uma cultura de colaboração, empatia e valor social duradouro.",
    ],
    highlightsTitle: "Resultados",
    highlights: [] as { value: string; label: string }[], // ex.: { value: "2", label: "Instituições apoiadas" }
  },
  community: {
    title: "Comunidade está no nosso sangue",
    description: "Eventos dos quais tivemos a honra de participar.",
    events: [] as CommunityEvent[], // ex.: { name: "TDC", year: "2026", roles: ["SPEAKER"] }
  },
};

// ---------------------------------------------------------------------------
// Páginas legais — /privacidade e /cookies (LGPD). Revise os campos entre [ ].
// ---------------------------------------------------------------------------
export type LegalSection = { title: string; paragraphs?: string[]; bullets?: string[] };
export type LegalDoc = { meta: { title: string; description: string }; title: string; updated: string; intro: string; sections: LegalSection[] };

const legal = {
  controller: {
    name: "Trotta [Razão Social Ltda.]",
    cnpj: "[53.198.666/0001-62]",
    address: "[Florianópolis - Santa Catarina]",
    dpoEmail: "privacidade@trotta.dev",
  },
  privacy: {
    meta: { title: "Política de Privacidade", description: "Como a Trotta coleta, usa e protege dados pessoais, nos termos da LGPD (Lei 13.709/2018)." },
    title: "Política de Privacidade",
    updated: "27 de setembro de 2026",
    intro:
      "Esta Política descreve como a Trotta (“nós”) trata dados pessoais de visitantes do site e de pessoas que entram em contato conosco, em conformidade com a Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018).",
    sections: [
      { title: "1. Quem somos (controlador)", paragraphs: ["Trotta [Razão Social Ltda.], CNPJ [53.198.666/0001-62], com sede em [Florianópolis - Santa Catarina]. Encarregado de dados (DPO): privacidade@trotta.dev."] },
      { title: "2. Quais dados coletamos", bullets: [
        "Dados que você fornece: nome, e-mail, empresa, como nos conheceu, estágio do projeto, tipo de necessidade, faixa de orçamento e mensagem, enviados pelo formulário de contato; e-mail para a newsletter.",
        "Dados coletados automaticamente: endereço IP, tipo de navegador e dispositivo, páginas visitadas, data e hora de acesso e identificadores de cookies (veja a Política de Cookies).",
        "Não coletamos dados sensíveis nem dados de crianças e adolescentes de forma intencional.",
      ] },
      { title: "3. Para que usamos os dados (finalidades e bases legais)", bullets: [
        "Responder ao seu contato e apresentar propostas — execução de procedimentos preliminares a contrato (art. 7º, V) e legítimo interesse (art. 7º, IX).",
        "Enviar a newsletter, quando você se inscreve — consentimento (art. 7º, I), revogável a qualquer momento pelo link de descadastro.",
        "Medir audiência e melhorar o site, apenas com cookies analíticos aceitos por você — consentimento (art. 7º, I).",
        "Garantir a segurança do site e prevenir fraudes — legítimo interesse (art. 7º, IX).",
        "Cumprir obrigações legais e regulatórias (art. 7º, II).",
      ] },
      { title: "4. Com quem compartilhamos", paragraphs: ["Não vendemos dados pessoais. Compartilhamos apenas com operadores que nos prestam serviços (hospedagem, e-mail, formulários, analytics), sob contrato e instruções nossas, e com autoridades quando exigido por lei. Alguns operadores podem estar fora do Brasil; nesses casos, adotamos cláusulas contratuais e garantias previstas na LGPD para a transferência internacional."] },
      { title: "5. Por quanto tempo guardamos", bullets: [
        "Contatos comerciais: até 24 meses após a última interação, salvo relação contratual posterior.",
        "Newsletter: enquanto durar sua inscrição.",
        "Registros de acesso (logs): 6 meses, conforme o Marco Civil da Internet (Lei 12.965/2014, art. 15).",
        "Registro do consentimento de cookies: 180 dias, no seu navegador.",
      ] },
      { title: "6. Seus direitos", paragraphs: ["Você pode, a qualquer momento, solicitar: confirmação da existência de tratamento; acesso aos dados; correção de dados incompletos ou desatualizados; anonimização, bloqueio ou eliminação; portabilidade; informação sobre compartilhamento; revogação do consentimento; e oposição a tratamento irregular (art. 18 da LGPD). Para exercer, escreva para privacidade@trotta.dev. Respondemos em até 15 dias."] },
      { title: "7. Segurança", paragraphs: ["Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não autorizados, perda, alteração ou destruição, como criptografia em trânsito (HTTPS), controle de acesso e minimização de dados. Nenhum sistema é infalível; em caso de incidente relevante, comunicaremos você e a ANPD conforme a lei."] },
      { title: "8. Cookies", paragraphs: ["O uso de cookies está detalhado na nossa Política de Cookies. Cookies não essenciais só são ativados com o seu consentimento, que pode ser alterado a qualquer momento em “Preferências de cookies”, no rodapé do site."] },
      { title: "9. Alterações", paragraphs: ["Podemos atualizar esta Política para refletir mudanças legais ou operacionais. A versão vigente estará sempre nesta página, com a data de atualização no topo."] },
      { title: "10. Contato", paragraphs: ["Dúvidas ou solicitações: privacidade@trotta.dev."] },
    ],
  } satisfies LegalDoc,
  cookies: {
    meta: { title: "Política de Cookies", description: "Quais cookies o site da Trotta usa, para quê, e como gerenciar seu consentimento." },
    title: "Política de Cookies",
    updated: "27 de setembro de 2026",
    intro:
      "Cookies são pequenos arquivos de texto gravados no seu navegador quando você visita um site. Esta página explica quais cookies usamos, por quê, e como você controla isso.",
    sections: [
      { title: "1. Cookies estritamente necessários (sempre ativos)", bullets: [
        "trotta_consent — guarda sua escolha sobre cookies (aceitar/rejeitar) por 180 dias, para não perguntarmos de novo a cada visita. Sem ele o banner reapareceria sempre.",
        "Cookies de segurança e de sessão do formulário de contato, quando aplicável.",
      ] },
      { title: "2. Cookies analíticos (só com seu consentimento)", paragraphs: ["Usados para entender como o site é usado (páginas mais visitadas, origem do tráfego, tempo de leitura) e melhorá-lo. Ficam desativados até você clicar em “Aceitar”. Ferramenta: [Vercel Analytics / Plausible / GA4 — preencher]. Retenção: [até 14 meses]."] },
      { title: "3. O que NÃO usamos", bullets: ["Cookies de publicidade ou rastreamento entre sites.", "Venda ou compartilhamento de dados com redes de anúncios."] },
      { title: "4. Como gerenciar", bullets: [
        "No nosso site: clique em “Preferências de cookies” no rodapé para alterar sua escolha a qualquer momento.",
        "No navegador: você pode bloquear ou apagar cookies nas configurações (Chrome, Firefox, Safari, Edge). Bloquear os cookies necessários pode afetar o funcionamento do site.",
      ] },
      { title: "5. Base legal", paragraphs: ["Cookies necessários: legítimo interesse (LGPD, art. 7º, IX). Cookies analíticos: consentimento (art. 7º, I), livre, informado e revogável."] },
      { title: "6. Contato", paragraphs: ["privacidade@trotta.dev. Veja também a nossa Política de Privacidade."] },
    ],
  } satisfies LegalDoc,
};

const cookieBanner = {
  title: "Cookies",
  text: "Usamos cookies necessários para o site funcionar e, com a sua permissão, cookies analíticos para entender como ele é usado. Nenhum cookie de publicidade.",
  accept: "Aceitar",
  reject: "Rejeitar",
  more: { label: "Política de Cookies", href: "/cookies" },
  manage: "Preferências de cookies",
};

// ---------------------------------------------------------------------------
// Página /obrigado — confirmação após envio do formulário (conversão Google Ads)
// ---------------------------------------------------------------------------
const thanks = {
  meta: { title: "Mensagem recebida", description: "Recebemos seu contato. Em breve alguém do time retorna." },
  title: "Mensagem recebida.",
  subtitle: "Obrigado pelo contato. Vamos analisar o contexto e retornar com o caminho mais adequado para o seu estágio.",
  nextTitle: "O que acontece agora",
  steps: [
    { num: "01", title: "Leitura", text: "Lemos sua mensagem e o estágio do projeto." },
    { num: "02", title: "Retorno", text: "Respondemos por e-mail para agendar uma conversa." },
    { num: "03", title: "Conversa", text: "Primeira call para entender contexto, oportunidade e próximos passos." },
  ],
  primary: { label: "Voltar ao início", href: "/" },
  secondary: { label: "Ver serviços", href: "/servicos" },
};

const footer = {
  newsletter: {
    title: "Assine nossa newsletter",
    description: "Receba novidades, insights e notícias de eventos direto na sua caixa de entrada.",
    placeholder: "E-mail",
  },
  columns: [
    { title: "Empresa", links: [
      { label: "Contato", href: "/#contato" }, { label: "Serviços", href: "/servicos" },
      { label: "Sobre", href: "/sobre" },
      { label: "Blog", href: "#" },
    ] satisfies FooterLink[] },
    { title: "Siga", links: "social" as const },
    { title: "Legal", links: [
      { label: "Política de Privacidade", href: "/privacidade" }, { label: "Política de Cookies", href: "/cookies" },
    ] satisfies FooterLink[] },
  ],
  region: { label: "Região do site", options: ["Mundo", "Brasil"], active: "Brasil" },
  copyright: `© ${new Date().getFullYear()} Trotta. Todos os direitos reservados.`,
};

export { brand, nav, hero, sectors, services, lab, process, offers, testimonials, expertise, about, projects, contactSection, servicesPage, aboutPage, legal, cookieBanner, thanks, footer };
