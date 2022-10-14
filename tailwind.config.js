/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./njk/**/*.njk'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
