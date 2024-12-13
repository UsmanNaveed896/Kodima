/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        primary:"#f95f2a"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right top, #15ccd8, #0dbccc, #09adbf, #089eb2, #0a8fa4);'
      }
    },
  },
  plugins: [],
}

