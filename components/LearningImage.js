import { Image, StyleSheet, Dimensions } from "react-native";
import React from "react";

export default function LearningImage() {
  const screenWidth = Dimensions.get("window").width;
  return (
    <Image
      style={[styles.img, { width: screenWidth }]}
      source={{
        //outer source link need uri key and size
        uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx_OmGdtKrJfIhQPBFAIt54tppNy0r-cVLGw&s`,
      }}
    />
  );
}

const styles = StyleSheet.create({
  img: {
    height: 300,
    resizeMode: "cover",
  },
});
