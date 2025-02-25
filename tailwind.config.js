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
        clrMilk: "#faf5e9",
        clrLightBrown: "#dda15e",
        clrBlue: "#094b81",
        clrDarkBrown: "#bc6c25",
        clrCoal: "#1b1b1b",
        clrDarkGray: "#222222",
        darkText: "#e1e7ef",
        darkBackground: "#1a202d",
        darkPrimary: "#4199e1",
        darkSecondary: "#49bc78",
        darkAccent: "#a07bea",
        lightText: "#10161e",
        lightBackground: "#f2f8f5",
        lightPrimary: "#1e76be",
        lightSecondary: "#43b673",
        lightAccent: "#3a1584",
        // contact us colors
        cRed: "#CE0000ff",
        cPlum: "#450013ff",
        cDarkRed: "#70000Eff",
        cForest: "#0A3D2Cff",
        cGarden: "#087C6Fff",
        lPurple: "#9B59B6",
        lGray : "#34495E"
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
        'custom-pulse': {
          '0%, 100%': { opacity: '.8' },
          '50%': { opacity: '.4' },
        },
        floating: {
          "0%": { transform: "translate(-100%, 0%)" },
          "100%": { transform: "translate(10%, 0%)" },
        },
        floatUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-1%)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 },
        },
        "slow-bounce" : {
          '0%, 100%' : {transform: "translateY(0%)"},
          '50%' : {transform: "translateY(10%)"}
        },
        "low-ping" : {
          "0%": { transform: "scale(0.9)", opacity: "1" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        }
      },
      animation: {
        "pulse-shadow": "pulse-shadow 3s ease-in-out infinite",
        float: "floating 10s ease-in-out infinite alternate",
        'custom-pulse': 'custom-pulse 5s ease-in-out infinite',
        'float-up': 'floatUp 1s ease infinite alternate-reverse',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'slow-bounce': "slow-bounce .5s ease-out infinite",
        'low-ping': 'low-ping 2s ease infinite',
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        'grid-slate-900': 'radial-gradient(circle, #1e293b 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

