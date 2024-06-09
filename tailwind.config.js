/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    container: {
      center:true
    },
    fontFamily: {
      'display': ['Urbanist'],
      'focus':['Poppins'],
      'cursive':['Yellowtail']
    },
    screens:{
      'smob':'320px',
      'mmob':'375px',
      'lmob': '425px',
      'md': '768px',
      'lg':'1024px',
      'xl':'1280px',
    },
    extend: {
    },
  },
  plugins: [],
}

