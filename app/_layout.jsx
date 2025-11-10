import "react-native-reanimated"

import {
  SpaceGrotesk_400Regular,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
  useFonts,
} from "@expo-google-fonts/space-grotesk"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { useColorScheme } from "react-native"
import { TamaguiProvider, Theme } from "tamagui"
import { config } from "../tamagui.config"

SplashScreen.preventAutoHideAsync()

export default function AppLayout() {
  const colorScheme = useColorScheme() // 'light' | 'dark'

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
      <Theme name={colorScheme === "dark" ? "dark" : "light"}>
        <Stack screenOptions={{ headerShown: false }} />
      </Theme>
    </TamaguiProvider>

    // </Theme>
  )
}
