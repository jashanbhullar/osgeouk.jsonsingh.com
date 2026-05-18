// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkPrefixBase from "./src/utils/remark-prefix-base.mjs";

const base = process.env.ASTRO_BASE || "/osgeouk.jsonsingh.com/";

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || "https://jashanbhullar.github.io",
  base,
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [[remarkPrefixBase, { base }]],
  },
  build: {
    format: "file",
  },
});
