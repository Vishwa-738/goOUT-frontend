/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: "rgba(20, 58, 47, 0.6)",
        dodgerblue: {
          100: "#0982f3",
          200: "rgba(9, 130, 243, 0.64)",
        },
        white: "#fff",
        snow: "#fffcfc",
        gray: {
          100: "#7a7a7a",
          200: "#120101",
          300: "rgba(0, 0, 0, 0.5)",
          400: "rgba(3, 0, 0, 0.2)",
        },
        gainsboro: {
          100: "#e5e5e5",
          200: "#d9d9d9",
        },
        whitesmoke: "#f1efef",
        black: "#000",
        skyblue: "#12c3e6",
        lightcyan: "#cdebf1",
      },
      spacing: {
        "num-620": "620px",
        "num-241": "241px",
        "num-255": "255px",
        "num-427": "427px",
        "num-271": "271px",
        "num-27": "27px",
        "num-9": "9px",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "num-20": "20px",
        "num-10": "10px",
        "num-23": "23px",
        "num-26": "26px",
      },
      padding: {
        "num-15": "15px",
        "num-36": "36px",
        "num-0": "0",
        "num-2": "2px",
        "num-01": "0px",
        "num-8": "8px",
        "num-1": "1px",
        "num-5": "5px",
        "num-22": "22px",
        "num-19": "19px",
        "num-7": "7px",
        "num-3": "3px",
        "num-16": "16px",
        "num-6": "6px",
      },
    },
    fontSize: {
      "num-24": "24px",
      "num-21": "21px",
      "num-17": "17px",
      "num-18": "18px",
      "num-23": "23px",
      "num-14": "14px",
      "num-22": "22px",
      "num-11": "11px",
      "num-28": "28px",
    },
    lineHeight: {
      "num-30": "30px",
    },
    screens: {
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq925: {
        raw: "screen and (min-width: 451px) and (max-width: 925px)",
      },
      mq1350: {
        raw: "screen and (min-width: 926px) and (max-width: 1350px)",
      },
      mq1825: {
        raw: "screen and (min-width: 1351px) and (max-width: 1825px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
