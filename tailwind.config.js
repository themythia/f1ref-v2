module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '600px',
      md: '905px',
      lg: '1240px',
      xl: '1440px',
    },
    extend: {
      colors: {
        bg: {
          50: '#F5FBFD',
          100: '#F0F5F8',
          200: '#E8EEF0',
          300: '#DADFE2',
          400: '#B7BCBF',
          500: '#989D9F',
          600: '#6F7476',
          700: '#5B6062',
          800: '#3D4143',
          900: '#1C2022',
        },
        redbull: '#0800EF',
        mercedes: '#00D2BD',
        mclaren: '#FF9900',
        mclarennew: '#FF8000',
        ferrari: '#DC0000',
        rb: '#6692FF',
        astonmartin: '#006F62',
        alpine: '#FF87BC',
        sauber: '#52E252',
        williams: '#0059FF',
        haas: {
          50: '#FFFFFF',
          900: '#3C3C3C',
        },
        spoiler: '#e8eef019',
      },
      fontFamily: {
        kronaOne: ['"Krona One"'],
        poppins: ['Poppins'],
        openSans: ['"Open Sans"'],
      },
      boxShadow: {
        '2px': '0px 0px 2px 1px rgba(0, 14, 51, 0.2)',
        '4px': '0px 0px 4px 1px rgba(0, 14, 51, 0.2)',
        '8px': '0px 0px 8px 2px rgba(0, 14, 51, 0.2)',
        '2px-dark': '0px 0px 2px 1px rgba(0, 14, 51, 0.5)',
        '4px-dark': '0px 0px 4px 1px rgba(0, 14, 51, 0.5)',
        '8px-dark': '0px 0px 8px 2px rgba(0, 14, 51, 0.5)',
      },
      animation: {
        'pulse-tw': 'pulse-tw 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-tw': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
      },
      aspectRatio: {
        '3/2': '3 / 2',
        '16/9': '16 / 9',
        '4/3': '4 / 3',
      },
      gridTemplateRows: {
        rows: '56px 1fr minmax(0, min-content)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
