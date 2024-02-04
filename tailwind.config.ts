import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        garamond: "Cormorant Garamond",
        amalfi:"Amalfi Coast",
        bodoni: "Bodoni Moda",
        rufina: 'Rufina',
        duolos: 'Doulos SIL Compact',
        times: 'That New Roman test',
        poppins:'Poppins'
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
