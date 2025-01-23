/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clrLightGreen: "#7e9141",
        clrGreen: "#606c38",
        clrDarkGreen: "#283618",
        clrWhite: "#fefae0",
        clrLightBrown: "#dda15e",
        clrDarkBrown: "#bc6c25",
        clrCoal: "#141414",
        clrDarkGray: "#2b2b2b",
      },
      keyframes: {
        'pulse-shadow': {
          '0%, 100%': {
            boxShadow: '9px 9px 19px #080808, -9px -9px 19px #202020'
          },
          '50%': {
            boxShadow: '9px 9px 25px #080808, -9px -9px 25px #2b2b2b'
          }
        }
      },
      animation: {
        'pulse-shadow': 'pulse-shadow 3s ease-in-out infinite'
      },
      
    },
  },
  plugins: [],
};

