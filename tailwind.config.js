/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0c0f11',
        gray: '#a8adb2',
        light: '#eef5fc',
        link: '#3d7ac4'
      },
      maxWidth: {
        container: '768px'
      }
    },
  },
  plugins: [],
}

