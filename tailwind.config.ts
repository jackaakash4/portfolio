import type { Config } from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme"

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
          
        ],
        poppins: ["Poppins", ...fontFamily.sans]
      },
    },
  },
  plugins: [],
} satisfies Config;
