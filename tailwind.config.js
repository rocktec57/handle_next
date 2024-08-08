/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        custom: ['LatoRegular','LatoBoldItalic', 'sans-serif'],
      },
      colors: {
        'black_222':'#222222',
        'blue':'#0F3090',
        'yellow':'#FFBB0D',
        'tahiti': '#3ab7bf',
        'bgDark':'#F1F0FA',
        'navyBlue':'#161837',
        'navy':'#21243F',
        'bodyWhite':'#F9F8FE',
        'White_EEE':'#EEEEEE',
        'gray-ea':'#EAEAEA'
      },
      font:{
        'LatoThin':'LatoThin',
        'ThinItalic':'ThinItalic',
        'LatoRegular':'LatoRegular',
        'LatoLightItalic':'LatoLightItalic',
        'LatoLight':'LatoLight',
        'LatoItalic':'LatoItalic',
        'LatoBoldItalic':'LatoBoldItalic',
        'LatoBold':'LatoBold',
      }
    },
  },
  plugins: [],
}

