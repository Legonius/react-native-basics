import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  SectionList,
} from "react-native";
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
    // <ScrollView style={styles.container}>
    //   {pokemons.length > 0 ? (
    //     pokemons.slice(0, 200).map((pkm) => (
    // <Pressable key={pkm.id} onPress={() => handlePress(pkm.id)}>
    //   <Text
    //     style={[
    //       styles.text,
    //       { textAlign: pkm.id % 2 !== 0 ? "left" : "right" },
    //     ]}
    //   >
    //     {pkm.name}
    //   </Text>
    //   <View style={styles.line} />
    // </Pressable>
    //     ))
    //   ) : (
    //     <Text style={styles.text}>Loading...</Text>
    //   )}
    // </ScrollView>

    // ============= FlatList ==============

    <View style={styles.container}>
      {/* {Better to use FlatList than ScrollView to show so many list to optimize app} */}
      <FlatList
        data={pokemons}
        renderItem={({ item }) => (
          <Pressable
            style={styles.container1}
            onPress={() => handlePress(item.id)}
          >
            <Text
              style={[
                styles.text,
                { textAlign: item.id % 2 !== 0 ? "left" : "right" },
              ]}
            >
              {item.name}
            </Text>
            {/* <View style={styles.line} /> */}
          </Pressable>
        )}
        ListEmptyComponent={<Text style={styles.text}>No items found.</Text>}
        ListHeaderComponent={
          <Text style={styles.header}>All Pokemon List</Text>
        }
        ListFooterComponent={
          <Text style={styles.header}>No More Pokemons.</Text>
        }
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<View style={styles.seperator} />}
        h
        // horizontal
      />
    </View>
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
  header: {
    fontSize: 30,
    fontWeight: 700,
    color: "rgb(237, 240, 19)",
    textAlign: "center",
    marginBottom: 15,
  },
  seperator: {
    height: 20,
  },
  container1: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
});
