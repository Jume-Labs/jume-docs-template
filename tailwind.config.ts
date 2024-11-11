import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['dark', 'light']
	},

	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('daisyui')]
} satisfies Config;
