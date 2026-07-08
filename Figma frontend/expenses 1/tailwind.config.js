/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: "rgba(20, 58, 47, 0.6)",
        dodgerblue: "#0982f3",
        white: "#fff",
        snow: "#fffcfc",
        gray: {
          100: "#120101",
          200: "rgba(0, 0, 0, 0.5)",
          300: "rgba(3, 0, 0, 0.2)",
        },
        gainsboro: "#e5e5e5",
        whitesmoke: "#f1efef",
      },
      spacing: {
        "num-241": "241px",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "num-20": "20px",
      },
      padding: {
        "num-0": "0",
        "num-01": "0px",
        "num-1": "1px",
        "num-22": "22px",
      },
    },
    fontSize: {
      "num-21": "21px",
      "num-17": "17px",
      "num-18": "18px",
    },
    lineHeight: {
      "num-30": "30px",
    },
    screens: {},
  },
  corePlugins: {
    preflight: false,
  },
};
