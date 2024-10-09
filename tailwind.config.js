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
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "lato-for-texts": "Lato",
        "text-small": "Inter",
      },
      borderRadius: {
        xl: "20px",
        "32xl": "51px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      base: "1rem",
      sm: "0.875rem",
      xs: "0.75rem",
      "26xl": "2.813rem",
      "8xl": "1.688rem",
      "17xl": "2.25rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
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
