/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: '#16a34a', // Adding green-400 to the default palette
        },
        red: {
          200: '#fecaca',
        },
        blue: {
          300: '#93c5fd',
        },
        gray: {
          600: '#4b5563',
        },
      },
    },
  },
  plugins: [],
};
