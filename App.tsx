import React, { useEffect } from "react";
import Toast from "react-native-toast-message";
import AppNavigator from "./navigation/AppNavigator";
import { initDatabase } from "./navigation/services/DatabaseService";
import { BookProvider } from "./assets/context/BookContext";
import { ThemeProvider as PaperTheme } from "./navigation/ThemeProvider"; // Adjust the import path as needed

export default function App() {
  useEffect(() => {
    // Initialize the database when the app starts
    initDatabase().catch((error) => {
      console.error("Failed to initialize the database:", error);
    });
  }, []);

  return (
    <PaperTheme>
      <BookProvider>
        <AppNavigator />
        <Toast />
      </BookProvider>
    </PaperTheme>
  );
}
