import { View } from "react-native"
import FlatListComp from "../../../components/learning/flatListComp"

export default function FlatListScreen() {
  const users = [
    { name: "Lorenzo" },
    { name: "Giulia" },
    { name: "Matteo" },
    { name: "Sara" },
    { name: "Alessandro" },
    { name: "Elena" },
    { name: "Davide" },
    { name: "Chiara" },
    { name: "Francesca" },
    { name: "Marco" },
  ]

  return (
    <View
      style={{
        backgroundColor: "#ffffcc",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <FlatListComp data={users} />
    </View>
  )
}
