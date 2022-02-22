module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: "#E1E2EF",
        secondary: "#02020A",
        error: "#D0342C"
      },
      fontFamily: {
        cursive: ['Homemade Apple', 'cursive'],
        body: ['Josefin Slab', 'serif'],
        mono: ['Fira Code', 'monospace'],
        yes: ['Montagu Slab', 'serif']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
