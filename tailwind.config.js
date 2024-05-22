/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        PrimaryMain: "#110929",
        PrimaryHover: "#080414",
        PrimaryPressed: "#39324D",
        SecondaryMain: "#1C51FE",
        SecondaryHover: "#1336A9",
        SecondaryPressed: "#0E297F",
        mypurple: "#8D1CFE",
        medpurple: "#815EE3",
        mylitepurple: " #E3DAFF",
        myblue: "#0038ED",
        mybrown: "#39324D",
        mygery: "#EDECEC",
        footergrey: "#999999",
        boxpurple: "#251163",
      },
      fontFamily: {
        mainfont: "Inter",
        ROBOTOfont: "Roboto",
      },
      fontWeight: {
        h2: "700", // Custom font weight for h2
      },
      fontSize: {
        h2: "48px",
      },
      lineHeight: {
        h2: "58px", // Custom line height for h2
      },
      letterSpacing: {
        h2: "-0.02em", // Custom letter spacing for h2
      },
      backgroundImage: {
        community: "url('../assets/img/community.png')",
      },
    },
    screens: {
      xs: "320px",
      sm: "576px",
      md: "960px",
      lg: "1440px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2224px",
    },
  },
  plugins: [],
};
