import { useState } from "react"
import { Text, TextInput, View } from "react-native"

const CustomComp = () => {
  const [text, setText] = useState("")

  return (
    <View>
      <TextInput
        placeholder='scrivi qui...'
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}
      />

      <Text style={{ padding: 10, fontSize: 42 }}>{text}</Text>
    </View>
  )
}

export default CustomComp
