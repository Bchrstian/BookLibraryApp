// assets/themes/ThemeToggle.tsx
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useTheme } from "../../navigation/ThemeProvider"; // Adjust this path if necessary

const ThemeToggle = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <Text>{isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</Text>
    </TouchableOpacity>
  );
};

export default ThemeToggle;
