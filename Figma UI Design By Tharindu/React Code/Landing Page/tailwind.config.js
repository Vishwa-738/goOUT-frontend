/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mq450: {
        raw: "screen and (min-width: 451px) and (max-width: 725px)",
      },
      mq975: {
        raw: "screen and (min-width: 1026px) and (max-width: 1275px)",
      },
      mq1025: {
        raw: "screen and (min-width: 1276px) and (max-width: 1650px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
