module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        md: '58px',
        lg: '76px',
      },
      fontFamily: {
        'sans': ['Noto Sans', 'Noto Sans TC', 'sans-serif'],
        'serif': ['sans-serif']
      }
    },
    screens: {
      'sm': '428px',
      // => @media (min-width: 428px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }

    },
    extend: {},
  },
  plugins: [],
}