/* ============================================================================
   PORTFOLIO CONTENT — the only file you need to edit.

   Two professional profiles share one site. Edit the matching profile under
   `profiles.ios` or `profiles.ai`. Shared contact details live in `site`.

   Common tasks:
   • Switch-tab copy     → edit the profile under `profiles`.
   • Production apps     → edit that profile's `productionApps` array
                           (order = display order).
   • Engineering areas   → edit that profile's `engineeringWork` array
                           (Architecture, AI, etc.).
   • Visual panels       → set `visual` to metrics | workflow | none
                           (or omit when not needed).
   • New CV              → replace the matching PDF in public/ (keep the
                           filename, or update `cvFile` on that profile).

   Empty fields ("" or []) are hidden automatically.
   ========================================================================== */

export type RoleId = "ios" | "ai";

export type EngineeringVisual =
  | {
      type: "metrics";
      items: { value: string; label: string }[];
    }
  | {
      type: "workflow";
      steps: string[];
      metric?: { value: string; label: string };
    }
  | { type: "none" };

export interface ProductionApp {
  name: string;
  /** Small badge, e.g. "Production iOS App". Leave "" to hide. */
  label: string;
  /** One short note under the name. Leave "" to hide. */
  note: string;
  /** Path under public/, e.g. "screenshots/apps/icon.webp". */
  icon: string;
  /** Up to 2 screenshot paths under public/. */
  screenshots: string[];
  appStoreUrl: string;
}

