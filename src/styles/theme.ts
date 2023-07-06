export const theme = {
  colors: {
    blueColor: '#162950',
    backgroundColor: '#0F1624',
    whiteColor: '#FFFFFF',
    gradientColor: '#24c6dc',
    grayColor: '#ababab',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xsmall: '1.2rem',
      small: '1.6rem',
      normal: '1.8rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteOrEqSmallest: '(max-width: 320px)',
    lteOrEqSmall: '(max-width: 576px)',
    lteOrEqMedium: '(max-width: 768px)',
    lteOrEqLarge: '(max-width: 992px)',
    gteOrEqSmallest: '(min-width: 320px)',
    gteOrEqSmall: '(min-width: 576px)',
    gteOrEqMedium: '(min-width: 768px)',
    gteOrEqLarge: '(min-width: 992px)',
  },
  spacings: {
    xtiny: '0.2rem',
    tiny: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.2rem',
    small: '1.6rem',
    mediumSmall: '2.0rem',
    medium: '2.4rem',
    mediumLarge: '2.8rem',
    large: '3.2rem',
    xlarge: '3.6rem',
    xxlarge: '4.0rem',
    huge: '4.4rem',
    xhuge: '4.8rem',
    xxhuge: '5.6rem',
    hero: '6.4rem',
    xhero: '7.2rem',
    xxhero: '8.0rem',
  },
  transitions: {
    fastest: 'all 100ms ease-in-out',
    faster: 'all 200ms ease-in-out',
    fast: 'all 300ms ease-in-out',
    normal: 'all 500ms ease-in-out',
    slow: 'all 600ms ease-in-out',
    slower: 'all 800ms ease-in-out',
    slowest: 'all 1s ease-in-out',
  },
} as const;
