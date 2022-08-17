/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./apps/quiz-app/src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
