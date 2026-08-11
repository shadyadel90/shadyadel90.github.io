import { site } from "../data/portfolio";
import { useRole } from "../context/RoleContext";
import { asset } from "../lib/asset";
import { Reveal } from "./Reveal";
import { ArrowDown, ArrowUpRight } from "./icons";

export function Contact() {
  const { profile } = useRole();

  const secondaryLinks = [
    { label: "LinkedIn", href: site.linkedinUrl, external: true },
    { label: "GitHub", href: site.githubUrl, external: true },
    { label: site.phone, href: site.phoneHref, external: false },
  ].filter((link) => link.href !== "");

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-xs text-accent">05</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Contact
            </span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            {profile.contact.heading}
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">{profile.contact.blurb}</p>
        </Reveal>

        <Reveal delay={240}>
          <a
            href={`mailto:${site.email}`}
            className="group mt-10 inline-flex items-center gap-3 text-xl font-medium tracking-tight underline decoration-line underline-offset-8 transition-colors hover:text-accent hover:decoration-accent sm:text-3xl md:text-4xl"
          >
            <span className="break-all">{site.email}</span>
            <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:h-7 md:w-7" />
          </a>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            {secondaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text"
              >
                {link.label}
                {link.external && <ArrowUpRight className="h-3 w-3" />}
              </a>
            ))}
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {site.location}
            </span>
            <a
              href={asset(profile.cvFile)}
              download={profile.cvFile}
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-muted"
            >
              Download CV
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
