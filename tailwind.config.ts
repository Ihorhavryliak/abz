import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        custom: {
          'yellow-100': '#F4E041',
          'yellow-200': '#FFE302',
          'blue-100': '#00BDD3',
          'light-gray-100': '#F8F8F8',
        }
      },
      lineHeight: {
        '162': '162%'
      }
    },
  },
  plugins: [],
};
export default config;
