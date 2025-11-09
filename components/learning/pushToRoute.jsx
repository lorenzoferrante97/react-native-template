import { router } from "expo-router"
import { Button } from "react-native"

const PushToRoute = () => {
  return (
    <Button
      title='Vai a Drawer Second Screen'
      onPress={() => router.push("/drawer/drawerSecondPage")}
    />
  )
}

export default PushToRoute
