/* ============================================================================
   PORTFOLIO CONTENT — the only file you need to edit.

   Two professional profiles share one site. Edit the matching profile under
   `profiles.ios` or `profiles.ai`. Shared contact details live in `site`.

   Common tasks:
   • Switch-tab copy     → edit the profile under `profiles`.
   • New engineering work → add an entry to that profile's `engineeringWork` array
                           (top of the array = first).
   • Visual panels       → set `visual` to metrics | workflow | apps | none
                           (or omit / use screenshots when you have images).
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
  | {
      type: "apps";
      items: { name: string; detail?: string }[];
    }
  | {
      type: "screenshots";
      images: string[];
    }
  | { type: "none" };

export interface EngineeringWork {
  name: string;
  /** Small badge, e.g. "Professional Work". */
  type: string;
  /** Organization / context line, e.g. "Innovitics". Leave "" to hide. */
  organization: string;
  /** e.g. "Dec 2024 — Present". Leave "" to hide. */
  timeframe: string;
  /** Short framing sentence. Leave "" to hide. */
  description: string;
  /** Technical highlights — rendered as bullets. */
  contribution: string[];
  technologies: string[];
  /** Optional side visual. Omit or use type "none" for text-only. */
  visual?: EngineeringVisual;
  /** Leave "" to hide a link. */
  appStoreUrl: string;
  githubUrl: string;
  websiteUrl: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
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
  githubUrl: "", // add your GitHub profile URL to show it in nav/contact
};

/** Tabs shown in the role switcher — order = left → right. */
export const roleOptions: RoleOption[] = [
  { id: "ios", label: "iOS Engineer" },
  { id: "ai", label: "AI Product Engineer" },
];

