/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq1275: {
        raw: "screen and (min-width: 451px) and (max-width: 1275px)",
      },
      mq1650: {
        raw: "screen and (min-width: 1276px) and (max-width: 1650px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
