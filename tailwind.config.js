/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm2: "0.9375rem", // 15px label
        base: "1rem", // 16px base
        md: "1.0625rem", // 17px body
        lg: "1.125rem", // 18px heading
      },
      colors: {
        gray: {
          "150": "hsl(210, 44%, 97%)",
          "250": "hsl(210, 40%, 93.5%)",
          "550": "hsl(218, 20%, 63%)",
          "650": "hsl(216, 15%, 48%)",
          "750": "hsl(214, 17%, 32%)",
          ...defaultTheme.colors.gray
        },
      },
    },
  },
  plugins: [],
}

