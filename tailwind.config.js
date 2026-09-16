/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        base: "#010314",
        ink: "#FFFFFF",
        muted: "#DADADA",
        dim: "rgba(231, 222, 252, 0.6)",
        line: "rgba(231, 222, 252, 0.21)",
        accent: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "30px",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        "spin-slow": "spin 200s linear infinite",
        "text-slide-3":
          "text-slide-3 9s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },

      keyframes: {
        "text-slide-3": {
          "0%, 20%": {
            transform: "translateY(0%)",
          },
          "33.33%, 53.33%": {
            transform: "translateY(-25%)",
          },
          "66.66%, 86.66%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(-75%)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0, // Start with 0 opacity
          },
          "50%": {
            opacity: 0.5, // Adjust the opacity value as needed
          },
          "100%": {
            opacity: 1, // Fade in to full opacity
          },
        },
      },

      backgroundImage: {
        "hero-image": "url('/gradientHero.webp')",
        "glass": "linear-gradient(315deg, rgba(255,255,255,0.17) 0%, rgba(255,255,255,0.06) 100%)",
        "man-image": "url('/src/img/man-using-laptop.jpg')",
        vbg: "url('/vbg.webp')",
        vvbg: "url('/vvbg.webp')",
        vvvbg: "url('/src/img/vvvbg.jpg')",
        "meta-chip": "url('/src/img/landing.jpg)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
