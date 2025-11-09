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
      <Drawer.Screen
        name='flatList'
        options={{
          drawerLabel: "Flat List",
          title: "Flat List",
        }}
      />
      <Drawer.Screen
        name='sectionList'
        options={{
          drawerLabel: "Section List",
          title: "Section List",
        }}
      />
      <Drawer.Screen
        name='imageTest'
        options={{
          drawerLabel: "Images",
          title: "Images",
        }}
      />
    </Drawer>
  )
}
