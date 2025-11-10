import { Link } from "expo-router"
import { Button } from "react-native"
import { Text, View } from "tamagui"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text margin={10}>Splash Screen (g)</Text>

      <Link replace href='/home' asChild>
        <Button title='Entra' />
      </Link>
    </View>
  )
}

// - DYNAMIC ROUTES ----------------------------------------------------------------------------------
// - ACCEDI A PARAMS ---------------------------------------------------
// - products/[category]/[productId].jsx -----------
// -------- 	const { productId, category } = useLocalSearchParams();
