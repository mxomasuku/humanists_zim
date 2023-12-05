/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/StaticResources/hero.png')",
       
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

