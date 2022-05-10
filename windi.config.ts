import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	darkMode: 'class',
	// content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	extract: {
		include: ['./src/**/*.{vue,html,jsx,tsx,astro}'],
		exclude: ['node_modules', '.git'],
    },
	// theme: {
	// 	extend: {},
	// },
	// plugins: [],
})
