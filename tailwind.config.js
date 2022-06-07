module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/core/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        fabric: "url('/assets/fabric-texture.png')",
        concrete: "url('/assets/concrete-texture.jpg')",
        grid: "url('/assets/grid-bg-2.svg')",
      },
      height: {
        'screen-no-header': 'calc(100vh - 88px)',
      },
      colors: {
        primary: {
          50: '#92c4e0',
          100: '#7cb8d9',
          200: '#66acd3',
          300: '#50a0cd',
          400: '#3a94c7',
          500: '#2589C1',
          600: '#217bad',
          700: '#1d6d9a',
          800: '#195f87',
          900: '#165273',
        },
        white: '#FFFFFF',
        black: '#000000',
        green: {
          100: '#F3FFDF',
          300: '#D7DFAB',
          500: '#9AAB49',
        },
        blue: {
          100: '#A3CDD2',
          300: '#7BB8D3',
          500: '#2589C1',
          700: '#004F7B',
          900: '#15454D',
        },
        gray: {
          200: '#EFEFEF',
          300: '#DDDDDD',
          400: '#868686',
          500: '#535353',
          800: '#404040',
        },
        aquamarine: {
          500: '#98FFC7',
        },
        melon: {
          500: '#FFB09E',
        },
        ivory: {
          500: '#FFFDEB',
        },
      },
      fontFamily: {
        handwritten: ['Amatic SC'],
        sans: ['Aleo'],
        serif: ['Aleo'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
