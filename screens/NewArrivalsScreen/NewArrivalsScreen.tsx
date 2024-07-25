// screens/NewArrivalsScreen/NewArrivalsScreen.tsx
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import HeroSection from "./HeroSection";
import AddBookButton from "./AddBookButton";
import EditBookButton from "./EditBookButton";

const NewArrivalsScreen = ({ navigation }) => {
  const handleAddBook = () => {
    navigation.navigate("AddBookScreen");
  };

  const handleEditBook = () => {
    navigation.navigate("EditBookScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeroSection />
      <AddBookButton onPress={handleAddBook} />
      <EditBookButton onPress={handleEditBook} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F0F4F8",
    padding: 20,
  },
});

export default NewArrivalsScreen;
