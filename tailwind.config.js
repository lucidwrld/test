/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { 
    fontFamily: {
    'sans': ['Cal Sans', 'sans-serif'],
    'matter': ['Matter', 'sans-serif'],
  },
    extend: {
      fontSize: {
        "70px": "10px",
        "16px": "16px",
        "14px": "14px",
        "12px": "12px",
        "18px": "18px",
        logo: "40px",
        "13px": "13px",
        "20px": "20px",
        "28px": "28px",
        "24px": "24px",
        "30px": "30px",
        "35px": "35px",
      },
      colors: {
        whiteColor: "#FFFFFF",
        brandBlack: "#000000",
        dashboardBackground: "#F6F6F6",
        textGrey: "#919191",
        textGrey2: "#757575",
        brandRed: "#E10E32",
        main: {
          dark: "#131212",
          red: "rgba(225, 14, 50, 1)",
          gray: {
            100: "rgba(51, 51, 51, 1)",
            200: "rgba(84, 84, 84, 1)",
            300: "rgba(130, 130, 130, 1)",
            400: "rgba(255, 255, 255, 0.25)",
            500: "rgba(168, 168, 168, 1)",
          },
          black: {
            100: "rgba(13, 17, 23, 1)",
            transparentBlack: "rgba(0, 0, 0, 0.50)",
          },
          white: {
            transparentWhite: "rgba(255, 255, 255, 0.50)",
          },
          onHover: {
            red: "hsla(350, 88%, 50%, 1)",
          },
        },
        primary: "#E10E32",
      },
      dropShadow: {
        main: {
          red: "0 35px 35px rgba(0, 0, 0, 0.25)",
        },
      },
    },
  },
  daisyui: {
    base: false,
    themes: ["light"],
  },
  plugins: [require('tailwindcss-font-inter')],
};
