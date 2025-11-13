// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,ts,vue,md,mdx}','./public/index.html',],
  
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#003366',
          dark: '#00CCFF',
        },
        secondary: {
          light: '#F0F0F0',
          dark: '#111111',
        },
        accent: {
          light: '#00CCFF',
          dark: '#FF6600',
        },
        text: {
          light: '#333333',
          dark: '#CCCCCC',
        },
      },
    },
  },
    plugins: [],
};