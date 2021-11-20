module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    
    extend: {
      colors: {
      background: '#FEF1E6',
      accent: '#009DAE',
      hover: '#71DFE7'
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
