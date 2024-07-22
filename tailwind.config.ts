import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');
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
      spacing: {
        '60px': '60px',
        '102px':'102px',
        '148px' :  '148px',
        '153px' : '153px',
        '171px' : '171px',
        '200px' : '200px',

        '256px' : '256px',
        '468px' : '468px',
        '478px' : '478px',
        '494px' : '494px',
        '790px': '790px',
        '801px': '801px',


      },
      colors: {
        // Add your custom colors here
        mattegray : "#383b3b",
        duskygray : "#676868",
        cream : "#C7BA92",
        lightcream : "#D1CFBF",
        darkcream : "#8078608C",
        gold:'#d4af37'
        // Add as many custom colors as you need
      },

      height: {

        '28px' :'28px',
        '73px'  : '73px',
        '193px'  : '193px',
        '248px' : '248px',
        '317px' : '317px',
        '493px' : '493px',
        '617px' : '617px',
        '720px' : '720px',
        '792px' : '792px',
      },
      width: {
        '128px' : '128px',
        '221px' : '221px',
        '240px' : '240px',
        '357px' : '357px',
        '379px' :  '379px',
        '390px' : '390px',
        '468px' : '468px',
        '520px' : '520px',
        '617px' : '617px',
        '700px' : '700px',
        '861px' : '861px',
        '1535px' : '1535px',

      },
      fontFamily: {
        'lucida': ['"Lucida Bright"', ...defaultTheme.fontFamily.serif],
      },

    },
  },
  plugins: [],
};
export default config;
