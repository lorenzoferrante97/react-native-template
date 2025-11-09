/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { Animated, Text, TouchableHighlight, View } from "react-native"

export default function ButtonsScreen() {
  const opacity = new Animated.Value(0)

  useEffect(
    () => Animated.timing(opacity, { toValue: 1, duration: 400, useNativeDriver: true }).start(),
    []
  )

  const AnimatedButton = Animated.createAnimatedComponent(TouchableHighlight)

  return (
    <View
      style={{
        backgroundColor: "#ffccff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <AnimatedButton
        style={{
          opacity: opacity,
          width: "auto",
          maxWidth: 240,
          backgroundColor: "#000000",
          borderRadius: 900,
          paddingBlock: 12,
          paddingInline: 20,
        }}
        underlayColor='#00000066'
        onPress={() => console.log("button premuto!")}>
        <Text style={{ color: "#ffffff", textAlign: "center" }}>Button</Text>
      </AnimatedButton>
    </View>
  )
}
