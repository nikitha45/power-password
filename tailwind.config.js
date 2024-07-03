/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "540px",
      minMd: "632px",
      md: "768px",
      tablet: "990px",
      lg: "1024px",
      xl: "1280px",
      desktop: "1400px",
    },
    extend: {},
  },
  plugins: [],
};
