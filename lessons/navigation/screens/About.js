import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function About({ navigation }) {
  //   const navigationManually = useNavigation(); // can use this too
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button
        title="Go Back Home"
        onPress={() =>
          navigation.navigate("Home", {
            name: "Zaw Min Thu", // send data along with navigation
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
});
