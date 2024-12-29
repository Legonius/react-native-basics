import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>dashboard</Text>
      <Button
        title="Toggle Draweer"
        onPress={() => navigation.toggleDrawer()}
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
