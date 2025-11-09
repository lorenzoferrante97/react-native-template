import { Text, TouchableHighlight, View } from "react-native"

export default function ButtonsScreen() {
  return (
    <View
      style={{
        backgroundColor: "#ffccff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <TouchableHighlight
        style={{
          width: "auto",
          maxWidth: 240,
          backgroundColor: "#000000",
          borderRadius: 900,
          paddingBlock: 12,
          paddingInline: 20,
        }}
        underlayColor='#00000066'
        onPress={() => console.log("button premuto!")}>
        <Text style={{ color: "#ffffff", textAlign: "center" }}>Button</Text>
      </TouchableHighlight>
    </View>
  )
}
