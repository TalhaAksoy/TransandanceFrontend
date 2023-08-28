/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      flexGrow: {
        2: '2'
      }
    }
  },
  plugins: [ require('flowbite/plugin') , require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

