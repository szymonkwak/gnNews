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
          primary: '#0D0D0D',
          secondary: '#f0f0f0',
          accent: '#262626',
          neutral: '#000000',
          'base-100': '#FFFFFF',
          info: '#0070F3',
          success: '#21CC51',
          warning: '#FF6154',
          error: '#DE1C8D',
          '--rounded-box': '0rem',
        },
      },
    ],
  },
};
