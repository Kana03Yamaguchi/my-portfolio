/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Inter Variable"',
          '"Helvetica Neue"',
          '"Segoe UI"',
          '"Hiragino Kaku Gothic ProN"',
          "YuGothic",
          "Meiryo",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
