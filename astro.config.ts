import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      // https://github.com/natemoo-re/astro-icon#setup
      external: ["svgo"],
    },
  },
  integrations: [tailwind({}), compress()],
  experimental: { integrations: true },
});
