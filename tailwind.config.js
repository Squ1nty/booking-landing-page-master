/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
      colors: {
        'blue-600': 'var(--blue-600)',
        'blue-950': 'var(--blue-950)',
        'red-400': 'var(--red-400)',
        'white': 'var(--white)',
        'grey-50': 'var(--grey-50)',
        'spacer': 'var(--spacer)',
      },
      gridTemplateRows: {
        'custom2Rows': '1fr 200px',
      },
      gridTemplateColumns: {
        'twoToThreeGridCols': '2fr 1fr',
      },
    },
  },
  plugins: [],
}

