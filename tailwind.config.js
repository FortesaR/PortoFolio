/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customPurple: '#433878',
      },
      scale: {
        '150': '1.5',
      },
    },
  },
  plugins: [],
}

