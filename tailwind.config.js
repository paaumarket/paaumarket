/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./root/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      sans: ["Mulish Variable", "sans-serif"],
    },
    extend: {
      colors: {
        jade: {
          50: "#81FFC0",
          100: "#6CFFB6",
          200: "#43FFA1",
          300: "#1BFF8D",
          400: "#00F178",
          500: "#00C864",
          600: "#009048",
          700: "#00582C",
          800: "#002010",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
