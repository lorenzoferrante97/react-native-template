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
        name='drawerSecondPage'
        options={{
          drawerLabel: "Drawer second page",
          title: "Second Page",
        }}
      />
    </Drawer>
  )
}
