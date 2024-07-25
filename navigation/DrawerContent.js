import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useTheme } from "./ThemeProvider";
import { Text } from "react-native-paper";

const DrawerContainer = styled.View`
  flex: 1;
`;

const ProfileContainer = styled.View`
  align-items: center;
  padding: 20px;
  background-color: ${(props) => (props.isDarkMode ? "#333" : "#f5f5f5")};
`;

const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 10px;
`;

const MenuItem = styled.TouchableOpacity`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

const MenuText = styled.Text`
  font-size: 16px;
  margin-left: 15px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
`;

const DrawerContent = ({ navigation }) => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <DrawerContainer
      style={{ backgroundColor: isDarkMode ? "black" : "white" }}
    >
      <ProfileContainer isDarkMode={isDarkMode}>
        <ProfileImage source={require("../assets/profile.jpg")} />
        <Text style={{ color: isDarkMode ? "white" : "black" }}>
          BYIRINGIRO Christian
        </Text>
      </ProfileContainer>
      {[
        { name: "Home", icon: "home-outline", route: "Home" },
        { name: "Settings", icon: "settings-outline", route: "Settings" },
        { name: "Privacy", icon: "lock-closed-outline", route: "Privacy" },
        { name: "Share App", icon: "share-social-outline", route: "ShareApp" },
        {
          name: "Account Management",
          icon: "person-outline",
          route: "AccountManagement",
        },
        {
          name: "Delete Account",
          icon: "trash-outline",
          route: "DeleteAccount",
        },
        { name: "Log Out", icon: "log-out-outline", route: "LogOut" },
        { name: "Dark Mode", icon: "moon-outline", action: toggleTheme },
      ].map((item, index) => (
        <MenuItem
          key={index}
          onPress={() => {
            if (item.route) {
              navigation.navigate(item.route);
            } else if (item.action) {
              item.action();
            }
          }}
        >
          <Ionicons
            name={item.icon}
            size={24}
            color={isDarkMode ? "white" : "black"}
          />
          <MenuText isDarkMode={isDarkMode}>{item.name}</MenuText>
        </MenuItem>
      ))}
    </DrawerContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default DrawerContent;
