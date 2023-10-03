/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: '#3B8EEE',
        rosa: '#E5636D',
        verde: '#34C759',
        verdeClaro: '#A6FB83'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

