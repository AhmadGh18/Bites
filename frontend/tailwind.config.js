/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FF8C42",
        primaryHover: "#FF7A30", // Slightly darker shade for hover effects
        ratings: "#FFD54F",
        cards: "#F2F2F2",
        textColor: "#2D2D2D",
        secondaryText: "#4A4A4A", // A lighter text for subtle elements
        borderGray: "#E0E0E0", // For card borders or dividers
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
