/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      white: '#FFFFFF',

      'gray-100': '#FAFAFA',
      'gray-200': '#F3F2F2',
      'gray-300': '#EDEDED',
      'gray-400': '#E6E5E5',
      'gray-500': '#D7D5D5',

      'brown-300': '#8D8686',
      'brown-500': '#574F4D',
      'brown-700': '#403937',

      'yellow-300': '#F1E9C9',
      'yellow-500': '#DBAC2C',
      'yellow-700': '#C47F17',

      'purple-300': '#EBE5F9',
      'purple-500': '#8047F8',
      'purple-700': '#4B2995',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      baloo: ['"Baloo 2"'],
    },
    extend: {
      backgroundImage: {
        'gradient-background': "url('./src/assets/bg-gradient.png')",
      },
    },
  },
  plugins: [],
}
