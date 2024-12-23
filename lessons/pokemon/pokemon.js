import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import React from "react";
import AllPokemon from "../../components/pokemon/AllPokemon";

export default function Pokemon() {
  const [pkmId, setPkmId] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <AllPokemon setPkmId={setPkmId} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(27, 40, 43)",
    flex: 1,
  },
});
