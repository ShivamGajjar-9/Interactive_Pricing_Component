import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Primary Colors
        'soft-cyan': 'hsl(174, 77%, 80%)',     // Full Slider Bar
        'strong-cyan': 'hsl(174, 86%, 45%)',    // Slider Background
        'light-red': {
          DEFAULT: 'hsl(15, 100%, 70%)',        // Discount Text
          light: 'hsl(14, 92%, 95%)',           // Discount Background
        },
        'pale-blue': 'hsl(226, 100%, 87%)',     // CTA Text

        // Neutral Colors
        'white': 'hsl(0, 0%, 100%)',            // Pricing Component Background
        'very-pale-blue': 'hsl(230, 100%, 99%)', // Main Background
        'light-grayish-blue': {
          DEFAULT: 'hsl(224, 65%, 95%)',        // Empty Slider Bar
          dark: 'hsl(223, 50%, 87%)',           // Toggle Background
        },
        'grayish-blue': 'hsl(225, 20%, 60%)',   // Text
        'dark-blue': 'hsl(227, 35%, 25%)',      // Text & CTA Background
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;