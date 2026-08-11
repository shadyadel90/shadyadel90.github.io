import { type Project } from "../data/portfolio";
import { useRole } from "../context/RoleContext";
import { asset } from "../lib/asset";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { ArrowUpRight } from "./icons";

function ProjectLinks({ project }: { project: Project }) {
  const links = [
    { label: "App Store", url: project.appStoreUrl },
    { label: "Live", url: project.websiteUrl },
    { label: "GitHub", url: project.githubUrl },
  ].filter((link) => link.url !== "");

  if (links.length === 0) return null;

  return (
    <div className="mt-8 flex flex-wrap gap-6">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
        >
          {link.label}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ))}
    </div>
  );
}

function Screenshots({ project }: { project: Project }) {
  if (project.screenshots.length === 0) {
    return (
      <div className="flex justify-center md:justify-end">
        <div className="w-full max-w-[240px]">
          <div className="rounded-[2rem] border border-line p-2">
            <div className="flex aspect-[9/19] w-full flex-col items-center justify-center gap-3 rounded-[1.55rem] bg-surface">
              <span className="font-display text-4xl font-semibold tracking-tight text-muted/35">
                {project.name
                  .split(" ")
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join("")}
              </span>
              <span className="px-4 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted/55">
                Add screenshots
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="strip -mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:justify-end md:px-0">
      {project.screenshots.map((src, i) => (
        <img
          key={src}
          src={asset(src)}
          alt={`${project.name} — screenshot ${i + 1}`}
          loading="lazy"
          className="h-[400px] w-auto shrink-0 snap-start rounded-[1.6rem] border border-line bg-surface object-cover md:h-[440px]"
        />
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  const flip = index % 2 === 1;

  return (
    <article className="border-t border-line py-16 first:border-t-0 first:pt-0 md:py-20">
      <Reveal>
        <div className="grid items-start gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div className={flip ? "md:order-2" : ""}>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-accent">{number}</span>
              {project.type !== "" && (
                <span className="rounded-md border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {project.type}
                </span>
              )}
            </div>

            <h3 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              {project.name}
            </h3>

            {(project.client !== "" || project.timeframe !== "") && (
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {[project.client, project.timeframe].filter(Boolean).join(" · ")}
              </p>
            )}

            {project.description !== "" && (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {project.description}
              </p>
            )}

            {project.contribution.length > 0 && (
              <div className="mt-8">
                <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  My contribution
                </h4>
                <ul className="flex max-w-xl flex-col gap-2.5">
                  {project.contribution.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="text-accent" aria-hidden="true">
                        —
                      </span>
                      <span className="text-text/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.architecture !== "" && (
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Architecture <span className="text-text">— {project.architecture}</span>
              </p>
            )}

            {project.technologies.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-line px-3 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <ProjectLinks project={project} />
          </div>

          <div className={flip ? "md:order-1" : ""}>
            <Screenshots project={project} />
          </div>
        </div>
      </Reveal>
    </article>
  );
}

export function Projects() {
  const { profile } = useRole();

  return (
    <Section
      id="projects"
      index="01"
      label="Selected Projects"
      title="Shipped applications"
    >
      <Reveal>
        <p className="-mt-6 mb-14 max-w-2xl leading-relaxed text-muted md:-mt-8">
          {profile.projectsIntro}
        </p>
      </Reveal>
      <div>
        {profile.projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
