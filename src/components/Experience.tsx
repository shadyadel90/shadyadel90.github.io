import { useRole } from "../context/RoleContext";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  const { profile } = useRole();

  return (
    <Section id="experience" index="02" label="Experience" title="Where I've worked">
      <div className="flex flex-col">
        {profile.experience.map((entry, i) => (
          <Reveal key={`${entry.organization}-${entry.role}`} delay={i * 60}>
            <article className="grid gap-4 border-t border-line py-10 first:border-t-0 first:pt-0 md:grid-cols-[220px_1fr] md:gap-10 md:py-12">
              <div>
                <p className="font-mono text-xs tracking-wide text-muted">{entry.period}</p>
                {entry.type !== "" && (
                  <p className="mt-3">
                    <span className="rounded-md border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {entry.type}
                    </span>
                  </p>
                )}
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                  {entry.role}
                  <span className="text-muted"> · {entry.organization}</span>
                </h3>
                {entry.location !== "" && (
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {entry.location}
                  </p>
                )}
                {entry.highlights.length > 0 && (
                  <ul className="mt-6 flex max-w-2xl flex-col gap-2.5">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                        <span className="text-accent" aria-hidden="true">
                          —
                        </span>
                        <span className="text-text/90">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
