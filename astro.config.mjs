import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://leo.works",
  integrations: [mdx(), sitemap(), react()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
  output: "server",
  adapter: cloudflare(),
  // FIXME: https://github.com/natemoo-re/astro-icon/issues/35
  vite: {
    resolve: {
      alias: {
        svgo: import.meta.env.PROD ? "svgo/dist/svgo.browser.js" : "svgo",
      },
    },
  },
});
