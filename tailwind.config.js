module.exports = {
  purge: [
    'index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Quicksand', 'ui-serif', 'Georgia']
      },
      colors: {
        nature: {
          '1': '#C8C6C6',
          '2': '#D4ECDD',
          '3': '#112031',
          '4': '#C1CFC0'
        }
      },
      spacing: {
          custom: '2px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
