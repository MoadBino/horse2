/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "0px",
      sm: "480px",
      mds: "600px",
      md: "769px",
      lg: "976px",
      xlg: "1024px",
      ipad: "1250px",
      xl: "1440px",
      xxl: "2000px",
    },
  },
  plugins: [],
};
