module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#e4d8b4',
        secondary: '#272324',
        accent: '#e2cd6d',
        error: '#e86f68',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        body: ['Helvetica', 'sans-serif'],
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
