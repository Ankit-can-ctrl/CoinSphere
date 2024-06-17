/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Heading: ["Inter Tight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
