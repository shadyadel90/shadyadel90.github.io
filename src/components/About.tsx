import { useRole } from "../context/RoleContext";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  const { profile } = useRole();

  return (
    <Section id="about" index="04" label="About" title="Beyond Engineering">
      <div className="grid gap-14 md:grid-cols-[1.2fr_0.8fr] md:gap-20">
        <Reveal>
          <div className="flex flex-col gap-6">
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-lg leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="flex flex-col">
            {profile.about.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1 border-t border-line py-5 first:border-t-0 first:pt-0"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  {fact.label}
                </dt>
                <dd className="ml-0 text-sm leading-relaxed text-text/90">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
