import { SectionList, Text } from "react-native"

const SectionListComp = ({ data }) => {
  return (
    <>
      <Text style={{ fontSize: 36, textAlign: "center" }}>SectionList</Text>
      <SectionList
        sections={data}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontSize: 20, color: "#66ccff" }}>{section.title}</Text>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </>
  )
}

export default SectionListComp
