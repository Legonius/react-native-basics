import { View, Text, Modal, StyleSheet, Dimensions } from "react-native";
import React from "react";
import LearningButton from "./LearningButton";

export default function LearningModal({ isVisible, setIsVisible }) {
  return (
    <Modal
      animationType="slide" // fade / slide
      transparent={true}
      presentationStyle="pageSheet" // pagesheet work in ios //others formSheet is narrow pageSheet is wider & default fullscreen
      visible={isVisible}
      onRequestClose={() => setIsVisible(false)}
    >
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text>Hello World</Text>
          <LearningButton setToggle={setIsVisible} />
        </View>
      </View>
    </Modal>
  );
}
const halfScreenHeight = Dimensions.get("window").height * 0.4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.83)",
  },
  container1: {
    height: halfScreenHeight,
    backgroundColor: "black",
    paddingTop: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
