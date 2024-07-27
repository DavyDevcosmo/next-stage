/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        NavBar: '#18171C',
        black: '#000000',
        'teste2': '#998E91',
        'teste': '#19080F',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #000000, #140038, #270576)',
        'custom2':'linear-gradient(135deg, #4c51bf, #ff4b5c);'
        
        
      },
     
    }
  },
  plugins: [],
}

