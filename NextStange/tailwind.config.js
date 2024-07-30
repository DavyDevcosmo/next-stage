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
        'teste2': '#10B981',
        'teste': '#1F2937',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #000000, #140038, #270576)',
        'custom2':'linear-gradient(135deg, #4c51bf, #ff4b5c);'
        
        
      },
     
    }
  },
  plugins: [],
}

