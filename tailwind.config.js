/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slidcolor: '#F9F9FF',
        logo: '#9873FF',
        logo2: '#5d6fe3',
        col: '#7E90FE',
        btnhover: '#5334a9',
        btnmcolor: '#9873FF',
        subtitle: '#757575',

      },
    },
  },
  plugins: [],
}

