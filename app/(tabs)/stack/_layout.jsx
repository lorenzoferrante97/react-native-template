import { Stack } from "expo-router"

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' options={{ title: "Stack" }} />
      <Stack.Screen name='second' options={{ title: "Second" }} />
      <Stack.Screen name='third' options={{ title: "Third" }} />
    </Stack>
  )
}
