/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        // Dark mode colors
        darkBackground: '#0c0f11',
        darkText: '#eef5fc',
        darkSecondaryText: '#a8adb2',
        darkLink: '#3d7ac4',

        // Light mode colors
        lightBackground: '#eef5fc',
        lightText: '#0c0f11',
        lightSecondaryText: '#525252',
        lightLink: '#1172f2',
      },
      maxWidth: {
        container: '768px'
      }
    },
  },
  plugins: [],
}

