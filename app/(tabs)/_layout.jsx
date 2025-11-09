import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { Tabs } from "expo-router"

export default function TabsLayout() {
  return (
    <Tabs
      backBehavior='order' // un tasto back torna all'ultima route visitata
      screenOptions={{ headerShown: true, tabBarActiveTintColor: "#000000" }}>
      <Tabs.Screen
        name='home'
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons size={size} name='home-filled' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='stack'
        options={{
          title: "Stack",
          tabBarIcon: ({ color, size }) => <MaterialIcons size={size} name='feed' color={color} />,
          tabBarBadge: 2,
        }}
      />
      <Tabs.Screen
        name='drawer'
        options={{
          title: "Drawer",
          tabBarIcon: ({ color, size }) => <MaterialIcons size={size} name='menu' color={color} />,
        }}
      />
    </Tabs>
  )
}
