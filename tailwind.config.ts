// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Chỉ định font 'sans' mặc định sẽ sử dụng biến '--font-sans' (chính là Kanit)
        sans: ['var(--font-sans)'],
      },
      // ... các cấu hình màu sắc và khác của bạn vẫn giữ nguyên
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
};

export default config;
