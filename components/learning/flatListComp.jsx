import { FlatList, Text } from "react-native"

const FlatListComp = ({ data }) => {
  return (
    <>
      <Text style={{ fontSize: 36, textAlign: "center" }}>FlatList</Text>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </>
  )
}

export default FlatListComp
