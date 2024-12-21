import { ActivityIndicator, View } from "react-native";
import React from "react";

export default function LearnActivityIndicator() {
  return (
    <View>
      <ActivityIndicator />
      <ActivityIndicator size={"large"} />
      <ActivityIndicator size={"large"} color={"midnightblue"} />
      <ActivityIndicator
        size={"large"}
        color={"midnightblue"}
        animating={false}
      />
    </View>
  );
}
