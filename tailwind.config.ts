import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  // darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
        playball: ['"Playball"', 'sans-serif'],
        viaodaLibre: ['"Viaoda Libre"', 'sans-serif']
      },
      container: {
        center: true,
        padding: '1rem',
        width: '1240px',
        screens: {
          xl: '1284px'
        }
      },
      colors: {
        main: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        anchor: 'var(--color-anchor)',
        effects: 'var(--color-effects)'
      },
      aspectRatio: {
        '3/2': '3 / 2',
        '9/3': '9 / 3',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
