/**
 * Resolve a file in `public/` against the deployment base URL, so paths work
 * both locally ("/") and on GitHub Pages ("/<repo-name>/").
 */
export function asset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\/+/, "");
}
