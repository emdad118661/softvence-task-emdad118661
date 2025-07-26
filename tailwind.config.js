/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'poppins': ['Poppins', 'sans-serif'], // 'poppins' নামে একটি নতুন ফন্ট ফ্যামিলি তৈরি করা হলো
      },
    },
  },
  plugins: [],
}

