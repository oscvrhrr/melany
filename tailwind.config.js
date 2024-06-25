/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui' ],
        'serif': ['baskervville', 'Georgia' ],
        'mono': ['Bad Script', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      },
      backgroundImage: {
        'background-hero': "url('./assets/background-img.jpg')",
        'edited-hero': "url('./assets/edited.jpeg')"
      }
    },
  },
  plugins: [],
}

