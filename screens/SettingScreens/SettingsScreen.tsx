import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./SettingsScreenStyles";

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/settingprofile.jpg")}
          style={styles.backgroundImage}
        />
        <View style={styles.profileContainer}>
          <Image
            source={require("../../assets/profile.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>BYIRINGIRO Christian</Text>
          <Text style={styles.profileBio}>
            Work hard in silence. Let your success be the noise.
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="heart-outline" size={24} color="white" />
          <Ionicons
            name="person-outline"
            size={24}
            color="white"
            style={styles.profileIcon}
          />
        </View>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>My Address</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Account</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Notifications</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Devices</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Passwords</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Language</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
