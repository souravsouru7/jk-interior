/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          600: '#57534e',
          800: '#292524',
          900: '#1c1917',
        },
      },
      backdropBlur: {
        md: '12px',
      },
    },
  },
  plugins: [],
}