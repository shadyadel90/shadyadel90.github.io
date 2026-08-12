import { site } from "../data/portfolio";
import { useRole } from "../context/RoleContext";
import { asset } from "../lib/asset";
import { Reveal } from "./Reveal";
import { RoleSwitcher } from "./RoleSwitcher";
import { ArrowDown } from "./icons";

export function Hero() {
  const { profile } = useRole();

  return (
    <section
      id="top"
      className="relative mx-auto max-w-6xl px-6 pt-36 pb-24 md:px-10 md:pt-48 md:pb-32"
    >
      <Reveal>
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            {profile.role} · {site.location}
          </p>
          <RoleSwitcher />
        </div>
      </Reveal>

      <Reveal delay={70}>
        <h1 className="font-display max-w-5xl overflow-visible pb-[0.15em] text-[clamp(3.2rem,11vw,7.5rem)] leading-[1.15] font-semibold tracking-tight">
          {profile.hero.name}
        </h1>
      </Reveal>

      <Reveal delay={140}>
        <p className="font-display mt-5 inline-block max-w-3xl overflow-visible py-[0.2em] text-[clamp(1.35rem,3.4vw,2.35rem)] leading-[1.5] font-semibold tracking-tight text-text">
          {profile.hero.headline}
        </p>
      </Reveal>

      <Reveal delay={210}>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {profile.hero.sub}
        </p>
      </Reveal>

      <Reveal delay={280}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#experience"
            className="rounded-md bg-text px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            Experience
          </a>
          <a
            href={asset(profile.cvFile)}
            download={profile.cvFile}
            className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 text-sm font-medium text-text transition-colors hover:border-muted"
          >
            Download CV
            <ArrowDown className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
