import { useRole } from "../context/RoleContext";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  const { profile } = useRole();

  return (
    <Section id="skills" index="03" label="Technical Skills" title="What I work with">
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {profile.skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 60}>
            <div>
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line px-3 py-1.5 text-sm text-text/90 transition-colors hover:border-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
