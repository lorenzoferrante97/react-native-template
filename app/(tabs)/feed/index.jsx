import { Link } from "expo-router"
import { Text, View } from "react-native"

export default function Feed() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View>
        <Text>Feed</Text>
        <Link push href={{ pathname: "/feed/second", params: { name: "Lorenzo" } }}>
          Vai a Second
        </Link>
      </View>
    </View>
  )
}

// - <STACK> ----------------------------------------------------------------------------------
// - <LINK> ---------------------------------------------------
// --- OPTIONS -------------------
// -------- push = feed -> second -> third -> BACK a second -> BACK a feed
// -------- dismissTo = feed -> second -> third -> BACK a feed

// --- PARAMS -------------------
// -------- params: { name: "Lorenzo" }
