import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'
import { myThemes } from './themes/myTheme'

export const config = createTamagui({
  ...defaultConfig,

  themes: {
    ...defaultConfig.themes, // mantieni i temi base
    ...myThemes, // aggiungi i tuoi
  },

  media: {
    ...defaultConfig.media,
    // add your own media queries here, if wanted
  },
})