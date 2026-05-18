// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || "https://jashanbhullar.github.io",
  base: process.env.ASTRO_BASE || "/osgeouk.jsonsingh.com/",
  integrations: [sitemap()],
  build: {
    format: "file",
  },
});
