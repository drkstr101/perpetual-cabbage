/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: ({ colors }) => ({
        neutral: colors.neutral,
        primary: colors.cyan,
        secondary: colors.sky,
        accent: colors.teal,
        danger: colors.rose,
        warning: colors.amber,
        success: colors.emerald,
        white: '#fafafa',
        black: '#0a0a0a',
      }),
    },
  },
  plugins: [],
};
