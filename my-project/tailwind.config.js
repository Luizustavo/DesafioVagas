/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        popins: ['Poppins', 'sans-serif'],
      },

      colors: {
        primary: '#42CFAA', //verde claro
        secondary: '#50A58E', //verde medio
        tertiary: '#2A3331', //verde escuro
        navBar: '#507A6F'
      },
      
    },
    plugins: [],
  }
}
