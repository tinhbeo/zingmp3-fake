/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#432275',
        'layout-bg': '#170f23',
        'primary-text': '#DADADA',
        'purple-primary': '#7200a1',
        'text-hover': '#c662ef',
        'alpha-bg': 'hsla(0,0%,100%,0.05)',
        'dark-alpha': 'rgba(0,0,0,0.5)',
        'border-alpha': 'hsla(0,0%,100%,0.1)',
        'text-gray': 'hsla(0,0%,100%,0.5)',
        'hover-icon': 'hsla(0,0%,100%,0.3)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
