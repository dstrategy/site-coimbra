export type Locale = "en" | "pt";

export interface Translations {
  // Navbar
  nav: {
    about: string;
    experience: string;
    speaking: string;
    services: string;
    contact: string;
    bookKeynote: string;
  };
  // Hero
  hero: {
    tagline: string;
    subtitle: string;
    bookKeynote: string;
    learnMore: string;
  };
  // About
  about: {
    label: string;
    titleLine1: string;
    titleHighlight: string;
    bio: string;
    stats: {
      years: string;
      speeches: string;
      organizations: string;
      followers: string;
    };
  };
  // Experience
  experience: {
    label: string;
    titleLine1: string;
    titleHighlight: string;
    professionalJourney: string;
    education: string;
    awards: string;
    jobs: Array<{
      period: string;
      title: string;
      company: string;
      description: string;
    }>;
    schools: Array<{
      name: string;
      description: string;
    }>;
    awardsList: Array<{
      name: string;
      issuer: string;
      year: string;
    }>;
  };
  // Speaking
  speaking: {
    label: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
    topics: Array<{
      title: string;
      description: string;
    }>;
    images: Array<{
      alt: string;
    }>;
  };
  // Services
  services: {
    label: string;
    titleLine1: string;
    titleHighlight: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  // Testimonial
  testimonial: {
    label: string;
    titleLine1: string;
    titleHighlight: string;
    quote: string;
    author: string;
    role: string;
  };
  // Contact
  contact: {
    label: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
    location: string;
    locationSub: string;
    email: string;
    emailSub: string;
    scheduling: string;
    schedulingSub: string;
    connectLinkedIn: string;
    formTitle: string;
    fullName: string;
    emailLabel: string;
    organization: string;
    eventType: string;
    selectType: string;
    keynote: string;
    workshop: string;
    panel: string;
    mentoring: string;
    advisory: string;
    other: string;
    preferredDate: string;
    message: string;
    sendRequest: string;
    emailOpening: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    orgPlaceholder: string;
    messagePlaceholder: string;
  };
  // Footer
  footer: {
    tagline: string;
    quickLinks: string;
    connect: string;
    rights: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      speaking: "Speaking",
      services: "Services",
      contact: "Contact",
      bookKeynote: "Book a Keynote",
    },
    hero: {
      tagline: "Strategic Advisor · Keynote Speaker · Board Member",
      subtitle:
        "Bridging strategy, technology, and human insight to help organizations thrive in an era of transformation.",
      bookKeynote: "Book a Keynote",
      learnMore: "Learn More",
    },
    about: {
      label: "About",
      titleLine1: "Where Strategy",
      titleHighlight: "Meets Execution",
      bio: "With over three decades of experience at the intersection of technology, business strategy, and innovation, Luis Coimbra has become a trusted voice for CEOs, boards, and leadership teams navigating complex transformations. His unique ability to translate strategic vision into actionable results has made him a sought-after advisor and keynote speaker across industries and geographies.",
      stats: {
        years: "Years of Experience",
        speeches: "Keynote Speeches",
        organizations: "Organizations Advised",
        followers: "LinkedIn Followers",
      },
    },
    experience: {
      label: "Experience & Credentials",
      titleLine1: "A Career Built on",
      titleHighlight: "Impact & Innovation",
      professionalJourney: "Professional Journey",
      education: "Education",
      awards: "Awards & Recognition",
      jobs: [
        {
          period: "Present",
          title: "CEO — Austin, TX - USA",
          company: "DSTRATEGY LLC",
          description:
            "Leading the executive management of Marketing, Sales, and Support teams focused on bringing Brazilian SaaS solutions to the Texas market. DSTRATEGY specializes in internationalizing SaaS products — helping founders standardize their offerings, build scalable go-to-market strategies, and establish operations in the US with pricing, sales playbooks, channel partnerships, and cultural adaptation for sustainable growth.",
        },
        {
          period: "Consulting",
          title: "COO — São Paulo, SP - Brazil",
          company: "Design Strategy Treinamentos e Consultoria LTDA",
          description:
            "Partnering with organizations to transform strategies into tangible results through agile methodologies and multidisciplinary teams. Bridging executive advisory with hands-on implementation.",
        },
        {
          period: "Education & Technology",
          title: "C-Level Executive & CIO",
          company: "Poliedro Educação / Kroton Educacional / Cogna Educação / Somos Educação",
          description:
            "Drove technology and innovation strategies at Brazil's leading educational institutions. Recognized as CIO of the Year in Education by IDC and Computerworld (IT Leaders 2015).",
        },
      ],
      schools: [
        {
          name: "Aeronautics Institute of Technology (ITA)",
          description:
            "One of Brazil's most prestigious engineering institutions, known for producing top-tier leaders in technology and aerospace.",
        },
        {
          name: "University of São Paulo (USP)",
          description:
            "The largest and most renowned university in Latin America, consistently ranked among the top institutions in the world.",
        },
      ],
      awardsList: [
        {
          name: "Top 100 Innovative Companies",
          issuer: "PwC & ITMIDIA",
          year: "2015",
        },
        {
          name: "IT Leaders — CIO of the Year in Education",
          issuer: "IDC & Computerworld",
          year: "2015",
        },
        {
          name: "Microsoft WPC Award — Public Sector Education in LATAM",
          issuer: "Microsoft",
          year: "2015",
        },
      ],
    },
    speaking: {
      label: "Speaking",
      titleLine1: "Inspiring Audiences",
      titleHighlight: "Around the World",
      description:
        "Coimbra delivers powerful, thought-provoking keynotes that combine deep industry knowledge with compelling storytelling. His presentations leave audiences with actionable insights and a renewed sense of purpose.",
      topics: [
        {
          title: "Digital Transformation & Platform Strategy",
          description:
            "How to build scalable platforms that create lasting competitive advantages in the digital economy.",
        },
        {
          title: "Innovation Leadership & Culture",
          description:
            "Building organizations that innovate systematically, from mindset shifts to structural enablers.",
        },
        {
          title: "AI, Cloud & the Future of Enterprise Technology",
          description:
            "Navigating the rapidly evolving tech landscape with strategic clarity and practical frameworks.",
        },
        {
          title: "Executive Decision-Making in Uncertainty",
          description:
            "Frameworks for leaders to make bold, informed decisions when the path forward is unclear.",
        },
      ],
      images: [
        { alt: "Luis Coimbra at Digital Transformation conference" },
        { alt: "Luis Coimbra delivering Innovation Leadership keynote" },
        { alt: "Luis Coimbra at Cloud Computing & AI conference" },
      ],
    },
    services: {
      label: "Services",
      titleLine1: "How We Can",
      titleHighlight: "Work Together",
      cards: [
        {
          title: "Keynote Speaking",
          description:
            "Engaging, high-impact presentations tailored to your audience. From corporate events to industry conferences, Coimbra delivers insights that inspire action and drive change.",
        },
        {
          title: "Strategic Advisory",
          description:
            "One-on-one or board-level advisory for organizations navigating digital transformation, platform strategy, and innovation challenges. Long-term partnerships that deliver measurable results.",
        },
        {
          title: "Executive Mentoring",
          description:
            "Personalized mentoring for C-suite executives and emerging leaders. Develop strategic thinking, decision-making frameworks, and leadership presence.",
        },
        {
          title: "Workshop Facilitation",
          description:
            "Interactive workshops designed to align teams, spark innovation, and create actionable roadmaps. From half-day sessions to multi-day immersions.",
        },
      ],
    },
    testimonial: {
      label: "Testimonial",
      titleLine1: "What Leaders",
      titleHighlight: "Say About Coimbra",
      quote:
        "A great professional. Dedicated, zealous about his projects, a fighter from start to finish, with technical knowledge rarely found. In technology, systems, innovation, and operations, there are few people in Brazil like Luis Coimbra. A builder of great projects, a tireless researcher who brought many innovations and was creative and decisive at critical moments. He is someone you want on winning teams.",
      author: "João Luís de Almeida Machado",
      role: "LinkedIn Recommendation",
    },
    contact: {
      label: "Contact",
      titleLine1: "Let's Create",
      titleHighlight: "Something Impactful",
      description:
        "Whether your company, event, or team needs an experienced, provocative, and practical voice — someone who speaks the language of business, people, and transformation — Luis Coimbra is ready to contribute. On stage, in a boardroom, or in executive mentoring, he delivers clarity, direction, and impact.",
      location: "United States",
      locationSub: "Available worldwide",
      email: "info@coimbra.eng.br",
      emailSub: "For inquiries and proposals",
      scheduling: "Flexible Scheduling",
      schedulingSub: "In-person & virtual events",
      connectLinkedIn: "Connect on LinkedIn",
      formTitle: "Book a Keynote",
      fullName: "Full Name *",
      emailLabel: "Email *",
      organization: "Organization *",
      eventType: "Event Type",
      selectType: "Select type",
      keynote: "Keynote Speech",
      workshop: "Workshop",
      panel: "Panel Discussion",
      mentoring: "Executive Mentoring",
      advisory: "Strategic Advisory",
      other: "Other",
      preferredDate: "Preferred Date",
      message: "Message *",
      sendRequest: "Send Request",
      emailOpening: "Opening your email client to send the request.",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      orgPlaceholder: "Company or organization",
      messagePlaceholder:
        "Tell us about your event, audience, and what you're looking for...",
    },
    footer: {
      tagline:
        "Bridging strategy, technology, and human insight to help organizations thrive.",
      quickLinks: "Quick Links",
      connect: "Connect",
      rights: "All rights reserved.",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      speaking: "Palestras",
      services: "Serviços",
      contact: "Contato",
      bookKeynote: "Agendar Palestra",
    },
    hero: {
      tagline: "Conselheiro Estratégico · Palestrante · Conselheiro de Administração",
      subtitle:
        "Conectando estratégia, tecnologia e visão humana para ajudar organizações a prosperar em uma era de transformação.",
      bookKeynote: "Agendar Palestra",
      learnMore: "Saiba Mais",
    },
    about: {
      label: "Sobre",
      titleLine1: "Onde Estratégia",
      titleHighlight: "Encontra Execução",
      bio: "Com mais de três décadas de experiência na interseção entre tecnologia, estratégia de negócios e inovação, Luis Coimbra tornou-se uma voz confiável para CEOs, conselhos e equipes de liderança que navegam transformações complexas. Sua capacidade única de traduzir visão estratégica em resultados acionáveis o tornou um conselheiro e palestrante requisitado em diversas indústrias e geografias.",
      stats: {
        years: "Anos de Experiência",
        speeches: "Palestras Realizadas",
        organizations: "Organizações Assessoradas",
        followers: "Seguidores no LinkedIn",
      },
    },
    experience: {
      label: "Experiência & Credenciais",
      titleLine1: "Uma Carreira Construída em",
      titleHighlight: "Impacto & Inovação",
      professionalJourney: "Trajetória Profissional",
      education: "Formação Acadêmica",
      awards: "Prêmios & Reconhecimentos",
      jobs: [
        {
          period: "Atual",
          title: "CEO — Austin, TX - USA",
          company: "DSTRATEGY LLC",
          description:
            "Liderando a gestão executiva dos times de Marketing, Vendas e Suporte focados em trazer soluções SaaS brasileiras para o mercado do Texas. A DSTRATEGY é especializada na internacionalização de produtos SaaS — ajudando fundadores a padronizar suas ofertas, construir estratégias de go-to-market escaláveis e estabelecer operações nos EUA com precificação, playbooks de vendas, parcerias de canal e adaptação cultural para crescimento sustentável.",
        },
        {
          period: "Consultoria",
          title: "COO — São Paulo, SP - Brasil",
          company: "Design Strategy Treinamentos e Consultoria LTDA",
          description:
            "Parceria com organizações para transformar estratégias em resultados tangíveis através de metodologias ágeis e equipes multidisciplinares. Ponte entre consultoria executiva e implementação prática.",
        },
        {
          period: "Educação & Tecnologia",
          title: "Executivo C-Level & CIO",
          company: "Poliedro Educação / Kroton Educacional / Cogna Educação / Somos Educação",
          description:
            "Conduziu estratégias de tecnologia e inovação nas principais instituições educacionais do Brasil. Reconhecido como CIO do Ano em Educação pela IDC e Computerworld (IT Leaders 2015).",
        },
      ],
      schools: [
        {
          name: "Instituto Tecnológico de Aeronáutica (ITA)",
          description:
            "Uma das instituições de engenharia mais prestigiadas do Brasil, conhecida por formar líderes de excelência em tecnologia e aeroespacial.",
        },
        {
          name: "Universidade de São Paulo (USP)",
          description:
            "A maior e mais renomada universidade da América Latina, consistentemente classificada entre as melhores instituições do mundo.",
        },
      ],
      awardsList: [
        {
          name: "Top 100 Empresas Inovadoras",
          issuer: "PwC & ITMIDIA",
          year: "2015",
        },
        {
          name: "IT Leaders — CIO do Ano em Educação",
          issuer: "IDC & Computerworld",
          year: "2015",
        },
        {
          name: "Microsoft WPC Award — Setor Público Educação na LATAM",
          issuer: "Microsoft",
          year: "2015",
        },
      ],
    },
    speaking: {
      label: "Palestras",
      titleLine1: "Inspirando Audiências",
      titleHighlight: "Ao Redor do Mundo",
      description:
        "Coimbra apresenta palestras poderosas e instigantes que combinam profundo conhecimento da indústria com narrativas envolventes. Suas apresentações deixam o público com insights acionáveis e um senso renovado de propósito.",
      topics: [
        {
          title: "Transformação Digital & Estratégia de Plataformas",
          description:
            "Como construir plataformas escaláveis que criam vantagens competitivas duradouras na economia digital.",
        },
        {
          title: "Liderança em Inovação & Cultura",
          description:
            "Construindo organizações que inovam sistematicamente, desde mudanças de mentalidade até habilitadores estruturais.",
        },
        {
          title: "IA, Cloud & o Futuro da Tecnologia Empresarial",
          description:
            "Navegando o cenário tecnológico em rápida evolução com clareza estratégica e frameworks práticos.",
        },
        {
          title: "Tomada de Decisão Executiva na Incerteza",
          description:
            "Frameworks para líderes tomarem decisões ousadas e informadas quando o caminho à frente não é claro.",
        },
      ],
      images: [
        { alt: "Luis Coimbra em conferência de Transformação Digital" },
        { alt: "Luis Coimbra apresentando palestra sobre Liderança em Inovação" },
        { alt: "Luis Coimbra em conferência de Cloud Computing & IA" },
      ],
    },
    services: {
      label: "Serviços",
      titleLine1: "Como Podemos",
      titleHighlight: "Trabalhar Juntos",
      cards: [
        {
          title: "Palestras",
          description:
            "Apresentações envolventes e de alto impacto, adaptadas ao seu público. De eventos corporativos a conferências do setor, Coimbra entrega insights que inspiram ação e impulsionam mudanças.",
        },
        {
          title: "Consultoria Estratégica",
          description:
            "Consultoria individual ou ao nível do conselho para organizações navegando transformação digital, estratégia de plataformas e desafios de inovação. Parcerias de longo prazo que entregam resultados mensuráveis.",
        },
        {
          title: "Mentoria Executiva",
          description:
            "Mentoria personalizada para executivos C-suite e líderes emergentes. Desenvolva pensamento estratégico, frameworks de tomada de decisão e presença de liderança.",
        },
        {
          title: "Facilitação de Workshops",
          description:
            "Workshops interativos projetados para alinhar equipes, estimular inovação e criar roadmaps acionáveis. De sessões de meio dia a imersões de vários dias.",
        },
      ],
    },
    testimonial: {
      label: "Depoimento",
      titleLine1: "O Que Líderes",
      titleHighlight: "Dizem Sobre Coimbra",
      quote:
        "Um grande profissional. Dedicado, zeloso por seus projetos, lutador do início ao fim, com conhecimento técnico que poucas vezes pude verificar em pessoas da área. Em tecnologias, sistemas, inovação e toda parte operacional há poucas pessoas no Brasil como o Luís Coimbra. Realizador de grandes projetos, pesquisador incansável, trouxe muitas inovações e foi criativo e decisivo em momentos importantes. É alguém para se ter em times vencedores.",
      author: "João Luís de Almeida Machado",
      role: "Recomendação LinkedIn",
    },
    contact: {
      label: "Contato",
      titleLine1: "Vamos Criar",
      titleHighlight: "Algo com Impacto",
      description:
        "Seja sua empresa, evento ou equipe que precisa de uma voz experiente, provocativa e prática — alguém que fala a linguagem dos negócios, das pessoas e da transformação — Luis Coimbra está pronto para contribuir. No palco, na sala de reuniões ou em mentoria executiva, ele entrega clareza, direção e impacto.",
      location: "Estados Unidos",
      locationSub: "Disponível mundialmente",
      email: "info@coimbra.eng.br",
      emailSub: "Para consultas e propostas",
      scheduling: "Agenda Flexível",
      schedulingSub: "Eventos presenciais e virtuais",
      connectLinkedIn: "Conectar no LinkedIn",
      formTitle: "Agendar uma Palestra",
      fullName: "Nome Completo *",
      emailLabel: "Email *",
      organization: "Organização *",
      eventType: "Tipo de Evento",
      selectType: "Selecione o tipo",
      keynote: "Palestra",
      workshop: "Workshop",
      panel: "Painel de Discussão",
      mentoring: "Mentoria Executiva",
      advisory: "Consultoria Estratégica",
      other: "Outro",
      preferredDate: "Data Preferencial",
      message: "Mensagem *",
      sendRequest: "Enviar Solicitação",
      emailOpening: "Abrindo seu cliente de email para enviar a solicitação.",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seu@email.com",
      orgPlaceholder: "Empresa ou organização",
      messagePlaceholder:
        "Conte-nos sobre seu evento, público e o que você está procurando...",
    },
    footer: {
      tagline:
        "Conectando estratégia, tecnologia e visão humana para ajudar organizações a prosperar.",
      quickLinks: "Links Rápidos",
      connect: "Conecte-se",
      rights: "Todos os direitos reservados.",
    },
  },
};
