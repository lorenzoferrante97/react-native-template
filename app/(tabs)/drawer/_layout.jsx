import { Drawer } from "expo-router/drawer"

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name='deviceOS'
        options={{
          drawerLabel: "Device OS",
          title: "Device OS",
        }}
      />
      <Drawer.Screen
        name='inputText'
        options={{
          drawerLabel: "Input Text",
          title: "Input Text",
        }}
      />
    </Drawer>
  )
}
