import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    ssr: {
      // https://github.com/natemoo-re/astro-icon#setup
      external: ["svgo"],
    },
  },
});