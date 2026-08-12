import { site } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl px-6 py-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted md:px-10">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
