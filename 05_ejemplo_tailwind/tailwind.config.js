/** @type {import('tailwindcss').Config} */
export default {
  // el modo oscuro se activa de esta manera
  darkMode: 'class',
  // codigo para aplicar los estilos en todos los archivos de react
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

