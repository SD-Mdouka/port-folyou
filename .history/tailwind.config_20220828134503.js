/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "3xl": { max: "1780px" },
        // => @media (max-width: 1780px) { ... }

        "2xl": { max: "1536px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1280px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1024px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "768px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "640px" },
        // => @media (max-width: 639px) { ... }

        xs: { max: "480px" },
        // => @media (max-width: 480px) { ... }
      },
    },
  },
  plugins: [],
};
