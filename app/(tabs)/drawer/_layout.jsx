import { Drawer } from "expo-router/drawer"

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name='drawerHome'
        options={{
          drawerLabel: "Drawer Home",
          title: "Home",
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
