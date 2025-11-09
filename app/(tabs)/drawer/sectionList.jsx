import { View } from "react-native"
import SectionListComp from "../../../components/learning/sectionListComp"

export default function SectionListScreen() {
  const usersSections = [
    { title: "D", data: ["Devin", "Dan", "Dominic"] },
    { title: "J", data: ["Jackson", "James", "Jillian"] },
  ]

  return (
    <View
      style={{
        backgroundColor: "#ccffff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <SectionListComp data={usersSections} />
    </View>
  )
}
