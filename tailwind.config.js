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
          50: '#EBEEFC',
          100: '#5BABF2',
          500: '#3366FF',
          700: '#2E384D'
        },
        gray: {
          DEFAULT: '#B5B5C3',
          100: '#E8E8E8',
          200: '#EDF1FD',
          600: '#7A7A9D',
        },
        black: {
          DEFAULT: '#212121',
          400: '#1D1D1F'
        },
        red: {
          DEFAULT: '#FF4945',
          100: '#FFECEB'
        },
      },
      container: {
        center: true,
        screens: {
          '2xl': '1200px'
        }
      },
      width: {
        30: '123px',
        38: '153px',
        50: '200px',
        61: '247px',
        71: '284px',
        198: '793px',
        205: '820px'
      },
      margin: {
        '6.5': '26px'
      }
    },
  },
  plugins: [],
}

