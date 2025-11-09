import { View } from "react-native"
import DetectedDeviceOS from "../../../components/learning/detectedDeviceOS"

export default function DrawerHome() {
  return (
    <View
      style={{
        backgroundColor: "#ffccff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <DetectedDeviceOS />
    </View>
  )
}
