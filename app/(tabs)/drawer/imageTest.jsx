import { Image, Text, View } from "react-native"

export default function ImageTestScreen() {
  return (
    <View
      style={{
        backgroundColor: "#ccffff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}>
      <Text>Remote Image</Text>
      <Image
        source={{ uri: "https://picsum.photos/id/237/1080" }}
        style={{ width: 200, height: 200, resizeMode: "cover" }}
      />
      <Text>Local Image</Text>
      <Image
        source={require("../../../assets/images/react-logo.png")}
        style={{ width: 200, height: 200, resizeMode: "cover" }}
      />
    </View>
  )
}
