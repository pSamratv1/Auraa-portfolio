const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-raleway)", "sans-serif"],
      },
      colors: {
        background: "#050505", // Deep Cinematic Black
        accent: "#C5A059", // Elegant Gold
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
