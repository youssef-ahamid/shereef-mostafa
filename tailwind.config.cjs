module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#E1E2EF',
        secondary: '#02020A',
        error: '#D0342C',
      },
      fontFamily: {
        cursive: ['Homemade Apple', 'cursive'],
        body: ['Josefin Slab', 'serif'],
        mono: ['Fira Code', 'monospace'],
        yes: ['Montagu Slab', 'serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 50%, 100%': { transform: 'translateX(0)' },
          '60%': { transform: 'translateX(10px)' },
          '70%': { transform: 'translateX(-10px)' },
          '80%': { transform: 'translateX(10px)' },
          '85%': { transform: 'translateX(-5px)' },
          '90%': { transform: 'translateX(5px)' },
          '95%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s linear forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
