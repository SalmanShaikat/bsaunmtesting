/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern Bangladesh + UNM inspired palette
        'primary': '#1a365d',      // Deep navy
        'secondary': '#2d3748',    // Dark gray
        'accent': '#e53e3e',       // Vibrant red (Bangladesh)
        'accent-light': '#fc8181', // Light red
        'success': '#38a169',      // Green (Bangladesh)
        'highlight': '#d69e2e',    // Gold accent
        'light': '#f7fafc',        // Light background
        'dark': '#1a202c',         // Dark background
      },
    },
  },
  plugins: [],
}
