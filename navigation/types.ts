// navigation/types.ts
import { NavigatorScreenParams } from "@react-navigation/native";
import { Book } from "./services/DatabaseService";

// Define your stack parameters
export type HomeStackParamList = {
  Home: undefined;
  EditBook: { book: Book }; // Ensure `Book` type is defined
  // Add other screens here
};

// Define your drawer navigator parameters
export type DrawerParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
};

// Define bottom tab navigator parameters
export type BottomTabParamList = {
  MainHome: undefined;
  NewArrivals: undefined;
  Settings: undefined;
};

// Root stack param list if needed
export type RootStackParamList = {
  Main: NavigatorScreenParams<DrawerParamList>;
  // Add other navigators if necessary
};
