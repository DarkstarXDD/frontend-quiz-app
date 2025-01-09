import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*"],
  theme: {
    screens: {
      md: "48rem",
    },

    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      "rubik-italic": ["Rubik-Italic", "sans-serif"],
    },

    fontSize: {
      xs: ["0.875rem", "1.5"],
      sm: ["1.125rem", "1"],
      md: ["1.25rem", "1.5"],
      "md-tight": ["1.25rem", "1.2"],
      lg: ["1.5rem", "1.5"],
      xl: ["1.75rem", "1"],
      "2xl": ["2.25rem", "1.2"],
      "3xl": ["2.5rem", "1"],
      "4xl": ["4rem", "1"],
      "5xl": ["5.5rem", "1"],
      "6xl": ["9rem", "1"],
    },

    fontWeight: {
      normal: "400",
      medium: "500",
    },

    colors: {
      transparent: "transparent",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",

      grey: {
        50: "hsl(220, 37%, 97%)",
        500: "hsl(219, 13%, 44%)",
      },

      blue: {
        50: "hsl(225, 100%, 96%)",
        100: "hsl(220, 50%, 95%)",
        300: "hsl(216, 47%, 78%)",
        500: "hsl(223, 100%, 59%)",
        850: "hsl(215, 27%, 32%)",
        900: "hsl(216, 25%, 25%)",
        950: "hsl(214, 24%, 23%)",
      },

      green: {
        100: "hsl(151, 88%, 94%)",
        500: "hsl(151, 68%, 52%)",
      },

      purple: {
        100: "hsl(278, 100%, 95%)",
        600: "hsl(277, 91%, 56%)",
      },

      orange: {
        50: "hsl(27, 100%, 96%)",
        400: "hsl(27, 100%, 96%)",
      },

      red: {
        500: "hsl(0, 82%, 63%)",
      },
    },

    extend: {},
  },
  plugins: [],

  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config
