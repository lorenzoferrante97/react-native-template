import { SectionList, Text, View } from "react-native"

const SectionListScreen = () => {
  const usersSections = [
    { title: "D", data: ["Devin", "Dan", "Dominic"] },
    { title: "J", data: ["Jackson", "James", "Jillian"] },
  ]

  return (
    <View
      style={{
        width: "full",
        backgroundColor: "#ccffff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ fontSize: 36, textAlign: "center" }}>SectionList</Text>
      <SectionList
        sections={usersSections}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontSize: 20, color: "#66ccff" }}>{section.title}</Text>
        )}
        keyExtractor={(index) => index}
      />
    </View>
  )
}

export default SectionListScreen
