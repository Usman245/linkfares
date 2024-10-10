/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "5rem",
        xl: "8.438rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          25: "#f6fef9",
          50: "#ecfdf3",
          100: "#d1fadf",
          200: "#a6f4c5",
          300: "#6ce9a6",
          400: "#32d583",
          500: "#429C7D",
          600: "#12B76A",
          700: "#027a48",
          800: "#05603a",
          900: "#054f31",
        },
        "black-2f": "#2f2f2f",
        "gray-e0": "#e0e0e0",
      },

      fontFamily: {
        roboto: ["var(--roboto)"],
        poppins: ["var(--poppins)"],
      },
    },
  },
  plugins: [],
};
