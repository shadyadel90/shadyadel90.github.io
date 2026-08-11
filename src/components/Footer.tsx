import { site } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Built with React · Deployed on GitHub Pages</p>
      </div>
    </footer>
  );
}
