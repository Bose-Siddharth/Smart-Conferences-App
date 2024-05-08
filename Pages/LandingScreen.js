import {
  View,
  Text,
  StatusBar,
  Animated,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export default LandingScreen = ({ navigation }) => {
  return (
    <LinearGradient
      start={{ x: 0.2, y: 0.4 }}
      end={{ x: 0.9, y: 1.0 }}
      locations={[0, 0.7]}
      colors={["#60c2f0", "#5c63ed"]}
      style={styles.linearGradient}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/logo-smart-no-bg-grayscale.png")}
          style={{ height: 150 }}
        />
        <Text style={{ color: "#fff", fontWeight: "600", fontSize: 22 }}>
          SMART SOCIETY CONFERENCES
        </Text>
      </View>
      <Pressable
        style={styles.loginButton}
        onPress={() => {
          // Handle login button press
          navigation.navigate("Login");
        }}
        android_ripple={null} // Disable Android ripple effect
      >
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <Pressable
        style={styles.registerButton}
        onPress={() => {
          // Handle login button press
          navigation.navigate("Signup");
        }}
        android_ripple={null} // Disable Android ripple effect
      >
        <Text style={styles.text}>Register</Text>
      </Pressable>
      {/* More content */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  loginButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white background
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white shadow
    width: "50%",
  },
  registerButton: {
    backgroundColor: "rgba(96, 194, 240,0.9)", // Semi-transparent white background
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(255, 255, 255, 0.6)", // Semi-transparent white shadow
    width: "50%",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
