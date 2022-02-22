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
        green: {
          100: "#F3FFDF",
          300: "#D7DFAB",
          500: "#9AAB49",
        },
        blue: {
          100: "#A3CDD2",
          300: "#7BB8D3",
          500: "#2589C1",
          700: "#004F7B",
          900: "#15454D",
        },
        gray: {
          200: "#EFEFEF",
          300: "#DDDDDD",
          400: "#868686",
          500: "#535353",
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
        sans: ["Amatic SC"],
        // sans: ["Dosis"],
        serif: ["Aleo"],
        // handwritten: ["Amatic SC"],
      },
    },
  },
  plugins: [],
};
