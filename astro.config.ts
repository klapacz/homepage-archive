import { defineConfig } from 'astro/config';
import WindiCSS from 'vite-plugin-windicss'

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      // https://github.com/natemoo-re/astro-icon#setup
      external: ["svgo"],
    },
    plugins: [WindiCSS()],
  },
});
