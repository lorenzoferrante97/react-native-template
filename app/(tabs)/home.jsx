import { router } from "expo-router"
import { Button, FlatList, ScrollView, SectionList, Text, View } from "react-native"
import CustomComp from "../../components/customComp"
export default function Home() {
  const users = [
    { name: "Lorenzo" },
    { name: "Giulia" },
    { name: "Matteo" },
    { name: "Sara" },
    { name: "Alessandro" },
    { name: "Elena" },
    { name: "Davide" },
    { name: "Chiara" },
    { name: "Francesca" },
    { name: "Marco" },
  ]

  const usersSections = [
    { title: "D", data: ["Devin", "Dan", "Dominic"] },
    { title: "J", data: ["Jackson", "James", "Jillian"] },
  ]

  return (
    <ScrollView>
      <View>
        <CustomComp />

        <Button
          title='Vai a Drawer Second Screen'
          onPress={() => router.push("/drawer/drawerSecondPage")}
        />
      </View>

      <View
        style={{
          height: 400,
          width: "full",
          backgroundColor: "#ffffcc",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text style={{ fontSize: 36, textAlign: "center" }}>FlatList</Text>
        <FlatList
          data={users}
          renderItem={({ item }) => <Text style={{ fontSize: 20 }}>{item.name}</Text>}
        />
      </View>

      <View
        style={{
          height: 400,
          width: "full",
          backgroundColor: "#ccffff",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text style={{ fontSize: 36, textAlign: "center" }}>SectionList</Text>
        <SectionList
          sections={usersSections}
          renderItem={({ item }) => <Text>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={{ fontSize: 20, color: "#66ccff" }}>{section.title}</Text>
          )}
          keyExtractor={(index) => index}
        />
      </View>

      <View
        style={{
          height: 400,
          width: "full",
          backgroundColor: "#ffccff",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text style={{ fontSize: 48, textAlign: "center" }}>Home is a ScrollView</Text>
      </View>
      <View
        style={{
          height: 400,
          width: "full",
          backgroundColor: "#ccffff",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text style={{ fontSize: 48, textAlign: "center" }}>Home is a ScrollView</Text>
      </View>
    </ScrollView>
  )
}

// - DYNAMIC ROUTES ----------------------------------------------------------------------------------
// - ACCEDI A PARAMS ---------------------------------------------------
// - products/[category]/[productId].jsx -----------
// -------- 	const { productId, category } = useLocalSearchParams();
