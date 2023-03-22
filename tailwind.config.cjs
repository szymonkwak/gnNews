/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#44403c',
          secondary: '#0369a1',
          accent: '#EBDC99',
          neutral: '#7D7259',
          'base-100': '#E4D8B4',
          info: '#2563EB',
          success: '#16A34A',
          warning: '#D97706',
          error: '#DC2626',
        },
      },
    ],
  },
};
