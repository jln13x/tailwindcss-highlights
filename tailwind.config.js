/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {},
  plugins: [require("./dist/index")],
};
