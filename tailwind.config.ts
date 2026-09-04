import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#D9A441",
        ink: "#14110D",
        paper: "#F5F1E8"
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
