/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-desktop': "url('./assets/desktop/bg-pattern-header.svg')",
        'header-mobile': "url('./assets/mobile/bg-pattern-header.svg')",
        'search': "url('./assets/desktop/icon-search.svg')",
        'location': "url('./assets/desktop/icon-location.svg')",
      },
      content: {
        'moon': "url('./assets/desktop/icon-moon.svg')",
        'sun': "url('./assets/desktop/icon-sun.svg')"
      },
      screens: {
        'xs': '475px'
      }
    },
  },
  plugins: [],
}
