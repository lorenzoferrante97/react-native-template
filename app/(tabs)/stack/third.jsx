import { Link } from "expo-router"
import { Button, Text, View } from "react-native"

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
        <Link asChild dismissTo href='/stack'>
          <Button title='Torna a Stack First Page' />
        </Link>
      </View>
    </View>
  )
}
