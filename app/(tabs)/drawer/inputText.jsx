import { View } from "react-native"
import InputText from "../../../components/learning/inputText"

export default function InputTextScreen() {
  return (
    <View
      style={{
        backgroundColor: "#ccffff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <InputText />
    </View>
  )
}
