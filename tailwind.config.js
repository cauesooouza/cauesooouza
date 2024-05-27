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
      'roboto':['Roboto']
    },
    extend: {
    },
  },
  plugins: [],
}

