import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import useHttp from "../hooks/useHttp";
import { useLogin } from "../context/LoginProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
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
    <View style={styles.container}>
      <Text>{errorMessage}</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleEmailChange}
        value={email}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={handlePasswordChange}
        value={password}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
