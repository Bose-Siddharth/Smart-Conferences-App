import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Pressable,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import useHttp from "../hooks/useHttp";
import { useLogin } from "../context/LoginProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { postRequest, loading, error } = useHttp();
  const { setIsLoggedIn } = useLogin();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    const response = await postRequest("/auth/login", { email, password });
    if (response.success) {
      await AsyncStorage.setItem("token", response.token);
      setIsLoggedIn(true);
    } else if (!response.success) {
      setErrorMessage(response.message);
    } else {
      setErrorMessage(error);
    }
  };

  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: "space-around" }}
      source={require("../assets/app-back.png")}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1 / 2,
        }}
      >
        <Image
          source={require("../assets/heart.png")}
          style={{ height: 150, width: 150, marginTop: "5%" }}
        />
        <Text style={{ fontSize: 36, fontWeight: "600" }}>Welcome Back!</Text>
        <Text style={{ color: "#444", textAlign: "center" }}>
          Welcome back! Your presence has been missed, and we're excited to
          catch up with you!
        </Text>
      </View>
      <View>
        <View style={styles.container}>
          <Text>{errorMessage}</Text>
          <Text style={styles.label}>Email</Text>
          <View style={styles.searchSection}>
            <Icon
              style={styles.searchIcon}
              name="envelope"
              size={20}
              color="rgba(147,218,214,1)"
            />
            <TextInput
              style={styles.input}
              onChangeText={handleEmailChange}
              value={email}
              placeholderTextColor="#777"
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          </View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.searchSection}>
            <Icon
              style={styles.searchIcon}
              name="lock"
              size={24}
              color="rgba(147,218,214,1)"
            />
            <TextInput
              style={styles.input}
              onChangeText={handlePasswordChange}
              value={password}
              placeholderTextColor="#777"
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>
          <Pressable
            onPress={handleSubmit}
            style={{
              padding: 16,
              marginTop: "25%",
              borderRadius: 30,
              width: "50%",
              alignItems: "center",
              backgroundColor: "rgba(147,218,214,1)",
              ...Platform.select({
                ios: {
                  shadowColor: "#000",
                  shadowOffset: { width: -5, height: -5 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                },
                android: {
                  elevation: 8,
                },
              }),
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600", fontSize: 18 }}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: "-50%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.5)", // White overlay with 50% opacity
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 5,
    color: "#444",
    fontWeight: "500",
    marginTop: 20,
  },
  // input: {
  //   width: "100%",
  //   height: 40,
  //   borderColor: "#93dad6",
  //   borderWidth: 2,
  //   borderRadius: 16,
  //   marginBottom: 20,
  //   paddingLeft: 10,
  // },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0)",
    borderColor: "#93dad6",
    borderWidth: 2,
    borderRadius: 16,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "rgba(255,255,255,0)",
    color: "#444",
    fontWeight: "350",
  },
});
