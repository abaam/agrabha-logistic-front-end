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
          lighter: '#e6ffe6',
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
        red: {
          DEFAULT: "#be4d25",
          light: "#Ff8181",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.js",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
};
