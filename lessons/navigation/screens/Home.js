import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function Home({ navigation, route }) {
  //   const navigationManually = useNavigation(); // can use this too

  const { name, dName } = route.params;
  return (
    <View style={styles.container}>
      <Text>Welcome {name}</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <Button
        title="Change Name"
        onPress={() => navigation.setParams({ name: "Guest Again" })} // set Params
      />
      <Button
        title="Go to Dynamic"
        onPress={() =>
          navigation.navigate("Dynamic", { dName: "Dynamic Name" })
        }
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
