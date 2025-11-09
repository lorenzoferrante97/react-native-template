import { Link } from "expo-router"
import { Button, Text, View } from "react-native"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>Splash Screen (g)</Text>

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
