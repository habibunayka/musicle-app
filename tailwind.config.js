/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        primary: '#D3664F',
        secondary: "#161616",
        primary50: '#D3664F50',
        primary30: '#D3664F10',
        japanese: '#f3727f',

      },
      fontFamily: {
        orbitron: ['orbitron', 'arial'],
        poppins: ['poppins', 'arial'],
        edu: ['Shadows Into Light']
      }
    },
  },
  plugins: [],
}
