/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // Next.js app router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages router
    "./components/**/*.{js,ts,jsx,tsx}", // Your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
