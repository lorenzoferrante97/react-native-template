import { FlatList, Text, View } from "react-native"

const FlatListScreen = () => {
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
        width: "full",
        backgroundColor: "#ffffcc",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ fontSize: 36, textAlign: "center" }}>FlatList</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={{ fontSize: 20 }}>{item.name}</Text>}
      />
    </View>
  )
}

export default FlatListScreen
