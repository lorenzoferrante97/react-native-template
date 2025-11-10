import { createThemeBuilder } from '@tamagui/theme-builder'

const themesBuilder = createThemeBuilder()
  .addPalettes({
    dark: ['#000', '#111', '#222', '#999', '#ccc', '#eee', '#fff'],
    light: ['#fff', '#eee', '#ccc', '#999', '#222', '#111', '#000'],
    // ANCHOR - CUSTOM PALETTES

    // NOTE --- Muted
    muted: [
      '#f6f7f9', // 0 / -10
      '#eceef2', // 1 / -9
      '#d5dae2', // 2 / -8
      '#afb9ca', // 3 / -7
      '#8495ac', // 4 / -6
      '#62748e', // 5 / -5
      '#506079', // 6 / -4
      '#424e62', // 7 / -3
      '#394353', // 8 / -2
      '#333a47', // 9 / -1
      '#22262f', // 10 / -0
    ],
    
    mutedDark: [
      '#22262f', // 0 / -10
      '#333a47', // 1 / -9
      '#394353', // 2 / -8
      '#424e62', // 3 / -7
      '#506079', // 4 / -6
      '#62748e', // 5 / -5
      '#8495ac', // 6 / -4
      '#afb9ca', // 7 / -3
      '#d5dae2', // 8 / -2
      '#eceef2', // 9 / -1
      '#f6f7f9', // 10 / -0
    ],
    
    // NOTE --- Primary
    primary: [
      '#ecf0ff', // 0 / -10
      '#dde4ff', // 1 / -9
      '#c2cdff', // 2 / -8
      '#9cabff', // 3 / -7
      '#757dff', // 4 / -6
      '#615fff', // 5 / -5
      '#4736f5', // 6 / -4
      '#3d2ad8', // 7 / -3
      '#3225ae', // 8 / -2
      '#2c2689', // 9 / -1
      '#1c1650', // 10 / -0
    ],
    
    primaryDark: [
      '#1c1650', // 0 / -10
      '#2c2689', // 1 / -9
      '#3225ae', // 2 / -8
      '#3d2ad8', // 3 / -7
      '#4736f5', // 4 / -6
      '#615fff', // 5 / -5
      '#757dff', // 6 / -4
      '#9cabff', // 7 / -3
      '#c2cdff', // 8 / -2
      '#dde4ff', // 9 / -1
      '#ecf0ff', // 10 / -0
    ],
    
    // NOTE --- Error
    error: [
      '#fff1f2', // 0 / -10
      '#ffe0e1', // 1 / -9
      '#ffc6c9', // 2 / -8
      '#ff9fa4', // 3 / -7
      '#ff676e', // 4 / -6
      '#fb2c36', // 5 / -5
      '#e91923', // 6 / -4
      '#c4111a', // 7 / -3
      '#a21219', // 8 / -2
      '#86161b', // 9 / -1
      '#490609', // 10 / -0
    ],
    
    errorDark: [
      '#490609', // 0 / -10
      '#86161b', // 1 / -9
      '#a21219', // 2 / -8
      '#c4111a', // 3 / -7
      '#e91923', // 4 / -6
      '#fb2c36', // 5 / -5
      '#ff676e', // 6 / -4
      '#ff9fa4', // 7 / -3
      '#ffc6c9', // 8 / -2
      '#ffe0e1', // 9 / -1
      '#fff1f2', // 10 / -0
    ],
    
    // NOTE --- Success
    success: [
      '#eafff5', // 0 / -10
      '#cdfee5', // 1 / -9
      '#a0fad1', // 2 / -8
      '#63f2b8', // 3 / -7
      '#25e29c', // 4 / -6
      '#00bc7d', // 5 / -5
      '#00a46d', // 6 / -4
      '#00835c', // 7 / -3
      '#00674a', // 8 / -2
      '#00553e', // 9 / -1
      '#003024', // 10 / -0
    ],
    
    successDark: [
      '#003024', // 0 / -10
      '#00553e', // 1 / -9
      '#00674a', // 2 / -8
      '#00835c', // 3 / -7
      '#00a46d', // 4 / -6
      '#00bc7d', // 5 / -5
      '#25e29c', // 6 / -4
      '#63f2b8', // 7 / -3
      '#a0fad1', // 8 / -2
      '#cdfee5', // 9 / -1
      '#eafff5', // 10 / -0
    ],
    


  })
  .addTemplates({
    base: {
      background: 0,
      backgroundHover: 3,
      backgroundPress: 4,
      backgroundFocus: 5,
      borderColor: 2,
      borderColorHover: 5,
      borderColorPress: 6,
      borderColorFocus: 7,
      color: -1,
      colorHover: -0,
      colorPress: -0,
      colorFocus: -10,
      colorTransparent: -3,
      placeholderColor: -5,
      shadowColor: -2,
      shadowColorHover: -3,
      shadowColorPress: -0,
      shadowColorFocus: -1,
    },
    subtle: {
      background: 1,
      color: -1,
    },
    // ANCHOR - CUSTOM TEMPLATES
    
  })
  .addThemes({
    light: {
      template: 'base',
      palette: 'light',
    },
    dark: {
      template: 'base',
      palette: 'dark',
    },
  })
  .addChildThemes({
    subtle: {
      template: 'subtle',
    },
    // ANCHOR - CUSTOM CHILD THEMES
    test: {
      template: "base",
      palette: "primary",
    }
  })

export const myThemes = themesBuilder.build()
