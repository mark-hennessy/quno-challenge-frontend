module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyan-900": "#164e63",
        "amber-300": "#fcd34d",
        "trueGray-300": "#d4d4d4",
        "trueGray-700": "#404040",
        "lightBlue-custom": "#a5cad5",
      },
    },
  },
  variants: {},
  plugins: [],
};
