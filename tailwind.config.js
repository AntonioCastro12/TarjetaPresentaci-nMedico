/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 24px 80px rgba(15, 42, 73, 0.16)",
        soft: "0 18px 50px rgba(28, 81, 120, 0.12)",
      },
    },
  },
  plugins: [],
};
