/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        weborange: '#b94532',
        webdarkorange: '#913627',
        webblue: '#2d3f53',

      }
    },
  },
  plugins: [],
}
