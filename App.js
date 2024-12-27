// import Basics from "./lessons/basics";

import { useState } from "react";
import Pokemon from "./lessons/pokemon/pokemon";
import StackNavigation from "./lessons/navigation/StackNavigation";

export default function App() {
  const [isPokemon, setIsPokemon] = useState(false);
  return isPokemon ? <Pokemon /> : <StackNavigation />;
}
