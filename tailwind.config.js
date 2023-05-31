/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Esto es para agregar variables en tailwind
      colors: {
        primary: "#706fe5",
        secondary: "#2E3E5C",
        main: "#1E1F4B",
      },
    },
  },
  plugins: [],
}