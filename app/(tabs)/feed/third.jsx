import { Link } from "expo-router"
import { Text, View } from "react-native"

export default function Third() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View>
        <Text>Third</Text>
        <Link dismissTo href='/feed'>
          Torna a Feed
        </Link>
      </View>
    </View>
  )
}
