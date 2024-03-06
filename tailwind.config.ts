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
          'black-100': 'rgba(0, 0, 0, 0.87)',
          'black-200': 'rgba(0, 0, 0, 0.50)',
          'yellow-100': '#F4E041',
          'yellow-200': '#FFE302',
          'blue-100': '#00BDD3',
          'light-gray-100': '#F8F8F8',
          'gray-100': '#b4b4b4',
          'gray-200': '#D0CFCF',
          'gray-300': '#7E7E7E',
          'gray-400': '#F8F8F8',
          'red-100': '#CB3D40',
        }
      },
      lineHeight: {
        '162': '162%'
      },
      maxWidth: {
        mx: '1280px'
      },
    },
  },
  plugins: [],
};
export default config;
