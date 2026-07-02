/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#102033',
        muted: '#607087',
        line: '#dfe8f2',
        blue: {
          50: '#edf7ff',
          600: '#1466d8',
          700: '#0d55ba',
        },
        green: {
          50: '#ecfbf2',
          600: '#139b67',
          700: '#0b7b52',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(16, 32, 51, 0.08)',
      },
    },
  },
  plugins: [],
};
