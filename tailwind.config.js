/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neon-green': '#39FF14',
                'neon-green-dim': 'rgba(57, 255, 20, 0.4)',
                'deep-black': '#050505',
                'black-secondary': '#0f0f0f',
                'glass-bg': 'rgba(15, 15, 15, 0.6)',
                'glass-border': 'rgba(57, 255, 20, 0.2)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
