import { useEffect, useState } from "react";
import { site } from "../data/portfolio";
import { useRole } from "../context/RoleContext";
import { asset } from "../lib/asset";
import { RoleSwitcher } from "./RoleSwitcher";
import { ArrowDown, ArrowUpRight } from "./icons";

const links = [
  { label: "Engineering", href: "#engineering" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { profile } = useRole();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    document.body.style.overflow = "";
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/75 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 md:px-10">
          <a
            href="#top"
            className="font-display shrink-0 text-sm font-semibold tracking-tight"
            onClick={closeMenu}
          >
            {site.name}
            <span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
            <RoleSwitcher compact />
            {site.githubUrl !== "" && (
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-text"
              >
                GitHub
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
            <a
              href={asset(profile.cvFile)}
              download={profile.cvFile}
              className="inline-flex items-center gap-2 rounded-md bg-text px-4 py-1.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              Download CV
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={asset(profile.cvFile)}
              download={profile.cvFile}
              className="inline-flex items-center gap-1.5 rounded-md bg-text px-3.5 py-1.5 text-xs font-medium text-bg"
            >
              CV
              <ArrowDown className="h-3 w-3" />
            </a>
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`h-px w-5 bg-text transition-transform duration-300 ${
                  isOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-text transition-transform duration-300 ${
                  isOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-bg transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 pt-8 pb-12">
          <div>
            <RoleSwitcher className="mb-8 w-full max-w-md [&>button]:flex-1" />
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="font-display border-b border-line py-4 text-3xl font-semibold tracking-tight"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {site.githubUrl !== "" && (
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted"
              >
                GitHub
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              {profile.role} · {site.location}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
