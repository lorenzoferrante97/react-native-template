import {
  SpaceGrotesk_400Regular,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
  useFonts,
} from "@expo-google-fonts/space-grotesk"

import { TamaguiProvider } from "@tamagui/core"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { config } from "../tamagui.config"

// import { myTheme } from "../themes"

// function Theme({ theme }) {
//   const colorScheme = useColorScheme() // "light" | "dark"

//   return (
//     <View style={theme[colorScheme]}>
//       <Slot />
//     </View>
//   )
// }

SplashScreen.preventAutoHideAsync()

export default function AppLayout() {
  const [loaded, error] = useFonts({
    SpaceGrotesk_400Regular,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    // <Theme theme={myTheme}>
    <TamaguiProvider config={config}>
      <Stack screenOptions={{ headerShown: false }} />
    </TamaguiProvider>

    // </Theme>
  )
}
