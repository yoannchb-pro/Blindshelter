module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'nesthub': '1030px',
        'portrait': {'raw': '(orientation: portrait)'}, 
        'landscape': {'raw': '(orientation: landscape)'}
      },
      height: {
        'ytb': "calc(60vw/1.77)",
        'ytb-phone': "calc(100vw/1.77);"
      },
      fontFamily: {
        'blindshelter': ['blindshelter'],
        'braille': ['braille']
      }
    },
  },
  plugins: [],
}
