import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { useState } from "react";

import React from "react";
import AllPokemon from "../../components/pokemon/AllPokemon";
import SelectedPokemon from "../../components/pokemon/selectedPokemon";

export default function Pokemon() {
  const [pkmId, setPkmId] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      {pkmId === null ? (
        <AllPokemon setPkmId={setPkmId} />
      ) : (
        <SelectedPokemon id={pkmId} setId={setPkmId} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(27, 40, 43)",
    flex: 1,
  },
});
