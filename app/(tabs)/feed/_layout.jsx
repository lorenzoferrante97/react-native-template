import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{ headerShown: true }}>
			<Stack.Screen name="index" options={{ title: "Feed" }} />
			<Stack.Screen name="second" options={{ title: "Second" }} />
			<Stack.Screen name="third" options={{ title: "Third" }} />
		</Stack>
	);
}
