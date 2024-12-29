import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Button
        title="Go Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
      {/* {on other ways to navigate in drawer} */}
      <Button
        title="Jump To Dashboard"
        onPress={() => navigation.jumpTo("Dashboard")}
      />
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
