/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Alata: ["'Alata'", "sans-serif"],
        Philosopher: ["'Philosopher'", "sans-serif"],
        Kosugi: ["'Kosugi Maru'", "sans-serif"],
        Jura: ["'Jura'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
