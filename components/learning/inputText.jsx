import { useState } from "react"
import { Text, TextInput } from "react-native"

const InputText = () => {
  const [text, setText] = useState("")

  return (
    <>
      <Text nativeID='label'>Input Label</Text>
      <TextInput
        accessible={true}
        accessibilityLabel='Input di testo'
        accessibilityLabelledBy='label'
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

      <Text style={{ padding: 4, fontSize: 42 }}>{text}</Text>
    </>
  )
}

export default InputText
