/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },    colors: {
        'sp-blue': '#2e74ff',
        'sp-blue-dark':'#0e1928',
        'sp-blue-light':'#bbdeff',
        'sp-blue-rich':'#084fb2',
        'sp-blue-lightMode': '#4e87f9',
        'sp-carbon': '#060a11',
        'sp-gray': '#868b94',
        'sp-pink': '#fa61b0',
        'sp-white-off': '#eef4fb',
        'white':"#ffffff",
        'black':"000000"
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')],
}
