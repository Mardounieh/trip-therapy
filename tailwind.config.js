/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        clrLightGreen: "#41914e",
        clrGreen: "#386c49",
        clrDarkGreen: "#183626",
        clrWhite: "#f2ffd4",
        clrLightBrown: "#dda15e",
        clrBlue: "#094b81",
        clrDarkBrown: "#bc6c25",
        clrCoal: "#1b1b1b",
        clrDarkGray: "#222222",
      },
      keyframes: {
        "pulse-shadow": {
          "0%, 100%": {
            boxShadow: "9px 9px 19px #080808, -9px -9px 19px #202020",
          },
          "50%": {
            boxShadow: "9px 9px 25px #080808, -9px -9px 25px #2b2b2b",
          },
        },
        floating: {
          "0%": { transform: "translate(0, 60%)" },
          "100%": { transform: "translate(0, 250%)" },
        },
      },
      animation: {
        "pulse-shadow": "pulse-shadow 3s ease-in-out infinite",
        float: "floating 10s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

