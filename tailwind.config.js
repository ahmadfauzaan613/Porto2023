module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: { min: '320px', max: '480px' },
      sm: { min: '481px', max: '768px' },
      md: { min: '769px', max: '1024px' },
      lg: { min: '1025px', max: '1200px' },
      xl: { min: '1201px', max: '1919px' },
      xxl: { min: '1920px', max: '9999px' },
    },
    extend: {},
  },
  plugins: [],
}
