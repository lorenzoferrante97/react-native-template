import { Platform, Text } from "react-native"

const DetectedDeviceOS = () => {
  return (
    <>
      {Platform.OS === "android" ? (
        <Text>Sono su Android versione {Platform.Version}</Text>
      ) : Platform.OS === "ios" ? (
        <Text>Sono su Ios!</Text>
      ) : (
        <Text>Sono su web!</Text>
      )}
    </>
  )
}

export default DetectedDeviceOS
