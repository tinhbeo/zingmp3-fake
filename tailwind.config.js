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
                'alpha-bg': 'hsla(0,0%,100%,0.1)',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
