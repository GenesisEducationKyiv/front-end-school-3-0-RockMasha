export const colors = {
  black: `#000`,
  white: `#fff`,
  grey: `#333`,
  violet: `#9500ff`,
  opacity: `rgba(0, 0, 0, 0.5)`,
  whiteGrey: `#4b5563`,
  red100: `#cd2a51`,
  red200: `#ff0000`,
  purple100: `#19021b`,
  purple200: `#2e1f37`,
  purple300: `#660f67`,
  purple400: `#5e3165`,
  purple500: `#9332a4`,
  purple600: `#ae1bc8`,
}

export const globalCSSVars = `
  :root {
    ${Object.entries(colors)
      .map(
        ([key, value]) =>
          `--color-${key
            .replace(/([A-Z]|\d+)/g, '-$1')
            .toLowerCase()}: ${value};`
      )
      .join('\n    ')}
  }
`
