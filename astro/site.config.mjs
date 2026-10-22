// Steering config for remote-astro-theme: builds docs/content with the theme below.
import { sidebar } from "./docs-repos.mjs";

export default {
  //theme: "mindovermachine-dev/mom-doc-theme@main",
  theme: "mindovermachine-dev/mom-doc-theme@main",
  // Raw Astro config, merged over the theme's astro.config.mjs.
  astro: {
    site: "https://docs.mindovermachine.dev",
    base: ".",
    server: { host: true },
  },
  title: "Mind over Machine Dev Docs",
  // null (not undefined) so the theme's default "/da/" redirect is overridden.
  rootRedirect: null,
  defaultLocale: "root",
  locales: {
    root: { label: "English", lang: "en" },
  },
  social: [
    {
      icon: "github",
      label: "GitHub",
      href: "https://github.com/mindovermachine-dev",
    },
  ],
  sidebar,
};
