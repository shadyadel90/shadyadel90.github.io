import {
  type EngineeringWork,
  type EngineeringVisual,
  type ProductionApp,
} from "../data/portfolio";
import { useRole } from "../context/RoleContext";
import { asset } from "../lib/asset";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { ArrowUpRight } from "./icons";

function hasVisual(visual: EngineeringVisual | undefined): boolean {
  if (!visual || visual.type === "none") return false;
  if (visual.type === "metrics") return visual.items.length > 0;
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
      className="grid overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
      role="list"
      aria-label="Engineering impact metrics"
    >
      {items.map((item) => (
        <div
          key={item.label}
          role="listitem"
          className="bg-surface/80 px-6 py-8 md:px-7 md:py-10"
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
    <div className="flex flex-col gap-5 sm:flex-row sm:items-stretch">
      <div
        className="flex-1 rounded-2xl border border-line bg-surface/60 px-5 py-8 md:px-7 md:py-10"
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
        <div className="flex min-w-[11rem] flex-col justify-center rounded-2xl border border-line px-6 py-6 sm:max-w-[14rem] md:px-7">
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

function WorkVisual({ visual }: { visual: EngineeringVisual }) {
  switch (visual.type) {
    case "metrics":
      return <MetricsPanel items={visual.items} />;
    case "workflow":
      return <WorkflowPanel steps={visual.steps} metric={visual.metric} />;
    case "none":
      return null;
  }
}

function ProductionAppCard({ app }: { app: ProductionApp }) {
  const shots = app.screenshots;

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-surface/40">
      <div className="flex items-start gap-4 border-b border-line px-5 py-5 md:px-6">
        {app.icon !== "" && (
          <img
            src={asset(app.icon)}
            alt=""
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-[0.9rem] border border-line object-cover"
          />
        )}
        <div className="min-w-0 flex-1">
          {app.label !== "" && (
            <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {app.label}
            </p>
          )}
          <h4 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
            {app.name}
          </h4>
          {app.note !== "" && (
            <p className="mt-1.5 text-sm text-muted">{app.note}</p>
          )}
        </div>
      </div>

      {shots.length > 0 && (
        <div className="strip flex snap-x gap-3 overflow-x-auto bg-bg/40 p-4 md:gap-4 md:p-5">
          {shots.map((src, i) => (
            <img
              key={src}
              src={asset(src)}
              alt={`${app.name} — screenshot ${i + 1}`}
              loading="lazy"
              className="h-[280px] w-auto shrink-0 snap-start rounded-xl border border-line bg-surface object-cover sm:h-[320px] md:h-[360px]"
            />
          ))}
        </div>
      )}

      {app.appStoreUrl !== "" && (
        <div className="border-t border-line px-5 py-4 md:px-6">
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-text underline decoration-line underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
          >
            View on App Store
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      )}
    </article>
  );
}

function ProductionAppsBlock({
  intro,
  apps,
}: {
  intro: string;
  apps: ProductionApp[];
}) {
  if (apps.length === 0) return null;

  return (
    <div className="border-t border-line py-16 first:border-t-0 first:pt-0 md:py-20">
      <Reveal>
        <div className="mb-8 md:mb-10">
          <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Production Apps
          </h3>
          {intro !== "" && (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              {intro}
            </p>
          )}
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {apps.map((app, i) => (
          <Reveal key={app.name} delay={i * 80}>
            <ProductionAppCard app={app} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function OrgLink({ name, url }: { name: string; url: string }) {
  if (url === "") return <>{name}</>;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-1 transition-colors hover:text-text"
    >
      {name}
      <ArrowUpRight className="h-3 w-3 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
    </a>
  );
}

function WorkCard({ work }: { work: EngineeringWork }) {
  const showVisual = hasVisual(work.visual);
  const isMetrics = work.visual?.type === "metrics";
  const hasMeta = work.organization !== "" || work.timeframe !== "";

  return (
    <article className="border-t border-line py-16 md:py-20">
      <Reveal>
        {work.type !== "" && (
          <div className="mb-5">
            <span className="rounded-md border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {work.type}
            </span>
          </div>
        )}

        <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
          {work.name}
        </h3>

        {hasMeta && (
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {work.organization !== "" && (
              <OrgLink name={work.organization} url={work.organizationUrl} />
            )}
            {work.organization !== "" && work.timeframe !== "" && " · "}
            {work.timeframe}
          </p>
        )}

        {work.description !== "" && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {work.description}
          </p>
        )}

        {work.contribution.length > 0 && (
          <ul className="mt-6 flex max-w-2xl flex-col gap-2.5">
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

        {showVisual && work.visual && (
          <div className={isMetrics ? "mt-10" : "mt-10 max-w-3xl"}>
            <WorkVisual visual={work.visual} />
          </div>
        )}
      </Reveal>
    </article>
  );
}

export function Projects() {
  const { profile } = useRole();

  return (
    <Section id="engineering" index="01" label="Engineering" title="Engineering">
      {profile.engineeringIntro !== "" && (
        <Reveal>
          <p className="-mt-6 mb-8 max-w-2xl leading-relaxed text-muted md:-mt-8 md:mb-4">
            {profile.engineeringIntro}
          </p>
        </Reveal>
      )}

      <div>
        <ProductionAppsBlock
          intro={profile.productionAppsIntro}
          apps={profile.productionApps}
        />
        {profile.engineeringWork.map((work) => (
          <WorkCard key={work.name} work={work} />
        ))}
      </div>
    </Section>
  );
}
