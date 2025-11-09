import { Link, useLocalSearchParams } from "expo-router"
import { Button, Text, View } from "react-native"

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
        <Text>Stack Second Page</Text>
        <Text>Ciao {name}</Text>
        <Link push href='/stack/third' asChild>
          <Button title='Vai a Third Page' />
        </Link>
      </View>
    </View>
  )
}
