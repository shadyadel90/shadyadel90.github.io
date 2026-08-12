import {
  type EngineeringWork,
  type EngineeringVisual,
} from "../data/portfolio";
import { useRole } from "../context/RoleContext";
import { asset } from "../lib/asset";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { ArrowUpRight } from "./icons";

function hasVisual(visual: EngineeringVisual | undefined): boolean {
  if (!visual || visual.type === "none") return false;
  if (visual.type === "screenshots") return visual.images.length > 0;
  if (visual.type === "metrics") return visual.items.length > 0;
  if (visual.type === "apps") return visual.items.length > 0;
  if (visual.type === "workflow") return visual.steps.length > 0;
  return false;
}

function WorkLinks({ work }: { work: EngineeringWork }) {
  const links = [
    { label: "App Store", url: work.appStoreUrl },
    { label: "Live", url: work.websiteUrl },
    { label: "GitHub", url: work.githubUrl },
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

function MetricsPanel({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-surface/60"
      role="list"
      aria-label="Engineering impact metrics"
    >
      {items.map((item, i) => (
        <div
          key={item.label}
          role="listitem"
          className={`px-6 py-7 md:px-8 md:py-8 ${
            i > 0 ? "border-t border-line" : ""
          }`}
        >
          <p className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {item.value}
          </p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function WorkflowPanel({
  steps,
  metric,
}: {
  steps: string[];
  metric?: { value: string; label: string };
}) {
  return (
    <div className="flex flex-col gap-5">
      <div
        className="rounded-2xl border border-line bg-surface/60 px-5 py-8 md:px-7 md:py-10"
        aria-label={`Workflow: ${steps.join(" to ")}`}
      >
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          Engineering workflow
        </p>
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-2 md:gap-3">
              {i > 0 && (
                <span
                  className="font-mono text-sm text-muted/60"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
              <span className="rounded-md border border-line bg-bg/50 px-3 py-2 font-mono text-xs tracking-wide text-text md:text-sm">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {metric && (
        <div className="rounded-2xl border border-line px-6 py-6 md:px-7">
          <p className="font-display text-2xl font-semibold tracking-tight text-text md:text-3xl">
            {metric.value}
          </p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {metric.label}
          </p>
        </div>
      )}
    </div>
  );
}

function AppsPanel({
  items,
}: {
  items: { name: string; detail?: string }[];
}) {
  return (
    <div className="flex flex-col gap-3" aria-label="Production applications">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        In production
      </p>
      <div className="flex flex-col gap-3">
        {items.map((app) => (
          <div
            key={app.name}
            className="rounded-xl border border-line bg-surface/60 px-5 py-4"
          >
            <p className="font-display text-lg font-semibold tracking-tight">
              {app.name}
            </p>
            {app.detail && (
              <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                {app.detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenshotsPanel({
  name,
  images,
}: {
  name: string;
  images: string[];
}) {
  return (
    <div className="strip -mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:justify-end md:px-0">
      {images.map((src, i) => (
        <img
          key={src}
          src={asset(src)}
          alt={`${name} — screenshot ${i + 1}`}
          loading="lazy"
          className="h-[400px] w-auto shrink-0 snap-start rounded-[1.6rem] border border-line bg-surface object-cover md:h-[440px]"
        />
      ))}
    </div>
  );
}

function WorkVisual({
  name,
  visual,
}: {
  name: string;
  visual: EngineeringVisual;
}) {
  switch (visual.type) {
    case "metrics":
      return <MetricsPanel items={visual.items} />;
    case "workflow":
      return <WorkflowPanel steps={visual.steps} metric={visual.metric} />;
    case "apps":
      return <AppsPanel items={visual.items} />;
    case "screenshots":
      return <ScreenshotsPanel name={name} images={visual.images} />;
    case "none":
      return null;
  }
}

function WorkCard({ work, index }: { work: EngineeringWork; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  const flip = index % 2 === 1;
  const showVisual = hasVisual(work.visual);
  const meta = [work.organization, work.timeframe].filter(Boolean).join(" · ");

  return (
    <article className="border-t border-line py-16 first:border-t-0 first:pt-0 md:py-20">
      <Reveal>
        <div
          className={
            showVisual
              ? "grid items-start gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16"
              : "max-w-3xl"
          }
        >
          <div className={showVisual && flip ? "md:order-2" : ""}>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-accent">{number}</span>
              {work.type !== "" && (
                <span className="rounded-md border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {work.type}
                </span>
              )}
            </div>

            <h3 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              {work.name}
            </h3>

            {meta !== "" && (
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {meta}
              </p>
            )}

            {work.description !== "" && (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {work.description}
              </p>
            )}

            {work.contribution.length > 0 && (
              <div className="mt-8">
                <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  Highlights
                </h4>
                <ul className="flex max-w-xl flex-col gap-2.5">
                  {work.contribution.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="text-accent" aria-hidden="true">
                        —
                      </span>
                      <span className="text-text/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {work.technologies.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {work.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-line px-3 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <WorkLinks work={work} />
          </div>

          {showVisual && work.visual && (
            <div className={flip ? "md:order-1" : ""}>
              <WorkVisual name={work.name} visual={work.visual} />
            </div>
          )}
        </div>
      </Reveal>
    </article>
  );
}

export function Projects() {
  const { profile } = useRole();

  return (
    <Section
      id="work"
      index="01"
      label="Experience"
      title="Engineering work in production"
    >
      <Reveal>
        <p className="-mt-6 mb-14 max-w-2xl leading-relaxed text-muted md:-mt-8">
          {profile.engineeringIntro}
        </p>
      </Reveal>
      <div>
        {profile.engineeringWork.map((work, i) => (
          <WorkCard key={work.name} work={work} index={i} />
        ))}
      </div>
    </Section>
  );
}
