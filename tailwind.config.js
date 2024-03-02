/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'lexend-deca': ['Lexend Deca', 'sans-serif']
      },
      screens: {
        '375': {'max': '500px'} // Aquí defines tu tamaño de pantalla personalizado
      }
    },
  },
  plugins: [],
}

