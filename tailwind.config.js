/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/preline/dist/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        'xel' : '#181823'
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("preline/plugin"),
  ],
  darkMode: "class"
}

