module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: "#E1E2EF",
        secondary: "#02020A",
        error: "#D0342C"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