export interface EngineeringWork {
  name: string;
  /** Small badge, e.g. "Engineering Improvements". Leave "" to hide. */
  type: string;
  /** Organization / context line. Leave "" to hide. */
  organization: string;
  /** External org URL. Leave "" for plain text. */
  organizationUrl: string;
  /** e.g. "Dec 2024 — Present". Leave "" to hide. */
  timeframe: string;
  /** Short framing sentence. Leave "" to hide. */
  description: string;
  /** Technical highlights — rendered as bullets. Keep short. */
  contribution: string[];
  technologies: string[];
  /** Optional side / below visual. Omit or use type "none" for text-only. */
  visual?: EngineeringVisual;
  /** Leave "" to hide a link. */
  appStoreUrl: string;
  githubUrl: string;
  websiteUrl: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  /** External org URL. Leave "" for plain text. */
  organizationUrl: string;
  location: string;
  period: string;
  /** Small tag: "Professional" | "Community" | "Military service" — free text. */
  type: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface RoleOption {
  id: RoleId;
  /** Short label shown in the switcher. */
  label: string;
}

export interface Profile {
  /** Mono eyebrow / nav role line. */
  role: string;
  /** Document <title> suffix. */
  documentTitle: string;
  /** File inside public/ for the Download CV buttons on this tab. */
  cvFile: string;
  hero: {
    name: string;
    headline: string;
    sub: string;
  };
  engineeringIntro: string;
  productionAppsIntro: string;
  productionApps: ProductionApp[];
  engineeringWork: EngineeringWork[];
  experience: ExperienceEntry[];
  skills: SkillGroup[];
  about: {
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  contact: {
    heading: string;
    blurb: string;
  };
}

/* -------------------------------------------------------- shared / site -- */

export const site = {
  name: "Shady Adel",
  location: "Egypt",
  email: "shadybusiness219@gmail.com",
  phone: "(+20) 114 172 9045",
  phoneHref: "tel:+201141729045",
  linkedinUrl: "https://www.linkedin.com/in/shadyadel9",
  githubUrl: "", // temporarily hidden — restore: https://github.com/shadyadel90
};

/** Tabs shown in the role switcher — order = left → right. */
export const roleOptions: RoleOption[] = [
  { id: "ios", label: "iOS Engineer" },
  { id: "ai", label: "AI Product Engineer" },
];

export const defaultRole: RoleId = "ios";

const productionApps: ProductionApp[] = [
  {
    name: "Mahmoud ElFar Market",
    label: "",
    note: "",
    icon: "screenshots/apps/mahmoud-elfar-icon.webp",
    screenshots: [
      "screenshots/apps/mahmoud-elfar-1.webp",
      "screenshots/apps/mahmoud-elfar-2.webp",
      "screenshots/apps/mahmoud-elfar-3.webp",
    ],
    appStoreUrl:
      "https://apps.apple.com/eg/app/mahmoud-elfar-market/id1604071032",
  },
  {
    name: "TAQA Volt",
    label: "",
    note: "",
    icon: "screenshots/apps/taqa-volt-icon.webp",
    screenshots: [
      "screenshots/apps/taqa-volt-1.webp",
      "screenshots/apps/taqa-volt-2.webp",
      "screenshots/apps/taqa-volt-3.webp",
    ],
    appStoreUrl: "https://apps.apple.com/eg/app/taqa-volt/id6478912475",
  },
];

const architectureWork: EngineeringWork = {
  name: "Architecture & Performance",
  type: "",
  organization: "Innovitics",
  organizationUrl: "https://www.innovitics.com/en",
  timeframe: "",
  description:
    "Improving architecture, startup performance, and network efficiency in production codebases.",
  contribution: [
    "Refactored legacy code toward a more modular architecture.",
  ],
  technologies: [],
  visual: {
    type: "metrics",
    items: [
      { value: "~10%", label: "Smaller codebase" },
      { value: "~800 ms", label: "Launch-time improvement" },
      { value: "Up to 80%", label: "Lower network/server usage" },
    ],
  },
  appStoreUrl: "",
  githubUrl: "",
  websiteUrl: "",
};

const aiWork: EngineeringWork = {
  name: "AI-Assisted Engineering",
  type: "",
  organization: "",
  organizationUrl: "",
  timeframe: "",
  description:
    "Designing a multi-model AI development workflow around modern engineering tools.",
  contribution: [
    "Route engineering tasks across models based on capability, context, and cost.",
    "Reduced AI operating costs by up to 80% through more efficient model usage.",
  ],
  technologies: [
    "Claude",
    "Codex",
    "Cursor",
    "Gemini",
    "MCP",
    "Agentic Workflows",
  ],
  visual: {
    type: "workflow",
    steps: ["Claude", "Opus", "Codex"],
    metric: {
      value: "Up to 80%",
      label: "Lower AI cost",
    },
  },
  appStoreUrl: "",
  githubUrl: "",
  websiteUrl: "",
};

const beyondEngineering = {
  paragraphs: [
    "My path into software wasn't linear. Before writing production code, I spent three years as a military officer — an experience that taught me how to lead, adapt, and take responsibility when the answer isn't obvious.",
    "I care a lot about people and communities too. Through Mashrou' Siin and Rafeeq, I work on bringing people together, sharing experience, and helping others move forward in their careers.",
    "I'm curious by nature. iOS is where I work today, but I'm constantly exploring AI, products, backend systems, and whatever helps me understand how better software gets built.",
    "For me, engineering is part of a bigger goal: becoming someone who can take difficult problems, understand them deeply, and make things better.",
  ],
  facts: [
    { label: "Location", value: "Egypt" },
    {
      label: "Education",
      value: "BSc Computer Science, Kafr El-Shiekh University (2015 — 2019)",
    },
    {
      label: "Service",
      value: "First Lieutenant, Egyptian Armed Forces (2019 — 2022)",
    },
    { label: "Community", value: "Community Manager, Mashrou' siin" },
  ],
};

/* -------------------------------------------------------------- profiles -- */

export const profiles: Record<RoleId, Profile> = {
  /* ============================================================ iOS ==== */
  ios: {
    role: "Software Engineer · iOS",
    documentTitle: "Shady Adel — iOS Software Engineer",
    cvFile: "Shady-Adel-iOS-CV.pdf",
    hero: {
      name: "Shady Adel",
      headline: "iOS Software Engineer",
      sub: "2.5+ years shipping and maintaining production iOS apps with Swift, SwiftUI, and UIKit — focused on architecture, performance, and AI-assisted engineering.",
    },
    engineeringIntro:
      "Production applications, engineering improvements, and AI-assisted development from my work at Innovitics.",
    productionAppsIntro:
      "Production iOS applications I develop and maintain at Innovitics.",
    productionApps,
    engineeringWork: [architectureWork, aiWork],
    experience: [
      {
        role: "iOS Developer",
        organization: "Innovitics",
        organizationUrl: "https://www.innovitics.com/en",
        location: "Cairo, Egypt",
        period: "Dec 2024 — Present",
        type: "Professional",
        highlights: [
          "Develop and maintain 3+ production iOS applications.",
          "Improved architecture and performance across production codebases.",
          "Reduced network/server usage by up to 80%.",
          "Integrated a multi-model AI-assisted engineering workflow.",
        ],
      },
      {
        role: "Community Manager",
        organization: "Mashrou' Siin",
        organizationUrl: "https://m-siin.vercel.app/",
        location: "Egypt",
        period: "Nov 2024 — Present",
        type: "Community",
        highlights: [
          "Helped grow the community to 500+ active members across 5+ cities.",
          "Contributed to 50+ workshops, meetups, and mentoring sessions.",
          "Supported initiatives reaching 250k+ online views.",
        ],
      },
      {
        role: "First Lieutenant",
        organization: "Egyptian Armed Forces",
        organizationUrl: "",
        location: "Sidi Barani, Egypt",
        period: "Nov 2019 — Apr 2022",
        type: "Military service",
        highlights: [
          "Led approximately 40 personnel under high-pressure conditions.",
          "Coordinated operations, logistics, timelines, and team execution.",
          "Mentored and trained team members.",
        ],
      },
    ],
    skills: [
      {
        category: "Languages & Frameworks",
        items: ["Swift", "Objective-C", "SwiftUI", "UIKit", "Combine"],
      },
      {
        category: "Architecture & Patterns",
        items: ["MVVM-C", "VIPER", "SOLID", "Concurrency"],
      },
      {
        category: "Quality & Delivery",
        items: ["Unit Testing", "UI Testing", "Git", "CI/CD"],
      },
      {
        category: "AI-Assisted Engineering",
        items: [
          "Claude",
          "Codex",
          "Cursor",
          "Gemini",
          "AI-Assisted Development",
          "Prompt Engineering",
          "MCP",
          "Agentic Workflows",
        ],
      },
    ],
    about: beyondEngineering,
    contact: {
      heading: "Let's talk.",
      blurb:
        "Open to discussing iOS engineering, production software, and AI-assisted development opportunities.",
    },
  },

  /* ============================================== AI Product Engineer ==== */
  ai: {
    role: "AI Product Engineer",
    documentTitle: "Shady Adel — AI Product Engineer",
    cvFile: "Shady-Adel-AI-Product-Engineer-CV.pdf",
    hero: {
      name: "Shady Adel",
      headline: "AI Product Engineer",
      sub: "2.5+ years building production software and AI-assisted engineering workflows — focused on architecture, performance, and shipping customer-facing products.",
    },
    engineeringIntro:
      "Production applications, engineering improvements, and AI-assisted development from my work at Innovitics.",
    productionAppsIntro:
      "Production applications I develop and maintain at Innovitics.",
    productionApps,
    engineeringWork: [architectureWork, aiWork],
    experience: [
      {
        role: "iOS Developer",
        organization: "Innovitics",
        organizationUrl: "https://www.innovitics.com/en",
        location: "Cairo, Egypt",
        period: "Dec 2024 — Present",
        type: "Professional",
        highlights: [
          "Develop and maintain 3+ production applications.",
          "Improved architecture and performance across production codebases.",
          "Reduced network/server usage by up to 80%.",
          "Designed and integrated a multi-model AI-assisted engineering workflow.",
        ],
      },
      {
        role: "Community Manager",
        organization: "Mashrou' Siin",
        organizationUrl: "https://m-siin.vercel.app/",
        location: "Egypt",
        period: "Nov 2024 — Present",
        type: "Community",
        highlights: [
          "Helped grow the community to 500+ active members across 5+ cities.",
          "Contributed to 50+ workshops, meetups, and mentoring sessions.",
          "Supported initiatives reaching 250k+ online views.",
        ],
      },
      {
        role: "First Lieutenant",
        organization: "Egyptian Armed Forces",
        organizationUrl: "",
        location: "Sidi Barani, Egypt",
        period: "Nov 2019 — Apr 2022",
        type: "Military service",
        highlights: [
          "Led approximately 40 personnel under high-pressure conditions.",
          "Coordinated operations, logistics, timelines, and team execution.",
          "Mentored and trained team members.",
        ],
      },
    ],
    skills: [
      {
        category: "AI & Developer Productivity",
        items: [
          "Claude",
          "Codex",
          "Cursor",
          "Gemini",
          "AI-Assisted Development",
          "Prompt Engineering",
        ],
      },
      {
        category: "AI Systems",
        items: ["MCP", "Agentic Workflows"],
      },
      {
        category: "Languages & Mobile",
        items: ["Swift", "Objective-C", "SwiftUI", "UIKit", "Combine"],
      },
      {
        category: "Engineering",
        items: [
          "MVVM-C",
          "VIPER",
          "SOLID",
          "Concurrency",
          "Unit Testing",
          "UI Testing",
          "Git",
          "CI/CD",
        ],
      },
    ],
    about: beyondEngineering,
    contact: {
      heading: "Let's talk.",
      blurb:
        "Open to discussing AI-assisted development, production software, and product engineering opportunities.",
    },
  },
};
