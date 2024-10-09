/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "clear-white-for-bg-and-elements": "#fff",
        "for-white-bg": "#f8f8f8",
        gray1: "#0c0c0c",
        "original-blue-for-black-bg": "#3772ff",
        "colors-base-default-foreground": "#000",
        "colors-layout-foreground-500": "#71717a",
        "colors-base-danger": "#f31260",
        gray: "#7a7a7a",
        "blue-for-white-bg": "#1655e7",
        linkedin: "#0a66c2",
        fb: "#1877f2",
        inst: "#c32aa3",
        "successfull-green": "#4f8414",
        "orange-for-white-bg": "#cc4e00",
      },
      spacing: {
        "units-unit-5": "20px",
      },
      fontFamily: {
        poppins: "Poppins",
        "lato-for-texts": "Lato",
        "text-small": "Inter",
      },
      borderRadius: {
        xl: "20px",
        "32xl": "51px",
        "981xl": "1000px",
        "5xs-2": "7.2px",
        "6xl": "25px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      sm: "14px",
      xs: "12px",
      "26xl": "45px",
      "8xl": "27px",
      "17xl": "36px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};