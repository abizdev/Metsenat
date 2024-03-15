/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#2E5BFF',
          100: '#5BABF2',
          500: '#3366FF',
          700: '#2E384D'
        },
        gray: {
          DEFAULT: '#B5B5C3',
          100: '#E8E8E8',
          200: '#EDF1FD',
        },
        black: {
          DEFAULT: '#212121',
          400: '#1D1D1F'
        },
        red: {
          DEFAULT: '#FF4945',
          100: '#FFECEB'
        },
      }
    },
  },
  plugins: [],
}

