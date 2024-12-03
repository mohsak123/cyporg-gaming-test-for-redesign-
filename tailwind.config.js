/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        bgPrimary: "#1F2122",
        bgSecondary: "#27292a",
        textPrimary: "#ec6090",
        textSecondary: "#4f4f50",
      },
    },
  },
  plugins: [],
});
