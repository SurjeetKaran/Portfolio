/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       animation: {
        glow: "glow 8s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.1)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
}
