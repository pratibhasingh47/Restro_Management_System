/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",  // Adjust the paths to match your project structure
	],
	theme: {
		extend: {
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
			},
			colors: {
				primary: '#001D3D',
				secondary: '#003566',
				accent1: '#FFC300',
				accent2: '#FFD60A',
				dark: '#000814',
			},
		},
	},
	plugins: [],
};