import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// `base` is set by the GitHub Actions workflow so the site works both at
// https://<user>.github.io/<repo>/ and at a custom domain / user site.
// Locally it defaults to "/".
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react(), tailwindcss()],
});
