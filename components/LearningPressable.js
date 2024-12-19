import { Text, Pressable } from "react-native";
import React from "react";

export default function LearningPressable() {
  return (
    <Pressable
      style={{ backgroundColor: "gray", padding: 30 }}
      onPress={() => console.log("just tap")}
      onPressIn={() => console.log("Press In")}
      onLongPress={() => console.log("Long Press")} // press hold more than 500ms
      onPressOut={() => console.log("Press Out")}
    >
      <Text style={{ color: "white" }}>LearningPressable</Text>
    </Pressable>
  );
}
