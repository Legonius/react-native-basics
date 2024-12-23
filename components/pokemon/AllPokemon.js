import { View, ScrollView, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { pokemonApi } from "../../constants";

export default function AllPokemon({ setPkmId }) {
  const [pokemons, setPokemons] = useState([]);

  const handlePress = (id) => {
    setPkmId(id);
  };

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const fetchData = await fetch(pokemonApi);
        const data = await fetchData.json();
        if (data && data.results) {
          setPokemons(data.results);
        }
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    // Fetch data only if `pokemons` is empty
    if (pokemons.length === 0) {
      getPokemon();
    }
  }, []); // Dependency array should be empty to run the effect only once

  return (
    <ScrollView style={styles.container}>
      {pokemons.length > 0 ? (
        pokemons.slice(0, 200).map((pkm) => (
          <Pressable key={pkm.id} onPress={() => handlePress(pkm.id)}>
            <Text
              style={[
                styles.text,
                { textAlign: pkm.id % 2 !== 0 ? "left" : "right" },
              ]}
            >
              {pkm.name}
            </Text>
            <View style={styles.line} />
          </Pressable>
        ))
      ) : (
        <Text style={styles.text}>Loading...</Text>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
  line: {
    width: "100%",
    height: 2,
    backgroundColor: "gray",
    opacity: 0.5,
    marginVertical: 10,
  },
});
