import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "card-blue": "hsl(246, 80%, 60%)",
        orange: "hsl(15, 100%, 70%)",
        "soft-blue": "hsl(195, 74%, 62%)",
        "light-red": "hsl(348, 100%, 68%)",
        "lime-green": "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        "soft-orange": "hsl(43, 84%, 65%)",
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "very-soft-blue": "hsl(235deg 90% 90%)",
        "light-blue": "rgb(52 56 122)",
        "very-light-blue": "rgb(73 79 179)",
        "pale-blue": "hsl(236, 100%, 87%)",
      },
      backgroundImage: {
        work: "url('/images/icon-work.svg')",
        play: "url('/images/icon-play.svg')",
        study: "url('/images/icon-study.svg')",
        exercise: "url('/images/icon-exercise.svg')",
        social: "url('/images/icon-social.svg')",
        "self-care": "url('/images/icon-self-care.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
