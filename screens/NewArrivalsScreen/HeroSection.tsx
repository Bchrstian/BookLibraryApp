import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const HeroSection = () => {
  return (
    <View style={styles.heroSection}>
      <Text style={styles.heroTitle}>Explore New Books!</Text>
      <Text style={styles.heroSubtitle}>
        Add and edit your favorite reads with ease.
      </Text>
      <Image
        source={{ uri: "https://example.com/hero-image.jpg" }} // Replace with a relevant book image URL
        style={styles.heroImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heroSection: {
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#1E3D58", // Background color for the hero section
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  heroTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },
  heroImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
});

export default HeroSection;
