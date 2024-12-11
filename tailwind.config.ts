import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-image': "url('/footerbackground.png')",
      },
      fontFamily: {
        bodoni: ['var(--font-bodoni-moda)', 'serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom: {
          peach: '#e4c2b5',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
