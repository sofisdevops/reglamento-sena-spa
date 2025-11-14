/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        senaGreen: "#007A33",
        senaOrange: "#F39200",
      },
    },
  },
  plugins: [],
};
