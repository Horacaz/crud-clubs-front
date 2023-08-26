/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainRed: "#ED1A3B",
      mainBlack: "#121212",
      mainWhite: "#FFFFFF",
      mainGray: "#1C1C1C",
    },
    fontSize: {
      "2xs": "0.5rem",
      xs: "0.6rem",
      sm: "0.7rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
    maxWidth: {
      h: "50%",
    },
    borderWidth: {
      sm: "8px",
      lg: "24px",
    },
    extend: {},
  },
  plugins: [],
};
