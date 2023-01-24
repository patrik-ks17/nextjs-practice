/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,js,tsx}",
    "./app/**/**/*.{js,ts,js,tsx}",
    "./app/**/**/**/*.{js,ts,js,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
