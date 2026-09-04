import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#E3B341"
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', "Georgia", '"Times New Roman"', "serif"]
      },
      maxWidth: {
        "content-lg": "1050px",
        "content-xl": "1100px"
      }
    }
  },
  plugins: []
};

export default config;
