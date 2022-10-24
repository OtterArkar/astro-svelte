import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind(),
    image(),
    sanity({
      projectId: "h1ol39z4",
      dataset: "production",
      apiVersion: "2021-03-25",
      useCdn: true,
    }),
  ],

  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
