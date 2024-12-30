import { useState } from "react";
import Pokemon from "./lessons/pokemon/pokemon";
import StackNavigation from "./lessons/navigation/StackNavigation";
import NavigationDrawer from "./lessons/NavigationDrawer";
import TabNavi from "./lessons/TabNavi";

export default function App() {
  const [isPokemon, setIsPokemon] = useState(false);
  // return isPokemon ? <Pokemon /> : <StackNavigation />;
  return isPokemon ? <Pokemon /> : <TabNavi />;
}
