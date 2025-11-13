/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                //light theme colors
                primary: '#003366',
                secondary: '#F0F0F0',
                accent: '#00CCFF',
                text: '#333333',
                
                //dark theme colors
                'dark-primary': '#00CCFF',
                'dark-secondary': '#111111',
                'dark-accent': '#FF6600',
                'dark-text': '#CCCCCC',
            },
        },
    },
    plugins: [],
};
