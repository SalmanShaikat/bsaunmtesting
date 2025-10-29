/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bangladesh inspired aesthetic palette
        'jungle': {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce5ca',
          300: '#8bd2a6',
          400: '#53b87e',
          500: '#2d9d5f',  // Primary jungle green
          600: '#1f7e4c',
          700: '#19643e',
          800: '#165034',
          900: '#13422c',
        },
        'seafoam': {
          50: '#f0fdf9',
          100: '#ccfbef',
          200: '#99f6e0',
          300: '#5eead4',
          400: '#2dd4bf',  // Primary seafoam
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // UNM inspired palette
        'unm-cherry': {
          50: '#fdf2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f98080',
          500: '#f05252',  // UNM Cherry
          600: '#e02424',
          700: '#c81e1e',
          800: '#9b1c1c',
          900: '#771d1d',
        },
        'unm-silver': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',  // UNM Silver
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
    },
  },
  plugins: [],
}
