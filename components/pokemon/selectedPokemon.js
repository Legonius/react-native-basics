import { View, Text, StyleSheet, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { exactPokemon } from "../../constants";

export default function SelectedPokemon({ id, setId }) {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    const getPokemonDetail = async (pkmId) => {
      try {
        const fetchData = await fetch(exactPokemon + pkmId);
        const data = await fetchData.json();
        setPokemon(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (id > 0) {
      getPokemonDetail(id);
    }
  }, [id]);
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={() => setId(null)} />
      {pokemon.name ? (
        <View style={styles.container2}>
          <Text style={styles.textHeader}>{pokemon.name}</Text>
          <Text style={styles.text}>
            {pokemon.types[1]?.type.name}
            {pokemon.types[1] && " / "}
            {pokemon.types[0]?.type.name}
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: pokemon.sprites.front_shiny,
            }}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.textHeader2}>Stats</Text>
            <Text style={styles.text}>id: {pokemon.id}</Text>
            {pokemon.stats.map((stat) => (
              <Text key={stat.stat.name} style={styles.text}>
                {stat.stat.name}: {stat.base_stat}
              </Text>
            ))}
            <Text style={styles.text}>weight: {pokemon.weight}</Text>
            <Text style={styles.text}>height: {pokemon.height}</Text>
          </View>
          <Button
            title="Random Pokemon"
            onPress={() => setId(Math.floor(Math.random() * 1200))}
          />
        </View>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  container2: {
    flex: 1,
    justifyContent: "space-between",
  },
  textHeader: {
    color: "white",
    fontSize: 30,
    textTransform: "capitalize",
    fontWeight: 700,
  },
  textHeader2: {
    fontSize: 25,
    color: "white",
    fontWeight: 500,
  },
  text: {
    color: "rgb(248, 246, 246)",
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
});
