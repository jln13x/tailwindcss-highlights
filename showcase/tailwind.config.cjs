/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.astro"],
  safelist: [
    {
      pattern: /highlight-variant-*/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-highlights")],
};
