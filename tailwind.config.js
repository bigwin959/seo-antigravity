/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#FFD700', // Gold
                    dark: '#B8860B',
                    bg: '#1a1a1a',
                    surface: '#2a2a2a',
                    text: '#f3f4f6',
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
