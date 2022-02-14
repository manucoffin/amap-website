module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        blue: {
          300: "#32A6E7",
          500: "#2589C1",
          700: "#004F7B",
        },
        gray: {
          200: "#EFEFEF",
          300: "#DDDDDD",
          400: "#868686",
          500: "#404040",
          800: "#404040",
        },
        aquamarine: {
          500: "#98FFC7",
        },
        melon: {
          500: "#FFB09E",
        },
        ivory: {
          500: "#FFFDEB",
        },
      },
      fontFamily: {
        sans: ["Josefin Sans"],
        serif: ["Aleo"],
      },
    },
  },
  plugins: [],
};
