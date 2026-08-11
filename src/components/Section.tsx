import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  index: string;
  label: string;
  title: string;
  children: ReactNode;
}

/** Shared section shell: hairline separator, numbered mono label, big title. */
export function Section({ id, index, label, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="mb-12 md:mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-xs text-accent">{index}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                {label}
              </span>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              {title}
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
