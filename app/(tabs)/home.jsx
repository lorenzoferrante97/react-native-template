import { Text, View } from "react-native"

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 48 }}>Home</Text>
    </View>
  )
}

// - DYNAMIC ROUTES ----------------------------------------------------------------------------------
// - ACCEDI A PARAMS ---------------------------------------------------
// - products/[category]/[productId].jsx -----------
// -------- 	const { productId, category } = useLocalSearchParams();
