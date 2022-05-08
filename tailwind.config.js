module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        navy: "#053A81",
        yellow: "#FFFB8F",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
        fira: "Fira Code, monospace",
        ramona: "Ramona, display",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
