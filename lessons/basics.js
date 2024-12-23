import { StyleSheet, View, Text, ScrollView } from "react-native";
import LearningModal from "../components/LearningModal";
import LearningButton from "../components/LearningButton";
import LearningImage from "../components/LearningImage";
import { useState } from "react";
import LearningPressable from "../components/LearningPressable";
import LearningStatusBar from "../components/LearningStatusBar";
import LearnActivityIndicator from "../components/LearnActivityIndicator";

export default function Basics() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <LearningStatusBar />
      <LearnActivityIndicator />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.contentContainer} // scroll view need content container to customize style inner elements
      >
        <Text>App Component</Text>
        <LearningModal isVisible={isVisible} setIsVisible={setIsVisible} />
        <LearningImage />
        <LearningButton setToggle={setIsVisible} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          maiores nostrum temporibus perspiciatis pariatur, accusamus modi amet
          a magnam necessitatibus provident rem eaque vero fugiat illo quod
          eius. Numquam, recusandae! Cumque non minima voluptatem, assumenda
          vero voluptas, enim similique nesciunt, nemo ut accusantium.
          Distinctio eveniet perferendis facere sit amet, alias hic vitae nisi
          assumenda iste, nostrum nesciunt tempora, officiis pariatur!
        </Text>
        <LearningPressable />
        <LearningImage />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  contentContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
