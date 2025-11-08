import { Link, useLocalSearchParams } from "expo-router"
import { Text, View } from "react-native"

export default function Second() {
  const { name } = useLocalSearchParams()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View>
        <Text>Second</Text>
        <Text>Ciao {name}</Text>
        <Link push href='/feed/third'>
          Vai a Third
        </Link>
      </View>
    </View>
  )
}
