/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    colors: {
      ...colors,
      'app-grey': '#9399a2ff',
      'app-black': '#202b3bff',
      'app-dark-blue': '#35455E',
      'app-dark-grey': '#C4CAD3',
      'app-blue-primary': '#0095FF',
      'app-bg-grey': '#EAECEF',
      'app-rule-grey': '#DDE0E4',
      'app-bg-grey-primary': '#F5F5F5'
    },
    extend: {},
  },
  plugins: [],
}

