/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
        cousine: ["cousine"],
      },
      fontSize: {
        "2xs": "10px",
      },
      colors: {
        "theme-primary": "#E11D48",
        "afad-primary": "#1D62E1",
        "text-primary": "#475569",
        "medic-primary": "#9AA22E",
      },
      borderRadius: {
        "1.5xl": "10px",
      },
    },
  },
  plugins: [],
};
