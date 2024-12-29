import { useState } from "react";
import Pokemon from "./lessons/pokemon/pokemon";
import StackNavigation from "./lessons/navigation/StackNavigation";
import NavigationDrawer from "./lessons/NavigationDrawer";

export default function App() {
  const [isPokemon, setIsPokemon] = useState(false);
  // return isPokemon ? <Pokemon /> : <StackNavigation />;
  return isPokemon ? <Pokemon /> : <NavigationDrawer />;
}
