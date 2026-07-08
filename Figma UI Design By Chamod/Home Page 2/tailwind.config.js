/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: {
          100: "#e5e5e5",
          200: "rgba(217, 217, 217, 0.2)",
        },
        gray: {
          100: "#031a13",
          200: "rgba(3, 0, 0, 0.2)",
        },
        snow: "#fffcfc",
        mediumseagreen: "#11b888",
        dodgerblue: {
          100: "#2294f6",
          200: "#0982f3",
        },
        orange: "#fba300",
        darkslategray: {
          100: "#143a2f",
          200: "rgba(54, 51, 51, 0.2)",
          300: "rgba(20, 58, 47, 0.6)",
        },
        darkgray: "#a49999",
      },
      spacing: {
        "num-394": "394px",
        "num-241": "241px",
        "num-620": "620px",
        "num-255": "255px",
        "num-30": "30px",
        "num-77": "77px",
        "num-67": "67px",
        "num-25": "25px",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "num-20": "20px",
      },
      padding: {
        "num-0": "0",
        "num-35": "35px",
        "num-01": "0px",
        "num-14": "14px",
        "num-2": "2px",
        "num-18": "18px",
      },
    },
    fontSize: {
      "num-24": "24px",
      "num-26": "26px",
      "num-21": "21px",
      "num-22": "22px",
      "num-18": "18px",
      "num-11": "11px",
      "num-17": "17px",
    },
    screens: {
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq725: {
        raw: "screen and (min-width: 451px) and (max-width: 725px)",
      },
      mq975: {
        raw: "screen and (min-width: 726px) and (max-width: 975px)",
      },
      mq1025: {
        raw: "screen and (min-width: 976px) and (max-width: 1025px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
