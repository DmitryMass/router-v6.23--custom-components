/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {},
      maxWidth: {
        mainContainer: '1440px',
      },
      colors: {
        neutral: {
          100: '#0000',
          90: '#36383B',
          80: '#6D7076',
          70: '#717171',
          60: '#D9DFEB',
          50: '#e4e4e4',
          40: '#E8ECF3',
          30: '#F0F2F7',
          20: '#f2f2f2',
          10: '#f9f9f9',
        },
      },
      fontSize: {
        xs12: ['12px', '16px'],
        s14: ['14px', '20px'],
        sm16: ['16px', '24px'],
        sm18: ['18px', '24px'],
        md20: ['20px', '28px'],
        md24: ['24px', '32px'],
        md28: ['28px', '32px'],
        l32: ['32px', '38px'],
        l48: ['48px', '52px'],
      },
    },
  },
  plugins: [],
};
