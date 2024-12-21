import { StatusBar } from "react-native";
import React from "react";

export default function LearningStatusBar() {
  return (
    <StatusBar
      backgroundColor={"red"}
      barStyle={"dark-content"}
      visible={false}
    />
  );
}
