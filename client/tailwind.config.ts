import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				circular_pro: 'Circular Pro',
				cabin: 'Cabin',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			screens: {
				mobile: '640px',
				tablet: '768px',
				smallLaptop: '1024px',
				desktop: '1280px',
				bigLaptop: '1440px',
				television: '1536px',
			},
			colors: {
				'bell-light-blue': {
					300: '#0172CB',
					400: '#F5F7FF',
				},
				'bell-green': {
					200: '#A3E7F0',
					500: '#1B92A2',
					600: '#289F8F',
					700: '#2D7738',
					800: '#177985',
				},
				'linkedin-blue': {
					500: '#0073B1',
					600: '#046396',
				},
				'bell-ink-blue': {
					500: '#697D95',
				},
				'bell-gray': {
					100: '#E7ECF1',
					200: '#BAC7D5',
					300: '#D0D5DD',
					400: '#E8EDF1',
					500: '#667085',
				},
				'bell-light-green': {
					100: '#A7FFCA',
					200: '#EBF4EC',
					220: '#DAF3DD',
					250: '#D7EAD9',
					300: '#2DD36F',
				},
				'bell-black': {
					200: '#101828',
					300: '#252A31',
					400: '#212529',
					500: '#112950',
				},
				'bell-purple': {
					300: '#8338EC',
					500: '#2B0E61',
				},
			},
			fontSize: {
				8: ['0.5rem', '0.688rem'],
				10: ['0.625rem', '0.938rem'],
				12: ['0.75rem', '1rem'],
				13: ['0.813rem', '1.125rem'],
				14: ['0.875rem', '1.118rem'],
				16: ['1rem', '1.313rem'],
				18: ['1.125rem', '2rem'],
				20: ['1.25rem', '1.688rem'],
				24: ['1.5rem', '2.063rem'],
				32: ['2rem', '3rem'],
				40: ['2.5rem', '3.375rem'],
				64: ['4rem', '4.375rem'],
			},
		},
	},
	plugins: [],
};
export default config;
