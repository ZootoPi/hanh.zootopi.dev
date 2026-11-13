import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  // Pages removed in the redesign keep working for old links.
  redirects: {
    "/education": "/resume",
    "/side-projects": "/",
  },
});
