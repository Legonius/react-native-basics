import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";

export default function DynamicStack({ navigation, route }) {
  const { dName } = route.params;

  // set own Title with uselayoutEffect //option 2
  useLayoutEffect(() => {
    navigation.setOptions({ title: dName });
  }, [navigation, route]);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("Home", { dName: "Zaw Min Thu" })}
      >
        <Text>Zaw Min Thu</Text>
      </Pressable>
      {dName && <Text>This is {dName}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
});
