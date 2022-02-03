module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          50: '#F5FBFD',
          200: '#E8EEF0',
          300: '#DADFE2',
          800: '#3D4143',
          900: '#1C2022',
        },
        redbull: '#0800EF',
        mercedes: '#00D2BD',
        mclaren: '#FF9900',
        ferrari: '#DC0000',
        alphatauri: '#2B4562',
        astonmartin: '#006F62',
        alpine: '#0091FF',
        alfaromeo: '#900000',
        williams: '#0059FF',
        haas: {
          50: '#FFFFFF',
          900: '#3C3C3C',
        },
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
      },
    },
  },
  plugins: [],
};
