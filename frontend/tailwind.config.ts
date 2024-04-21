import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-blue" : "#2196f3",
        "bg-chat-blue" : "#64b5f6",
        "tx-blue" : "#0d47a1"
      },
      fontFamily: {
        headings: ["Calistoga", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
