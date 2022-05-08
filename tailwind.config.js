const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dance: ["Dancing Script", ...defaultTheme.fontFamily.sans],
        anek: ["Anek Devanagari", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