export const defaultRole: RoleId = "ios";

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
      sub: "I build, optimize, and ship production iOS apps — Swift, SwiftUI, and UIKit. 2.5+ years specializing in performance, modular architecture, and AI-assisted delivery.",
    },
    engineeringIntro:
      "Production software, architecture improvements, performance work, and AI-assisted engineering from my work at Innovitics.",
    engineeringWork: [
      {
        name: "Production iOS Engineering",
        type: "Professional Work",
        organization: "Innovitics",
        timeframe: "Dec 2024 — Present",
        description:
          "Developing and maintaining customer-facing iOS applications in production, including TAQA EV and Mahmoud ElFar.",
        contribution: [
          "Developed and managed 3+ production iOS applications from feature development through deployment and ongoing maintenance.",
          "Built and maintained customer-facing features using Swift, SwiftUI, UIKit, and Combine.",
          "Worked across existing and legacy production codebases, resolving bugs, improving maintainability, and shipping new functionality.",
          "Collaborated with Product, Design, Android, Web, and QA teams throughout development and release cycles.",
        ],
        technologies: ["Swift", "SwiftUI", "UIKit", "Combine", "MVVM-C"],
        visual: {
          type: "apps",
          items: [
            { name: "TAQA EV", detail: "Production app" },
            { name: "Mahmoud ElFar", detail: "Production app" },
          ],
        },
        appStoreUrl: "",
        githubUrl: "",
        websiteUrl: "",
      },
      {
        name: "Architecture & Performance",
        type: "Engineering Improvements",
        organization: "Innovitics",
        timeframe: "",
        description:
          "Improving production codebases beyond feature delivery — architecture, startup performance, maintainability, and network efficiency.",
        contribution: [
          "Refactored a legacy codebase into a modular architecture, reducing overall codebase size by approximately 10%.",
          "Improved app launch time by approximately 800 ms.",
          "Reduced network and server usage by up to 80% across several features.",
          "Applied MVVM-C, SOLID principles, concurrency, and testing practices while evolving existing production code.",
        ],
        technologies: ["MVVM-C", "SOLID", "Concurrency", "Unit Testing"],
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
      },
      {
        name: "AI-Assisted Engineering",
        type: "Developer Productivity",
        organization: "AI Workflows",
        timeframe: "",
        description:
          "Building a multi-model AI-assisted development workflow to improve engineering speed, capability, and cost efficiency.",
        contribution: [
          "Designed and integrated a multi-model development workflow using Claude, Opus, and Codex.",
          "Used different models for different engineering tasks based on capability, context, and cost.",
          "Reduced AI operating costs by up to 80% through more efficient model usage and workflow design.",
          "Extended the workflow with tools such as Cursor and Gemini while exploring MCP and agentic development systems.",
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
      },
    ],
    experience: [
      {
        role: "iOS Developer",
        organization: "Innovitics",
        location: "Cairo, Egypt",
        period: "Dec 2024 — Present",
        type: "Professional",
        highlights: [
          "Own feature delivery and maintenance for customer-facing iOS apps in production.",
          "Drive architecture and performance improvements across existing codebases.",
          "Partner with Product, Design, Android, Web, and QA through development and release cycles.",
          "Apply AI-assisted workflows to ship faster while keeping operating costs under control.",
        ],
      },
      {
        role: "Community Manager",
        organization: "Mashrou' siin — Tech Community",
        location: "Egypt",
        period: "Nov 2024 — Present",
        type: "Community",
        highlights: [
          "Collaborated with the community founders in expanding local chapters across 5+ cities, growing the community to 500+ unique active members.",
          "Contributed to 50+ workshops, meetups, and mentoring sessions, supporting kids, students, and professionals across all experience levels.",
          "Worked directly with social media outreach, helping community initiatives reach 250k+ online views.",
          "Maintained a safe and respectful community environment where members felt comfortable sharing experiences and growing together.",
        ],
      },
      {
        role: "First Lieutenant",
        organization: "Egyptian Armed Forces",
        location: "Sidi Barani, Egypt",
        period: "Nov 2019 — Apr 2022",
        type: "Military service",
        highlights: [
          "Led a unit of ~40 personnel, ensuring performance under high-pressure conditions.",
          "Planned and executed missions with strict timelines, improving execution efficiency and minimizing risk.",
          "Enforced standards that resulted in consistent team reliability and performance.",
          "Coordinated cross-functional activities across logistics and operations.",
          "Mentored and trained team members, improving overall unit capability.",
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
        category: "Quality & Testing",
        items: ["Unit Testing", "UI Testing"],
      },
      {
        category: "AI-Assisted Development",
        items: ["Claude", "Codex", "Gemini", "Cursor"],
      },
      {
        category: "Workflow & Delivery",
        items: ["Git", "CI/CD", "Scrum", "Agile", "Jira"],
      },
      {
        category: "Ecosystem",
        items: ["3rd-Party Libraries", "Open Source"],
      },
    ],
    about: {
      paragraphs: [
        "I'm Shady — a software engineer specializing in iOS, working with Swift, SwiftUI, and UIKit. Over the last 2.5+ years I've developed and maintained production apps end to end: architecture, refactoring, performance, deployment, and ongoing support.",
        "At Innovitics I refactored a legacy codebase into a modular architecture (~10% smaller), cut app launch time by ~800 ms, lowered network and server usage by up to ~80%, and designed a multi-model AI-assisted engineering workflow — Claude, Opus, and Codex — that reduced costs by up to ~80%.",
        "Outside of work I'm a community manager at Mashrou' siin, a tech community I've helped grow to 500+ active members across 5+ cities — contributing to 50+ workshops, meetups, and mentoring sessions.",
        "Before software, I served three years as a first lieutenant in the Egyptian Armed Forces, leading a unit of ~40 personnel — where I learned to deliver under pressure and on strict timelines.",
      ],
      facts: [
        { label: "Location", value: "Egypt" },
        {
          label: "Education",
          value: "BSc Computer Science, Kafr El-Shiekh University (2015 — 2019)",
        },
        { label: "Graduation project", value: "E-commerce platform — graded A+" },
        {
          label: "Service",
          value: "First Lieutenant, Egyptian Armed Forces (2019 — 2022)",
        },
        { label: "Community", value: "Community Manager, Mashrou' siin" },
      ],
    },
    contact: {
      heading: "Let's build something.",
      blurb:
        "Happy to talk about iOS, shipped products, or the next thing worth building. Fastest way to reach me:",
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
      sub: "Software engineer with 2.5+ years building production software and AI-powered features — scalable architectures, performance, AI workflows, and customer-facing products. Focused on AI-native products, modern developer tools, and end-to-end systems with AI-assisted development.",
    },
    engineeringIntro:
      "Production software, architecture improvements, performance work, and AI-assisted engineering from my work at Innovitics.",
    engineeringWork: [
      {
        name: "Production Engineering",
        type: "Professional Work",
        organization: "Innovitics",
        timeframe: "Dec 2024 — Present",
        description:
          "Developing and maintaining customer-facing applications in production, including TAQA EV and Mahmoud ElFar.",
        contribution: [
          "Developed and managed 3+ production applications from feature development through deployment and ongoing maintenance.",
          "Built and maintained customer-facing features across existing and legacy production codebases.",
          "Resolved bugs, improved maintainability, and shipped new functionality in live products.",
          "Collaborated with Product, Design, Android, Web, and QA teams throughout development and release cycles.",
        ],
        technologies: ["Swift", "SwiftUI", "UIKit", "Combine", "MVVM-C"],
        visual: {
          type: "apps",
          items: [
            { name: "TAQA EV", detail: "Production app" },
            { name: "Mahmoud ElFar", detail: "Production app" },
          ],
        },
        appStoreUrl: "",
        githubUrl: "",
        websiteUrl: "",
      },
      {
        name: "Architecture & Performance",
        type: "Engineering Improvements",
        organization: "Innovitics",
        timeframe: "",
        description:
          "Improving production codebases beyond feature delivery — architecture, startup performance, maintainability, and network efficiency.",
        contribution: [
          "Refactored a legacy codebase into a modular architecture, reducing overall codebase size by approximately 10%.",
          "Improved app launch time by approximately 800 ms.",
          "Reduced network and server usage by up to 80% across several features.",
          "Applied MVVM-C, SOLID principles, concurrency, and testing practices while evolving existing production code.",
        ],
        technologies: ["MVVM-C", "SOLID", "Concurrency", "Unit Testing"],
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
      },
      {
        name: "AI-Assisted Engineering",
        type: "Developer Productivity",
        organization: "AI Workflows",
        timeframe: "",
        description:
          "Building a multi-model AI-assisted development workflow to improve engineering speed, capability, and cost efficiency.",
        contribution: [
          "Designed and integrated a multi-model development workflow using Claude, Opus, and Codex.",
          "Used different models for different engineering tasks based on capability, context, and cost.",
          "Reduced AI operating costs by up to 80% through more efficient model usage and workflow design.",
          "Extended the workflow with tools such as Cursor and Gemini while exploring MCP and agentic development systems.",
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
      },
    ],
    experience: [
      {
        role: "iOS Developer",
        organization: "Innovitics",
        location: "Cairo, Egypt",
        period: "Dec 2024 — Present",
        type: "Professional",
        highlights: [
          "Design and run multi-model AI-assisted workflows that improve delivery speed and cost efficiency.",
          "Own feature delivery and maintenance for customer-facing production applications.",
          "Drive architecture and performance improvements across existing codebases.",
          "Partner with Product, Design, Android, Web, and QA through development and release cycles.",
        ],
      },
      {
        role: "Community Manager",
        organization: "Mashrou' siin — Tech Community",
        location: "Egypt",
        period: "Nov 2024 — Present",
        type: "Community",
        highlights: [
          "Collaborated with the community founders in expanding local chapters across 5+ cities, growing the community to 500+ unique active members.",
          "Contributed to 50+ workshops, meetups, and mentoring sessions, supporting kids, students, and professionals across all experience levels.",
          "Worked directly with social media outreach, helping community initiatives reach 250k+ online views.",
          "Maintained a safe and respectful community environment where members felt comfortable sharing experiences and growing together.",
        ],
      },
      {
        role: "First Lieutenant",
        organization: "Egyptian Armed Forces",
        location: "Sidi Barani, Egypt",
        period: "Nov 2019 — Apr 2022",
        type: "Military service",
        highlights: [
          "Led a unit of ~40 personnel, ensuring performance under high-pressure conditions.",
          "Planned and executed missions with strict timelines, improving execution efficiency and minimizing risk.",
          "Enforced standards that resulted in consistent team reliability and performance.",
          "Coordinated cross-functional activities across logistics and operations.",
          "Mentored and trained team members, improving overall unit capability.",
        ],
      },
    ],
    skills: [
      {
        category: "Programming Languages",
        items: ["Swift", "Objective-C", "JavaScript", "TypeScript"],
      },
      {
        category: "Mobile Development",
        items: ["SwiftUI", "UIKit", "Combine", "Concurrency", "Flutter"],
      },
      {
        category: "Software Engineering",
        items: [
          "MVVM-C",
          "VIPER",
          "SOLID",
          "Performance Optimization",
          "Unit Testing",
          "UI Testing",
          "Open Source",
          "Third-Party Libraries",
        ],
      },
      {
        category: "AI & Developer Productivity",
        items: [
          "Claude",
          "Cursor",
          "Codex",
          "Gemini",
          "AI-Assisted Development",
          "Prompt Engineering",
          "LLM Integration",
        ],
      },
      {
        category: "AI Systems",
        items: ["MCP", "Agentic Workflows"],
      },
      {
        category: "Backend & Platform",
        items: ["Node.js", "PostgreSQL", "Docker", "System Design"],
      },
      {
        category: "Tools & Practices",
        items: ["Git", "CI/CD", "Jira", "Agile", "Scrum"],
      },
    ],
    about: {
      paragraphs: [
        "I'm Shady — an AI Product Engineer and AI-assisted software engineer with 2.5+ years building production software and AI-powered features. I design scalable architectures, optimize performance, integrate AI workflows, and deliver customer-facing products.",
        "At Innovitics I designed a multi-model AI-assisted engineering workflow — Claude, Opus, and Codex — that reduced costs by up to ~80%, while refactoring a legacy codebase into a modular architecture (~10% smaller), cutting launch time by ~800 ms, and lowering network and server usage by up to ~80%.",
        "I'm passionate about AI-native products, modern developer tools, and end-to-end software systems built with AI-assisted development.",
        "Outside of work I'm a community manager at Mashrou' siin (500+ active members across 5+ cities). Before software, I served three years as a first lieutenant in the Egyptian Armed Forces, leading a unit of ~40 personnel.",
      ],
      facts: [
        { label: "Location", value: "Egypt" },
        {
          label: "Education",
          value: "BSc Computer Science, Kafr El-Shiekh University (2015 — 2019)",
        },
        { label: "Graduation project", value: "E-commerce platform — graded A+" },
        {
          label: "Service",
          value: "First Lieutenant, Egyptian Armed Forces (2019 — 2022)",
        },
        { label: "Community", value: "Community Manager, Mashrou' siin" },
      ],
    },
    contact: {
      heading: "Let's build something.",
      blurb:
        "Happy to talk about AI-native products, developer tools, or the next system worth shipping. Fastest way to reach me:",
    },
  },
};
