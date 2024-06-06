/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black-background': '#10100B',
        'black-principal': '#4A4A4A',
        'yellow-principal': '#E0E41C',
      }
    },
  },
  plugins: [],
}

