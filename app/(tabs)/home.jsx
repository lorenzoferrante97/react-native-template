import { Text, View } from "react-native"
export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View>
        <Text>Home</Text>
      </View>
    </View>
  )
}

// - DYNAMIC ROUTES ----------------------------------------------------------------------------------
// - ACCEDI A PARAMS ---------------------------------------------------
// - products/[category]/[productId].jsx -----------
// -------- 	const { productId, category } = useLocalSearchParams();
