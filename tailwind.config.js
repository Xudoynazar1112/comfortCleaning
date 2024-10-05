/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'unbounded': ["Unbounded", 'sans-serif'],
        'ibm': ["IBM Plex Serif", 'serif']
      },
      backgroundImage: {
        'gilamFon': "url('/gilam-fon.jpg')",
      }
    },
  },
  plugins: [],
}

