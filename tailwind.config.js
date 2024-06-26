/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
      "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        Google1:["Black Ops One"],
      },
      backgroundImage: {
        'white-to-transparent': 'linear-gradient(to top, white, transparent)',
      },
    },
  },
  plugins: [],
}

