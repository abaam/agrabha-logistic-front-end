const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Source Sans Pro'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: {
          light: "#9ed35a",
          DEFAULT: "#548714",
        },
        blue: {
          light: "#3a8cdd",
          DEFAULT: "#094e9d",
        },
        orange: {
          light: "#f6be47",
          DEFAULT: "#e15c21",
        },
        purple: {
          DEFAULT: "#a7165e",
        },
        grey: {
          light: "#e4e8ed",
          DEFAULT: "#c3cedb",
          dark: "#7f9bb5",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
