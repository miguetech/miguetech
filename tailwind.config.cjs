/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {

        'resposive': 'repeat(auto-fit, minmax(200px, 1fr))',


      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}