import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	darkMode: 'class',
	extract: {
		include: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
		exclude: ['node_modules', '.git'],
    },
	theme: {
		extend: {},
	},
	plugins: [],
})
