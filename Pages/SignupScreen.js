import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Pressable,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import useHttp from "../hooks/useHttp";
import { useLogin } from "../context/LoginProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import OIcon from "react-native-vector-icons/Octicons";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [edasId, setEdasId] = useState("");
  const { postRequest, loading, error } = useHttp();
  const { setIsLoggedIn } = useLogin();
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleMobileNumberChange = (text) => {
    setMobileNumber(text);
  };

  const handleEdasIdChange = (text) => {
    setEdasId(text);
  };

  const handleSubmit = async () => {
    // Handle form submission, e.g., send data to server
    const response = await postRequest("/auth/signup", {
      name,
      email,
      password,
      mobileNumber,
      edasId,
    });
    console.log("RESPONSE", response);
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
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1, justifyContent: "space-between" }}
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
            source={require("../assets/user.png")}
            style={{ height: 75, width: 75, marginTop: "5%" }}
          />
          <Text style={{ fontSize: 36, fontWeight: "600" }}>Welcome!</Text>
          <Text style={{ color: "#444", textAlign: "center" }}>
            Register yourself to see the exciting events!
          </Text>
        </View>
        <View style={{ marginTop: "-25%" }}>
          <View style={styles.container}>
            <Text>{errorMessage}</Text>
            <Text style={styles.label}>Name</Text>
            <View style={styles.searchSection}>
              <MCIcon
                style={styles.searchIcon}
                name="alphabet-latin"
                size={22}
                color="rgba(147,218,214,1)"
              />
              <TextInput
                style={styles.input}
                onChangeText={handleNameChange}
                value={name}
                placeholderTextColor="#777"
                placeholder="Enter your email"
                keyboardType="email-address"
              />
            </View>
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
            <Text style={styles.label}>Mobile Number</Text>
            <View style={styles.searchSection}>
              <MCIcon
                style={styles.searchIcon}
                name="cellphone"
                size={20}
                color="rgba(147,218,214,1)"
              />
              <TextInput
                style={styles.input}
                onChangeText={handleMobileNumberChange}
                value={mobileNumber}
                placeholderTextColor="#777"
                placeholder="Enter your Mobile Number"
                keyboardType="email-address"
              />
            </View>
            <Text style={styles.label}>EDAS ID</Text>
            <View style={styles.searchSection}>
              <OIcon
                style={styles.searchIcon}
                name="number"
                size={20}
                color="rgba(147,218,214,1)"
              />
              <TextInput
                style={styles.input}
                onChangeText={handleEdasIdChange}
                value={edasId}
                placeholderTextColor="#777"
                placeholder="Enter your Edas ID"
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
                marginTop: "5%",
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
    </ScrollView>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: "-75%",
  },
  overlay: {
    alignSelf: "flex-start",
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
