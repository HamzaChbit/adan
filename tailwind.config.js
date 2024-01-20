/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        navbarShadow :'0 10px 30px -10px rgba(2,12,27,0.7)',
       },
    colors:{
      bodyColor:'#97D0CF',
      bgNav:'#AFD9D5'
    }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
