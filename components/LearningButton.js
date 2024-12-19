import React from "react";
import { Button } from "react-native";

export default function LearningButton({ setToggle }) {
  return <Button onPress={() => setToggle((prev) => !prev)} title="Press" />;
}
