module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'rlayout': '100px minmax(900px, 1fr) 100px',
      },
      gridTemplateColumns: {
        'clayout': '1fr 3fr 1fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
