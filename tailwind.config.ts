import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f13a01",
      },
      backgroundImage: {
        "orange-gradient":
          "linear-gradient(to bottom, #CD885F 5%, #F1EBE0 95%)",
      },
    },
  },
 // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-motion")],
} satisfies Config;
