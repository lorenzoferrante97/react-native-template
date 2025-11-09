import { Link } from "expo-router"
import { Button, Text, View } from "react-native"

export default function Stack() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View>
        <Text>Stack First Page</Text>
        <Link asChild push href={{ pathname: "/stack/second", params: { name: "Lorenzo" } }}>
          <Button title='Vai a second Page' />
        </Link>
      </View>
    </View>
  )
}

// - <STACK> ----------------------------------------------------------------------------------
// - <LINK> ---------------------------------------------------
// --- OPTIONS -------------------
// -------- push = stack -> second -> third -> BACK a second -> BACK a stack
// -------- dismissTo = stack -> second -> third -> BACK a stack

// --- PARAMS -------------------
// -------- params: { name: "Lorenzo" }
