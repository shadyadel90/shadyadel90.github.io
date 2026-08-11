/* ============================================================================
   PORTFOLIO CONTENT — the only file you need to edit.

   Two professional profiles share one site. Edit the matching profile under
   `profiles.ios` or `profiles.ai`. Shared contact details live in `site`.

   Common tasks:
   • Switch-tab copy     → edit the profile under `profiles`.
   • New project         → add an entry to that profile's `projects` array
                           (top of the array = first).
   • Add screenshots     → drop images into public/screenshots/ and list them
                           in the project's `screenshots` array.
   • New CV              → replace the matching PDF in public/ (keep the
                           filename, or update `cvFile` on that profile).

   Empty fields ("" or []) are hidden automatically.
   ========================================================================== */

export type RoleId = "ios" | "ai";

export interface Project {
  name: string;
  /** Small badge next to the project name, e.g. "Production app". */
  type: string;
  /** Who the product was built for / where it was built. */
  client: string;
  timeframe: string;
  /** What the product does. Leave "" to hide. */
  description: string;
  /** Your role and work on the project — rendered as bullets. */
  contribution: string[];
  technologies: string[];
  /** e.g. "MVVM-C", "VIPER". Leave "" to hide the row. */
  architecture: string;
  /** Paths under public/, e.g. "screenshots/app-1.png". Empty = placeholder. */
  screenshots: string[];
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
  projectsIntro: string;
  projects: Project[];
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
    projectsIntro:
      "Selected work from the production iOS applications I develop and manage at Innovitics — plus where it started.",
    projects: [
      {
        name: "TAQA EV",
        type: "Production app",
        client: "Built at Innovitics",
        timeframe: "Dec 2024 — Present",
        description: "",
        contribution: [
          "One of the 3+ production iOS applications I developed and managed at Innovitics.",
          "Responsible for successful deployment and ongoing maintenance.",
        ],
        technologies: [],
        architecture: "",
        screenshots: [],
        appStoreUrl: "",
        githubUrl: "",
        websiteUrl: "",
      },
      {
        name: "Mahmoud ElFar",
        type: "Production app",
        client: "Built at Innovitics",
        timeframe: "Dec 2024 — Present",
        description: "",
        contribution: [
          "One of the 3+ production iOS applications I developed and managed at Innovitics.",
          "Responsible for successful deployment and ongoing maintenance.",
        ],
        technologies: [],
        architecture: "",
        screenshots: [],
        appStoreUrl: "",
        githubUrl: "",
        websiteUrl: "",
      },
      {
        name: "E-commerce Platform",
        type: "University project",
        client: "BSc Computer Science · Kafr El-Shiekh University",
        timeframe: "2019",
        description:
          "E-commerce graduation project for my BSc in Computer Science — awarded an A+ score.",
        contribution: [
          "Designed and built as the graduation project for my computer science degree.",
          "Graded A+.",
        ],
        technologies: [],
        architecture: "",
        screenshots: [],
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
          "Developed and managed 3+ production iOS applications — including Mahmoud ElFar and TAQA EV — ensuring successful deployment and ongoing maintenance.",
          "Refactored a legacy codebase into a modular architecture and reduced codebase size by ~10%.",
          "Reduced app launch time by ~800 ms.",
          "Lowered network/server usage by up to ~80%.",
          "Integrated a multi-model AI pipeline (Claude, Opus, Codex), reducing costs by up to ~80% through efficiency.",
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
        "At Innovitics I refactored a legacy codebase into a modular architecture (~10% smaller), cut app launch time by ~800 ms, lowered network and server usage by up to ~80%, and integrated a multi-model AI pipeline — Claude, Opus, and Codex — that reduced costs by up to ~80%.",
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
    projectsIntro:
      "Selected production work where I ship customer-facing software and integrate AI into delivery — plus where it started.",
    projects: [
      {
        name: "TAQA EV",
        type: "Production app",
        client: "Built at Innovitics",
        timeframe: "Dec 2024 — Present",
        description: "",
        contribution: [
          "One of the 3+ production applications I developed and managed at Innovitics.",
          "Responsible for successful deployment and ongoing maintenance.",
        ],
        technologies: [],
        architecture: "",
        screenshots: [],
        appStoreUrl: "",
        githubUrl: "",
        websiteUrl: "",
      },
      {
        name: "Mahmoud ElFar",
        type: "Production app",
        client: "Built at Innovitics",
        timeframe: "Dec 2024 — Present",
        description: "",
        contribution: [
          "One of the 3+ production applications I developed and managed at Innovitics.",
          "Responsible for successful deployment and ongoing maintenance.",
        ],
        technologies: [],
        architecture: "",
        screenshots: [],
        appStoreUrl: "",
        githubUrl: "",
        websiteUrl: "",
      },
      {
        name: "E-commerce Platform",
        type: "University project",
        client: "BSc Computer Science · Kafr El-Shiekh University",
        timeframe: "2019",
        description:
          "E-commerce graduation project for my BSc in Computer Science — awarded an A+ score.",
        contribution: [
          "Designed and built as the graduation project for my computer science degree.",
          "Graded A+.",
        ],
        technologies: [],
        architecture: "",
        screenshots: [],
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
        // AI tab leads with the AI pipeline win, then product/performance work.
        highlights: [
          "Integrated a multi-model AI pipeline (Claude, Opus, Codex), reducing costs by up to ~80% through efficiency.",
          "Developed and managed 3+ production iOS applications — including Mahmoud ElFar and TAQA EV — ensuring successful deployment and ongoing maintenance.",
          "Refactored a legacy codebase into a modular architecture and reduced codebase size by ~10%.",
          "Reduced app launch time by ~800 ms.",
          "Lowered network/server usage by up to ~80%.",
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
        "At Innovitics I integrated a multi-model AI pipeline — Claude, Opus, and Codex — that reduced costs by up to ~80%, while refactoring a legacy codebase into a modular architecture (~10% smaller), cutting launch time by ~800 ms, and lowering network and server usage by up to ~80%.",
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
