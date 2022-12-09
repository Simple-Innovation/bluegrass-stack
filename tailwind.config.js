/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        azure: {
          100: "#CCE8F7",
          200: "#99D0EF",
          300: "#66B9E7",
          400: "#33A1DF",
          500: "#008AD7",
          600: "#006EAC",
          700: "#005381",
          800: "#003756",
          900: "#001C2B",
        },
      },
    },
  },
  plugins: [],
};
