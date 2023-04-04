/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        space: ["var(--font-space)", "Space Grotesk"],
      },
      backgroundImage: {
        desktop: "url('../assets/images/bg-main-desktop.png')",
        mobile: "url('../assets/images/bg-main-mobile.png')",
        "card-front": "url('../assets/images/bg-card-front.png')",
        "card-back": "url('../assets/images/bg-card-back.png')",
      },
      colors: {
        red: "hsl(0,100%,66%)",
        white: "hsl(0, 0%, 100%)",
        "gray-violet": {
          100: "hsl(270, 3%, 87%)",
          800: "hsl(279, 6%, 55%)",
        },
        "dark-violet": "hsl(278, 68%, 11%)",
      },
      gradientColorStops: {
        gradient: "hsl(249, 99%, 64%) to hsl(278, 94%, 30%)",
      },
    },
  },
  plugins: [],
};
